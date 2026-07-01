import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] px-6 text-zinc-100">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
          The page you requested does not exist or may have moved. Head back to the main dashboard and continue exploring the retrieval app.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
