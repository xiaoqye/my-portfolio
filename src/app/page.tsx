// src/app/page.tsx

import Image from "next/image";
import Link from "next/link";
import Highlights from "@/components/Highlights";
import { projects } from "@/data/projects";

// ---------- helpers ----------
function Section({ title }: { title: string }) {
  return (
    <div className="mt-14">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 h-px w-full bg-gray-200" />
    </div>
  );
}

function ProjectItem({
  slug,
  title,
  category,
  cover,
}: {
  slug: string;
  title: string;
  category: string;
  cover: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="flex items-center justify-between gap-4 rounded-xl px-3 py-4 transition hover:bg-gray-50"
    >
      {/* text */}
      <div className="min-w-0">
        <div className="truncate font-medium">{title}</div>
        <div className="mt-1 text-sm text-gray-500">{category}</div>
      </div>

      {/* image */}
      <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <Image src={cover} alt={title} fill className="object-cover" />
      </div>
    </Link>
  );
}

// ---------- page ----------
export default function Home() {
  const analytics = projects.filter(
    (p) => p.section === "Analytics & Decision Support"
  );
  const financial = projects.filter(
    (p) => p.section === "Financial Performance & Reporting"
  );
  const product = projects.filter(
    (p) => p.section === "Product Development"
  );
  const strategy = projects.filter(
    (p) => p.section === "Business Strategy & Innovation"
  );

  return (
    <main className="h-screen overflow-hidden">
      <div className="mx-auto h-full max-w-6xl px-6">
        <div className="grid h-full grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
          
          {/* LEFT — fixed */}
          <aside className="hidden lg:flex items-center">
            <div className="w-full text-center">
              {/* selfie */}
              <div className="mx-auto relative h-36 w-36 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src="/quency.jpg"
                  alt="Quency Ye"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* name */}
              <div className="mt-4 text-lg font-semibold">Quency Ye</div>

              {/* icons */}
              <div className="mt-4 flex justify-center gap-4 text-gray-600">
                <a
                  href="https://www.linkedin.com/in/xiaoqye"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="hover:text-gray-900"
                >
                  <i className="ri-linkedin-line text-xl" />
                </a>
                <a
                  href="mailto:xye@bu.edu"
                  title="Email"
                  className="hover:text-gray-900"
                >
                  <i className="ri-mail-line text-xl" />
                </a>
                <a
                  href="https://github.com/xiaoqye"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="hover:text-gray-900"
                >
                  <i className="ri-github-line text-xl" />
                </a>
                <a
                  href="https://public.tableau.com/app/profile/quency.ye1021/vizzes"
                  target="_blank"
                  rel="noreferrer"
                  title="Tableau"
                  className="hover:text-gray-900"
                >
                  <i className="ri-bar-chart-line text-xl" />
                </a>
                <a href="https://1drv.ms/x/c/c4f892a68e984fb3/IQBVIp8SP3MnQZD8-Xxfg1yZAV02iuNgFIoqJMOG4CET700?e=tbb10p"
                 title="Excel" className="hover:text-gray-900">
                  <i className="ri-file-excel-2-line text-xl" />
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT — scrollable */}
          <section className="h-full overflow-y-auto py-10 pb-24 pl-6">
            
            {/* PROJECTS */}
            <h1 className="mt-12 text-2xl font-semibold tracking-tight">
              PROJECTS
            </h1>

            {/* Analytics */}
            <Section title="Analytics & Decision Support" />
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {analytics.map((p) => (
                <ProjectItem
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  category={p.category}
                  cover={p.cover}
                />
              ))}
            </div>

            {/* Financial */}
            <Section title="Financial Performance & Reporting" />
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {financial.map((p) => (
                <ProjectItem
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  category={p.category}
                  cover={p.cover}
                />
              ))}
            </div>

            {/* Product */}
            <Section title="Product Development" />
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.map((p) => (
                <ProjectItem
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  category={p.category}
                  cover={p.cover}
                />
              ))}
            </div>

            {/* Strategy */}
            <Section title="Business Strategy & Innovation" />
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {strategy.map((p) => (
                <ProjectItem
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  category={p.category}
                  cover={p.cover}
                />
              ))}
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-20">
              <Highlights />
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}
