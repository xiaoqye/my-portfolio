import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 pt-24">
      {/* 2-column layout */}
      <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
        {/* LEFT (sticky) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          {/* Hero */}
          <div>
            <h1 className="text-3xl font-semibold">Hey, I’m Quency</h1>
            <p className="mt-2 text-gray-600">
              Business Analytics • Project Management • Customer Success
            </p>

            <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
              <p className="font-medium text-gray-900">Welcome — I’m glad you’re here!</p>
              <p>
                I enjoy using data, platforms, and practical implementation to solve real business
                problems.
              </p>
              <p>I’m excited to keep growing while creating real impact in my work.</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/xiaoqye"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Connect with me
              </a>

              <a
                href="mailto:xye@bu.edu"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Email me
              </a>

              <a
                href="https://github.com/xiaoqye"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                GitHub
              </a>

              <a
                href="https://public.tableau.com/app/profile/quency.ye1021/vizzes"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Tableau
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="mt-8">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border bg-gray-100 sm:h-56 sm:w-56">
              <Image src="/quency.png" alt="Quency Ye" fill className="object-cover" priority />
            </div>
          </div>

          {/* Optional: Skills list */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-900">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "SQL",
                "Python",
                "Tableau",
                "Power BI",
                "Experimentation",
                "Product Thinking",
              ].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-xs text-gray-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT (scrolls normally) */}
        <section className="min-w-0">
          {/* Highlights */}
          <Highlights />

          {/* Projects (for now same list — we’ll split into 3 sections next) */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold">Projects</h2>

            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image src={p.cover} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500">{p.category}</div>
                    <div className="mt-1 font-medium">{p.title}</div>
                    <div className="mt-2 text-sm text-gray-600">{p.summary}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
