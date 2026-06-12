import { Link } from "react-router-dom"
import Card from "../Components/Card"
import CliWindow from "../Components/CliWindow"
import Footer from "../Components/Footer"
import NoctureCard from "../Components/NoctureCard"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050607] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(0,255,65,0.14),transparent_22%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%),linear-gradient(90deg,rgba(255,255,255,0.03),transparent_25%)] pointer-events-none" />

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-[#00ff41]/20 bg-[#00ff41]/10 px-4 py-2 text-sm font-semibold text-[#00ff41] backdrop-blur-sm">
              Biological research powered by AI
            </span>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
                Discover biology research with a modern AI lab assistant.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Explore the latest scientific trends, ask expert biology questions, and get instant summaries from an intelligent research assistant built for life science insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="inline-flex items-center justify-center rounded-full bg-[#00ff41] px-8 py-4 text-lg font-semibold text-[#0A0A0A] shadow-[0_24px_80px_rgba(0,255,65,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_96px_rgba(0,255,65,0.28)]">
                Get Started
              </Link>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition hover:border-white/30 hover:bg-white/10">
                Explore features
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-gray-200 shadow-xl shadow-black/20 backdrop-blur-xl">
                <p className="font-semibold text-white">401+ papers indexed</p>
                <p className="mt-2 text-sm text-gray-300">Access a growing library of biology research and AI summaries.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-gray-200 shadow-xl shadow-black/20 backdrop-blur-xl">
                <p className="font-semibold text-white">AI-driven explanations</p>
                <p className="mt-2 text-sm text-gray-300">Simplify scientific concepts with clear, modern biology insights.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-gray-200 shadow-xl shadow-black/20 backdrop-blur-xl">
                <p className="font-semibold text-white">Responsive workspace</p>
                <p className="mt-2 text-sm text-gray-300">Designed for desktop and mobile research workflows.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="absolute -right-12 top-6 h-24 w-24 rounded-full bg-[#00d4ff]/10 blur-3xl" />
            <div className="absolute -bottom-12 left-6 h-32 w-32 rounded-full bg-[#00ff41]/10 blur-3xl" />

            <div className="relative space-y-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#00ff41]">Research snapshot</p>
                <h2 className="mt-4 text-3xl font-bold text-white">Biology trends in one place</h2>
                <p className="mt-3 text-sm leading-7 text-gray-300">A polished research preview with AI-powered context, tailored for curious scientists and learners.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#0b0c0f]/80 p-5">
                  <p className="text-2xl font-bold text-[#00ff41]">Advanced AI</p>
                  <p className="mt-3 text-sm leading-6 text-gray-300">Get smart biology answers and meaningful summaries.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-[#0b0c0f]/80 p-5">
                  <p className="text-2xl font-bold text-[#00d4ff]">Modern visuals</p>
                  <p className="mt-3 text-sm leading-6 text-gray-300">Enjoy a refined glassmorphism-inspired front page experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#00ff41]/80">Features</p>
          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Modern biology research tools</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400">Everything your research workflow needs: AI summaries, trend tracking, and expert-level answers in a clean science interface.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="AI Agent to discuss" description="Let the AI guide you through biology topics with clear explanations and research context." className="p-8 rounded-[1.75rem] border border-white/10 bg-black/50 backdrop-blur-xl" icon="DNA" />
          <Card title="Trend Research" description="Browse the latest biology publications and discover the most important scientific breakthroughs." className="p-8 rounded-[1.75rem] border border-white/10 bg-black/50 backdrop-blur-xl" icon="leaf" />
          <Card title="AI reabstracts" description="Get concise summaries and conceptual overviews for complex experiments and results." className="p-8 rounded-[1.75rem] border border-white/10 bg-black/50 backdrop-blur-xl" icon="Tree" />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <NoctureCard />
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <CliWindow />
      </section>

      <Footer />
    </main>
  )
}
