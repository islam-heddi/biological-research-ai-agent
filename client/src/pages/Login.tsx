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
    <main className="relative min-h-screen bg-[#050607] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,212,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(0,255,65,0.14),transparent_22%)] pointer-events-none" />
      <div className="relative mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-8">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Leaf size={44} className="text-[#00ff41]" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#00ff41]/80">AI Research login</p>
                <h1 className="mt-3 text-4xl font-bold text-white">Welcome back</h1>
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
              Sign in to continue exploring biology research, AI summaries, and your personalized dashboard.
            </p>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-black/65 p-8 shadow-xl shadow-black/30 backdrop-blur-xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-200">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#00ff41] focus:ring-2 focus:ring-[#00ff41]/20"
                />
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
                  {loading ? "Loading ..." : "Login"}
                </FlashButton>
                <FlashButton
                  type="reset"
                  backgroundColor="bg-white/10"
                  textColor="text-white"
                  className="w-full"
                  onClick={() => {
                    setEmail("")
                    setPassword("")
                  }}
                >
                  Clear
                </FlashButton>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link className="text-[#00ff41] hover:text-[#53ff70]" to="/register">
                Create one
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Login