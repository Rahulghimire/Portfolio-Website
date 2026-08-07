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
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_rgba(255,247,237,0.96)_0%,_rgba(253,242,248,0.95)_45%,_rgba(238,242,255,0.96)_100%)] text-slate-900">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />
      <div className="hero-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(244,114,182,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(56,189,248,0.16),_transparent_24%),radial-gradient(circle_at_50%_80%,_rgba(129,140,248,0.14),_transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.55),_rgba(255,255,255,0.12)_45%,_rgba(255,255,255,0.4))]" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 inline-flex items-center rounded-full border border-fuchsia-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Available for freelance, part-time, and full-time opportunities
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Hi, I’m <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 bg-clip-text text-transparent">Rahul Ghimire</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              I craft modern, high-performing web experiences with thoughtful UI,
              clean code, and a strong focus on user impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-sky-600"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300 hover:bg-fuchsia-50"
              >
                Let’s Talk
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-fuchsia-100 bg-white/80 px-3 py-2 text-sm text-slate-600 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up delay-200">
            <div className="hero-card">
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
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm"
                  >
                    <span className="text-sm text-slate-600">{stat.label}</span>
                    <span className="text-sm font-semibold text-slate-900">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-violet-900 to-sky-800 p-5 text-white shadow-lg">
                <p className="text-sm leading-6 text-slate-200">
                  I specialize in turning ideas into seamless interfaces and reliable
                  web applications that feel polished from day one.
                </p>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                UI/UX
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Interactive design</p>
            </div>

            <div className="floating-card floating-card-bottom">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Performance
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Fast & scalable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-600">Profile</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Full-stack developer with a strong product mindset.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                I bring 2+ years of experience building enterprise-grade healthcare and jewelry management systems for multi-user, multi-branch operations. My work spans scalable frontend architecture, resilient API integration, and polished responsive interfaces.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-violet-900 to-sky-800 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Core Strengths</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">React</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">TypeScript</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">Next.js</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">Node.js</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-slate-950">Education & Qualifications</h3>
                  <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-sm font-medium text-fuchsia-700">Academic</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <p className="text-sm font-semibold text-slate-900">Master of Professional Information Technology</p>
                    <p className="mt-1 text-sm text-slate-600">Charles Sturt University • 2025 – Present</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <p className="text-sm font-semibold text-slate-900">Bachelor of Science in Computer Science and Information Technology</p>
                    <p className="mt-1 text-sm text-slate-600">St. Xavier&apos;s College • 2023</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-slate-950">Work Experience</h3>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">Professional</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">Web Developer • Compiler Infosys</p>
                      <p className="text-sm text-slate-500">Apr 2025 – Nov 2025</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                      <li>• Built and maintained enterprise jewelry management solutions using React, TypeScript, Ant Design, Tailwind, Redux Toolkit, and TanStack Query.</li>
                      <li>• Worked on multi-user, multi-branch, and multi-company systems with complex business workflows.</li>
                      <li>• Contributed to UI enhancements including drag-and-drop templates and custom Nepali date picker components.</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">Software Developer • Midas Technologies</p>
                      <p className="text-sm text-slate-500">Jun 2023 – Apr 2025</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                      <li>• Developed HMIS modules covering Investigation, Pharmacy, Inventory, Clinical, Patient Administration, and Accounts.</li>
                      <li>• Integrated REST APIs, WebSocket-based payment systems, and visual analytics with Chart.js.</li>
                      <li>• Implemented PDF generation, drag-and-drop workflows, dark mode, and performance improvements.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/60 bg-white/50 px-6 py-6 backdrop-blur sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">© 2026 Rahul Ghimire. Crafted for modern web experiences.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Rahulghimire"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-fuchsia-300 hover:bg-fuchsia-50"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rahulghimire/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ghimirerahul554@gmail.com"
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-300 hover:bg-violet-50"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
