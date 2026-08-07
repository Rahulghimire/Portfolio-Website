import Link from "next/link";

const projects = [
  {
    title: "E-commerce Experience",
    description:
      "A polished storefront with smooth product discovery, fast interactions, and a modern checkout flow.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://example.com",
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A data-first dashboard with elegant charts, concise metrics, and a clean admin experience.",
    stack: ["TypeScript", "Chart.js", "Node.js"],
    liveUrl: "https://example.com",
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Creative Portfolio",
    description:
      "A storytelling-driven portfolio experience focused on motion, clarity, and conversion.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com",
    accent: "from-emerald-500 to-lime-400",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-6 py-20 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Featured Work
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Projects that blend design, speed, and thoughtful interaction.
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Each project is built to feel polished, responsive, and purposeful—from concept through deployment.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accent}`} />
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Project {index + 1}
                </span>
                <span className="text-sm font-medium text-slate-400">Live Preview</span>
              </div>

              <h2 className="text-2xl font-semibold text-slate-900">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-slate-800"
              >
                Open Live Project
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
