import React, { useState, useTransition } from "react";
import FlashButton from "../Components/FlashButton";
import { Leaf } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { LOGIN } from "../api/endpoints.constants";
import { useDispatch } from "react-redux";
import { update } from "../context/AuthState";
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [loading, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: string[] = [];
    if (!email.trim()) errs.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Enter a valid email address.");
    if (!password) errs.push("Password is required.");
    else if (password.length < 6) errs.push("Password must be at least 6 characters.");
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const val = validate();
      setErrors(val);
      setSubmitted(true);
      if (val.length === 0) {
        // Replace this with real submit logic (API call)
        console.log({ email, password });
        startTransition(async () => {
          try {
            const res = await api.post(LOGIN, {
              email,
              password
            })
            console.log(res)
            dispatch(update({
              user: res.data.user.name,
              email: res.data.user.email,
              userId: res.data.user._id,
              isAuthed: true
            }))
            toast.success("login success")
            navigate("/dashboard")
            
          } catch (error: any) {
            toast.error(error.response.data)
          }
        })
        // Optionally clear form
        setEmail("");
        setPassword("");
        setSubmitted(false);
      }
    } catch (error: any) {
        toast.error(error)
    }

  };
  return (
    <div className="rounded-2xl bg-[#2020206e]" style={{ maxWidth: 480, margin: "2rem auto", padding: "1rem" }}>
      <div className="flex flex-row justify-center">
      <Leaf size={"50px"} color="#11ff00" />
      <h1 className="text-2xl m-3">Login</h1>
      </div>
      <p>Please fill these fields to Login.</p>
      <form onSubmit={handleSubmit} noValidate>
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

        {submitted && errors.length > 0 && (
          <div style={{ color: "#b00020", marginBottom: 12 }}>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {errors.map((err, i) => (
                <li key={i}>{err}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-row gap-3">
            <FlashButton isDisabled={loading}>{loading? "loading ..." : "Login"}</FlashButton>
            <FlashButton type="reset" backgroundColor="bg-blue-200" onClick={() => {
                setEmail("")
                setPassword("")
            }}>Clear</FlashButton>
        </div>

      </form>
      <p className="p-5">if you dont have an account, click <Link className="text-green-600 hover:text-green-300" to="/register">here</Link>.</p>
    </div>
  );
}

export default Login