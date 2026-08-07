import Link from "next/link";

const highlights = [
  "React & Next.js",
  "Responsive UI Design",
  "Full-Stack Development",
  "Performance Focused",
];

const stats = [
  { label: "Projects Delivered", value: "10+" },
  { label: "Years Building", value: "2+" },
  { label: "Focus Areas", value: "Web Apps" },
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-900">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Available for freelance and full-time opportunities
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Hi, I’m <span className="text-slate-700">Rahul Ghimire</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              I craft modern, high-performing web experiences with thoughtful UI,
              clean code, and a strong focus on user impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-white"
              >
                Let’s Talk
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-card animate-fade-up delay-200">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Current Focus
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  Building thoughtful digital products
                </h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Online
              </span>
            </div>

            <div className="space-y-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                >
                  <span className="text-sm text-slate-600">{stat.label}</span>
                  <span className="text-sm font-semibold text-slate-900">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white shadow-lg">
              <p className="text-sm leading-6 text-slate-200">
                I specialize in turning ideas into seamless interfaces and reliable
                web applications that feel polished from day one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
