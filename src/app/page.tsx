import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Highlights from "@/components/Highlights";



export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 pt-24">
      {/* Hero */}
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-semibold">Hey, I’m Quency</h1>
          <p className="mt-2 text-gray-600"> Business Analytics • Project Management • Customer Success</p>

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
  {/* Connect with me (LinkedIn) — first */}
  <a
    href="https://www.linkedin.com/in/xiaoqye"
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
  >
    Connect with me
  </a>

  {/* Email me — normal style (not black) */}
  <a
    href="mailto:xye@bu.edu"
    className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
  >
    Email me
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/xiaoqye"
    target="_blank"
    rel="noreferrer"
    className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
  >
    GitHub
  </a>

  {/* Tableau */}
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
        <div className="flex justify-start lg:justify-center">
          <div className="relative h-48 w-48 overflow-hidden rounded-2xl border bg-gray-100 sm:h-56 sm:w-56">
            <Image src="/quency.png" alt="Quency Ye" fill className="object-cover" priority />
          </div>
        </div>
      </section>

{/* Highlights (middle section) */}
      <Highlights />

      {/* Projects */}
      <section className="mt-12">
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
      </section>
    </main>
  );
}
