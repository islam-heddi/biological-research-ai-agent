
import React, { useState } from "react";
import FlashButton from "../Components/FlashButton";
import { Leaf } from "lucide-react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: string[] = [];
    if (!username.trim()) errs.push("Username is required.");
    if (!email.trim()) errs.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Enter a valid email address.");
    if (!password) errs.push("Password is required.");
    else if (password.length < 6) errs.push("Password must be at least 6 characters.");
    if (password !== confirm) errs.push("Passwords do not match.");
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = validate();
    setErrors(val);
    setSubmitted(true);
    if (val.length === 0) {
      // Replace this with real submit logic (API call)
      console.log({ username, email, password });
      // Optionally clear form
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirm("");
      setSubmitted(false);
      alert("Registered (demo). Check console for payload.");
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
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            className="border-green-300 border-2"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
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
        <FlashButton>Register</FlashButton>
        <FlashButton type="reset" backgroundColor="bg-blue-200" onClick={() => {
            setUsername("")
            setEmail("")
            setPassword("")
            setConfirm("")
        }}>Clear</FlashButton>
        </div>
      </form>
    </div>
  );
}

export default Register;