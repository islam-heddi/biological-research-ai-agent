
import React, { useState, useTransition } from "react";
import FlashButton from "../Components/FlashButton";
import { Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { REGISTER } from "../api/endpoints.constants";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { update } from "../context/AuthState";

function Register() {
  const navigate = useNavigate()
  const [loading, startTransition] = useTransition()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch()

  const validate = () => {
    const errs: string[] = [];
    if (!name.trim()) errs.push("name is required.");
    if (!email.trim()) errs.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Enter a valid email address.");
    if (!password) errs.push("Password is required.");
    else if (password.length < 6) errs.push("Password must be at least 6 characters.");
    if (password !== confirm) errs.push("Passwords do not match.");
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const val = validate();
      setErrors(val);
      setSubmitted(true);
      if(val.length !==0) toast.error("check the form again")
      if (val.length === 0) {
        // Replace this with real submit logic (API call)
        console.log({ name, email, password });
        startTransition(async () => {
          try {
            const res = await api.post(REGISTER, {name: name, email, password})
            dispatch(update({
              user: res.data.user.name,
              email: res.data.user.email,
              userId: res.data.user._id,
              isAuthed: true
            }))
            toast.success("Registration passed")
            navigate("/dashboard")
          } catch (error) {
            console.log(error)
            toast.error("registration failed")
          }
        })
        // Optionally clear form
        setName("");
        setEmail("");
        setPassword("");
        setConfirm("");
        setSubmitted(false);
      }  
    } catch (error: any) {
      toast.error(error.response.data)
    }
  };

  return (
    <div className="rounded-2xl bg-[#2020206e]" style={{ maxWidth: 480, margin: "2rem auto", padding: "1rem" }}>
      <div className="flex flex-row justify-center">
      <Leaf size={"50px"} color="#11ff00" />
      <h1 className="text-2xl m-3">Register</h1>
      </div>
      <p>Please fill these fields to register.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="name">name</label>
          <input
            id="name"
            value={name}
            className="border-green-300 border-2"
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={{ display: "block", width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            className="border-green-300 border-2"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ display: "block", width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            className="border-green-300 border-2"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ display: "block", width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            id="confirm"
            type="password"
            value={confirm}
            className="border-green-300 border-2"
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repeat password"
            style={{ display: "block", width: "100%", padding: 8, boxSizing: "border-box" }}
          />
        </div>

        {submitted && errors.length > 0 && (
          <div style={{ color: "#b00020", marginBottom: 12 }}>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-row gap-2">
        <FlashButton isDisabled={loading}>{loading? "loading..." : "Register"}</FlashButton>
        <FlashButton isDisabled={loading} type="reset" backgroundColor="bg-blue-200" onClick={() => {
            setName("")
            setEmail("")
            setPassword("")
            setConfirm("")
        }}>Clear</FlashButton>
        </div>
      </form>
      <p className="p-5">if you have an account, click <Link className="text-green-600 hover:text-green-300 " to={"/login"}>here</Link>.</p>
    </div>
  );
}

export default Register;