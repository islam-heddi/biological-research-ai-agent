import { useSelector } from "react-redux"
import { CircleUser, NotepadText, Sparkles, MessagesSquare, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ChannelType } from "../types/types";
import { api } from "../api/api";
import { GET_CHANNELS } from "../api/endpoints.constants";

function Dashboard() {
  const navigate = useNavigate()
  const user = useSelector((state: any) => state.auth.value.user);
  const email = useSelector((state: any) => state.auth.value.email);
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const [data, setData] = useState<ChannelType[]>([])
  
  useEffect(() => {
    api.get(GET_CHANNELS).then(res => setData(res.data))
  },[])

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400/80">Welcome back</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{user || "Researcher"}</h1>
              <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                Your workspace is ready. Explore AI research, chat with the agent, and manage your discoveries from one modern dashboard.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-3xl bg-white/5 p-6 shadow-xl shadow-black/20 ring-1 ring-white/10">
              <CircleUser size={88} color="#7dd3fc" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Current email</p>
              <p className="mt-3 text-lg font-semibold text-white">{email || "No email set"}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Today</p>
              <p className="mt-3 text-lg font-semibold text-white">{today}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Quick actions</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Get started fast</h2>
            </div>
            <Sparkles size={28} className="text-emerald-400" />
          </div>

          <div className="grid gap-4">
            <button onClick={() => navigate("/channels")} className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-4 text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
              <span className="flex items-center gap-3 font-semibold">
                <MessagesSquare size={20} /> Start a chat
              </span>
              <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate("/researchs")} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100 transition hover:bg-white/10">
              <span className="flex items-center gap-3 font-semibold">
                <BookOpen size={20} /> Browse research
              </span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Insights</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Overview</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Track your latest activity and keep the focus on research and conversations that matter most.</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-3xl bg-slate-900/70 p-4">
              <div>
                <p className="text-sm text-slate-400">Active conversations</p>
                <p className="mt-1 text-2xl font-semibold text-white">{data?.length || 0 }</p>
              </div>
              <span className="rounded-2xl bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">Stable</span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Highlights</p>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-4">
              <p className="text-sm text-slate-400">Feature</p>
              <p className="mt-2 text-xl font-semibold text-white">AI-powered research discovery</p>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-4">
              <p className="text-sm text-slate-400">Tip</p>
              <p className="mt-2 text-xl font-semibold text-white">Use search filters to narrow down papers faster.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Need help?</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Quick guidance</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">Start a conversation with the AI agent for research summaries, paper recommendations, and exploration ideas.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-200">
            <NotepadText size={18} className="text-emerald-300" />
            Ask the agent for a summary or new topic.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard