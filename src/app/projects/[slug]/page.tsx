import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 👇 MAKE FUNCTION ASYNC
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 👇 UNWRAP PARAMS
  const { slug } = await params;

  console.log("URL slug:", slug);
  console.log("Available slugs:", projects.map((p) => p.slug));

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl p-6 pt-12">
      <Link
        href="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        ← Back to home
      </Link>

      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">{project.category}</div>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-700">{project.summary}</p>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 mb-8">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Links</h2>
        <div className="flex flex-wrap gap-3">
          {project.links.dashboard && (
            <a
              href={project.links.dashboard}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-blue-500 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              View Dashboard →
            </a>
          )}
          {project.links.report && (
            <a
              href={project.links.report}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-green-500 bg-green-50 px-6 py-3 text-sm font-medium text-green-700 hover:bg-green-100"
            >
              View Report →
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-700 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              View GitHub →
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

