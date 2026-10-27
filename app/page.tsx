import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-semibold text-primary-foreground">
          Z
        </div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">ZippCart</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Shopping made simple.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-7 text-muted-foreground">
          Welcome to ZippCart. Find what you need, order with confidence, and keep your shopping moving.
        </p>
        <Link
          href="/privacy-policy"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Read our Privacy Policy
        </Link>
      </section>
    </main>
  )
}
