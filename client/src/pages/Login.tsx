import React, { useState } from "react";
import FlashButton from "../Components/FlashButton";

function Login() {
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
    e.preventDefault();
    const val = validate();
    setErrors(val);
    setSubmitted(true);
    if (val.length === 0) {
      // Replace this with real submit logic (API call)
      console.log({ email, password });
      // Optionally clear form
      setEmail("");
      setPassword("");
      setSubmitted(false);
      alert("Registered (demo). Check console for payload.");
    }
  };

  return (
    <div className="border-green-600 border-2" style={{ maxWidth: 480, margin: "2rem auto", padding: "1rem" }}>
      <h2>Login</h2>
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
            <FlashButton>Login</FlashButton>
            <FlashButton backgroundColor="bg-blue-200" onClick={() => {
                setEmail("")
                setPassword("")
            }}>Clear</FlashButton>
        </div>

      </form>
    </div>
  );
}

export default Login