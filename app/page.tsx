'use client';

import { Modal } from "antd";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const highlights = [
  "React & Next.js",
  "Responsive UI Design",
  "Full-Stack Development",
  "Performance Focused",
];

const stats = [
  { label: "Projects Delivered", value: "20+" },
  { label: "Years Building", value: "2+" },
  { label: "Focus Areas", value: "Web Apps, Mobile Apps" },
];

const certifications = [
  {
    title: "Cisco CCNP Security SNCF v1.1 (Exam 300-710) Cert Prep",
    issuer: "LinkedIn Learning",
    year: "2026",
    image: "/assets/cisco-ccnp-security.png",
    note: "Professional training focused on Cisco security technologies and preparation for the CCNP Security SNCF exam.",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    image: "/assets/introduction-to-cybersecurity.png",
    note: "Foundational cybersecurity training covering security concepts, threats, vulnerabilities, and online safety.",
  },
  {
    title: "Node.js Essential Training",
    issuer: "LinkedIn Learning",
    year: "2026",
    image: "/assets/node-js-training.png",
    note: "Practical training covering Node.js fundamentals, server-side development, modules, and application building.",
  },
];


const featuredProjects = [
  {
    title: "Tallowed Texts",
    description:
      "A responsive website built from scratch with HTML, CSS, SCSS, and JavaScript, featuring smooth product browsing, interactive UI elements, and a clean checkout experience.",
    stack: ["HTML", "CSS", "SCSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://rahulghimire.github.io/FED-TASK/dist/index.html",
    sourceUrl: "https://github.com/Rahulghimire/internship-task",
    image: "/assets/tallowed-texts.png",
  },
  {
    title: "Mero Doctor",
    description:
      "A hospital appointment booking system",
    stack: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    liveUrl: "https://merodoctor.com/",

    sourceUrl: "https://merodoctor.com/",

    image: "/assets/mero-doctor.png",

    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Jewelry Management System",
    description:
      "A full-stack jewelry management system with a modern admin dashboard, inventory management, data visualization, and smooth user interactions.",
    stack: [
      "Django",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "TanStack Query",
      "Redux Persist",
      "Chart.js",
      "Animations",
    ],
    liveUrl: "https://jewelry.dipartha.com/login",
    sourceUrl: "https://jewelry.dipartha.com/login",
    image: "/assets/jewelry-mgmt.png",
    accent: "from-emerald-500 to-green-400",

  },
  {
    title: "Pet Product Store",

    description:
      "A modern e-commerce store for pet products with responsive product browsing, smooth interactions, and a user-friendly shopping experience.",

    stack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    liveUrl: "https://react-internship-task.vercel.app/",

    sourceUrl: "https://github.com/Rahulghimire/frontend-developer-task",

    image: "/assets/pet-store.png",

    // accent: "from-emerald-500 to-green-400",
    accent: "from-violet-500 to-purple-400",
  },
];

function ThreeHeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    const pointLight = new THREE.PointLight(0xf472b6, 22, 18);
    pointLight.position.set(3, 3, 5);
    const pointLightTwo = new THREE.PointLight(0x38bdf8, 18, 18);
    pointLightTwo.position.set(-3, -2, 4);
    scene.add(ambientLight, pointLight, pointLightTwo);

    const materials = [
      new THREE.MeshPhysicalMaterial({
        color: 0xf472b6,
        roughness: 0.18,
        metalness: 0.18,
        transmission: 0.25,
        thickness: 0.7,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x8b5cf6,
        roughness: 0.16,
        metalness: 0.2,
        transmission: 0.2,
        thickness: 0.6,
      }),
      new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        roughness: 0.2,
        metalness: 0.16,
        transmission: 0.18,
        thickness: 0.5,
      }),
    ];

    const orbit = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.1, 0.26, 160, 16),
      materials[0]
    );
    orbit.position.set(0.2, 0.15, 0);
    group.add(orbit);

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.05, 0), materials[1]);
    core.position.set(-0.3, -0.1, 0);
    group.add(core);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.05, 16, 80), materials[2]);
    ring.rotation.x = Math.PI / 2.2;
    group.add(ring);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 2.4 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.016,
        transparent: true,
        opacity: 0.7,
      })
    );
    scene.add(particles);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.35;
      group.rotation.x = Math.sin(elapsed * 0.5) * 0.18;
      orbit.rotation.y = elapsed * 0.7;
      core.rotation.y = -elapsed * 0.8;
      ring.rotation.z = elapsed * 0.35;
      particles.rotation.y = elapsed * 0.08;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      materials.forEach((material) => material.dispose());
      particleGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 rounded-[2rem]" />;
}

export default function LandingPage() {
  const [selectedCert, setSelectedCert] = useState<{
    title: string;
    image: string;
  } | null>(null);
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
              Available for part-time, full-time, and freelance opportunities
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/20 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <ThreeHeroScene />
              <div className="hero-card relative z-10">
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
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-600">Featured Projects</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Selected work that reflects my design and development approach.
              </h2>
            </div>
            <Link
              href="/projects"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-fuchsia-300 hover:bg-fuchsia-50"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50/70 shadow-sm">
                <div className={`bg-gradient-to-r ${project.accent} p-4`}>
                  <img src={project.image} alt={project.title} className="h-48 w-full rounded-[1rem] object-cover shadow-sm" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600 shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-950 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      Live Project
                    </Link>
                    <Link
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400"
                    >
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">MySQL</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">Ant Design</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">Material UI</span>

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

      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-fuchsia-600">Certifications</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Credentials from different places.
              </h2>
            </div>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
              Academic + Professional + Online
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={cert?.title + index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/80 shadow-sm transition hover:-translate-y-1 hover:border-fuchsia-300 hover:bg-white"
              >
                <img
                  src={cert.image}
                  onClick={() =>
                    setSelectedCert({ title: cert.title, image: cert.image })
                  }
                  alt={cert.title}
                  className="h-48 w-full cursor-pointer object-cover transition hover:opacity-90"

                />

                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    {cert.title}
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    {cert.issuer}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                    <span>{cert.year}</span>

                    <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                      Verified
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {cert.note}
                  </p>
                </div>
              </div>
            ))}
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

      <Modal
        open={!!selectedCert}
        onCancel={() => setSelectedCert(null)}
        footer={null}
        centered
        width="90%"
        style={{ maxWidth: 900 }}
        styles={{
          body: {
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#0f172a",
          },
        }}
        destroyOnHidden
      >
        {selectedCert && (
          <div className="w-full">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[80vh] w-full object-contain"
            />
            <div className="bg-slate-900 px-6 py-4 text-center">
              <p className="text-sm font-medium text-white">
                {selectedCert.title}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}
