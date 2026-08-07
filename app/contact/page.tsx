"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatus("success");
      setFeedback("Thanks! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-6 py-20 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s build something meaningful together.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you want a polished product, a fresh website, or a thoughtful redesign, I&apos;d love to hear about it.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold text-slate-900">Prefer email?</p>
            <a href="mailto:ghimirerahul554@gmail.com" className="mt-2 inline-flex text-sm font-medium text-slate-700 underline underline-offset-4">
              ghimirerahul554@gmail.com
            </a>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
                placeholder="Tell me about your idea..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {feedback ? (
            <p
              className={`mt-4 text-sm ${
                status === "success" ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
