import Image from "next/image";
import Link from "next/link";
import Highlights from "@/components/Highlights";
import { projects } from "@/data/projects";

function SectionLabel({ title }: { title: string }) {
  return (
    <div className="inline-block rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
      {title}
    </div>
  );
}

function ProjectCard({
  title,
  summary,
  cover,
  slug,
  category,
}: {
  title: string;
  summary: string;
  cover: string;
  slug: string;
  category: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group overflow-hidden rounded-2xl border bg-white hover:shadow-md transition"
    >
      <div className="relative h-28 w-full bg-gray-100">
        <Image src={cover} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500">{category}</div>
        <div className="mt-1 font-medium group-hover:underline">
          {title}
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {summary}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const analytics = projects.filter(
    (p) => p.section === "Analytics & Decision Support"
  );
  const financial = projects.filter(
    (p) => p.section === "Financial Performance & Reporting"
  );
  const strategy = projects.filter(
    (p) => p.section === "Business Strategy & Innovation"
  );

  return (
    <main className="mx-auto max-w-6xl px-6 pt-10">
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* LEFT FIXED */}
        <aside className="lg:sticky lg:top-10 h-fit">
          <div className="rounded-2xl border bg-white p-5">
            <div className="flex justify-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-2xl border bg-gray-100">
                <Image
                  src="/quency.png"
                  alt="Quency Ye"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-4 text-center text-lg font-semibold">
              Quency Ye
            </div>

            <div className="mt-4 grid gap-2">
              <a
                href="https://www.linkedin.com/in/xiaoqye"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 text-center"
              >
                Connect with me
              </a>
              <a
                href="mailto:xye@bu.edu"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 text-center"
              >
                Email me
              </a>
              <a
                href="https://github.com/xiaoqye"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 text-center"
              >
                GitHub
              </a>
              <a
                href="https://public.tableau.com/app/profile/quency.ye1021/vizzes"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50 text-center"
              >
                Tableau
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="pb-16">
          {/* INTRO CARD */}
          <div className="rounded-2xl border bg-white p-6">
            <p className="font-semibold text-gray-900">
              Welcome — I’m glad you’re here!
            </p>
            <p className="mt-4 text-gray-700">
              I enjoy using data, platforms, and practical implementation to
              solve real business problems.
            </p>
            <p className="mt-2 text-gray-700">
              I’m excited to keep growing while creating real impact in my work.
            </p>
            <p className="mt-4 text-gray-600">
              Business Analytics • Product Management • Customer Success
            </p>
          </div>

          {/* ANALYTICS */}
          <div className="mt-10">
            <SectionLabel title="Analytics & Decision Support" />
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {analytics.map((p) => (
                <ProjectCard key={p.slug} {...p} />
              ))}
            </div>
          </div>

          {/* FINANCIAL */}
          <div className="mt-12">
            <SectionLabel title="Financial Performance & Reporting" />
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {financial.map((p) => (
                <ProjectCard key={p.slug} {...p} />
              ))}
            </div>
          </div>

          {/* STRATEGY */}
          <div className="mt-12">
            <SectionLabel title="Business Strategy & Innovation" />
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {strategy.map((p) => (
                <ProjectCard key={p.slug} {...p} />
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="mt-14">
            <Highlights />
          </div>
        </section>
      </div>
    </main>
  );
}
