
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
    <main className="relative min-h-screen bg-[#050607] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,255,65,0.14),transparent_22%)] pointer-events-none" />
      <div className="relative mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-8">
          <section className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Leaf size={44} className="text-[#00ff41]" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#00ff41]/80">Create account</p>
                <h1 className="mt-3 text-4xl font-bold text-white">Join the AI lab</h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
              Register now to save biology searches, ask the AI assistant, and explore curated research content.
            </p>
          </section>

          <section className="rounded-4xl border border-white/10 bg-black/65 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-200">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirm" className="text-sm font-medium text-gray-200">Confirm Password</label>
                  <input
                    id="confirm"
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Repeat password"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20"
                  />
                </div>
              </div>

              {submitted && errors.length > 0 && (
                <div className="rounded-3xl border border-[#b00020]/20 bg-[#b00020]/10 p-4 text-sm text-[#ffccd5]">
                  <ul className="list-disc space-y-1 pl-5">
                    {errors.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <FlashButton isDisabled={loading} className="w-full" backgroundColor="bg-[#00ff41]">
                  {loading ? "Loading..." : "Register"}
                </FlashButton>
                <FlashButton
                  isDisabled={loading}
                  type="reset"
                  backgroundColor="bg-white/10"
                  textColor="text-white"
                  className="w-full"
                  onClick={() => {
                    setName("")
                    setEmail("")
                    setPassword("")
                    setConfirm("")
                  }}
                >
                  Clear
                </FlashButton>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              If you already have an account,{' '}
              <Link className="text-[#00ff41] hover:text-[#53ff70]" to="/login">
                login here
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Register;