import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Rahul</h1>
      <p className="text-lg max-w-xl opacity-80">
        A Fullstack Developer passionate about building modern, responsive web
        applications.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-lg border hover:bg-black hover:text-white transition"
        >
          View Projects
        </Link>
        <Link
          href={"/contact"}
          className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
