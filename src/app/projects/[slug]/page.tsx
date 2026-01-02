import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl p-6 pt-12">
      {/* Back */}
      <Link
        href="/"
        className="inline-block mb-8 text-sm text-gray-600 hover:text-gray-900"
      >
        ← Back to home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="text-sm text-gray-500 mb-2">{project.category}</div>
        <h1 className="text-3xl font-semibold mb-4">{project.title}</h1>
        <p className="text-gray-700">{project.summary}</p>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="space-y-12">

        <section>
          <h2 className="text-lg font-semibold mb-2">
            Content
          </h2>
          <p className="whitespace-pre-line text-gray-700">
            {project.content || ""}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">
            Here are the questions I was interested in answering:
          </h2>
          <p className="whitespace-pre-line text-gray-700">
            {project.questions || ""}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">
            I took these steps to create my analysis:
          </h2>
          <p className="whitespace-pre-line text-gray-700">
            {project.steps || ""}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">
            My key takeaways:
          </h2>
          <p className="whitespace-pre-line text-gray-700">
            {project.takeaways || ""}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">
            Check out the project here:
          </h2>
          {project.links.dashboard && (
            <a
              href={project.links.dashboard}
              target="_blank"
              rel="noreferrer"
              className="underline text-blue-600"
            >
              View Dashboard →
            </a>
          )}
          {project.links.report && (
            <a
              href={project.links.report}
              target="_blank"
              rel="noreferrer"
              className="underline text-green-600 ml-4"
            >
              View Report →
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline text-gray-800 ml-4"
            >
              View GitHub →
            </a>
          )}
        </section>

      </div>
    </main>
  );
}
