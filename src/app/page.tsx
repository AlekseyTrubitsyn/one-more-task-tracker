import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start text-zinc-200">
        <h1 className="text-5xl font-extrabold mb-1 text-zinc-100">
          one more task tracker
        </h1>
        <h2 className="text-l mt-0 mb-12 text-zinc-500">
          just a sandbox created to check out some technologies: Next | Drizzle | Tailwind
        </h2>
        <h3 className="text-l font-bold mb-2">Roadmap (in progress)</h3>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-1">
          <li>User auth by Clerk, init db by Neon & Drizzle.</li>
          <li>
            A single task list for the user with a simple task editor on the
            side.
          </li>
          <li>Kanban board of tasks.</li>
          <li>
            Projects combine boards, and users can create and be
            assigned to them.
          </li>
          <li>Comments for tickets.</li>
          <li>...</li>
          <li>PROFIT!</li>
        </ol>
      </main>
    </div>
  );
}
