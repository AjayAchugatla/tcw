import Link from "next/link";
import { MdMovie } from "react-icons/md";
import { GiCricketBat } from "react-icons/gi";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate opacity-60 dark:opacity-30" />
        <div className="absolute -top-24 left-1/2 h-130 w-225 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 left-1/2 h-130 w-225 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.16),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 mask-radial-fade bg-linear-to-b from-white/70 via-white/40 to-white dark:from-black/40 dark:via-black/30 dark:to-black" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-8 pb-14 sm:pt-10 sm:pb-20">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Next-gen knowledge hub for modern minds
            </p>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-white">
              Entertainment meets expertise.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-black/70 dark:text-white/70">
              Latest trends. Real-time stats. Test your mastery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/films"
                className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Explore Films</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Scripts • Ratings • Box Office • Reviews</p>
                </div>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70 transition group-hover:bg-black/10 dark:bg-white/10 dark:text-white/80 dark:group-hover:bg-white/15">
                  →
                </span>
              </Link>

              <Link
                href="/cricket"
                className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">Enter Cricket</p>
                  <p className="text-xs text-black/60 dark:text-white/60">Stats • Rankings • Tournaments • Performance</p>
                </div>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70 transition group-hover:bg-black/10 dark:bg-white/10 dark:text-white/80 dark:group-hover:bg-white/15">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right bento */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-black/5 dark:bg-white/10">
                    <MdMovie className="text-xl text-black/70 dark:text-white/80" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">Smart film challenges</p>
                    <p className="text-xs text-black/60 dark:text-white/60">Storylines, aesthetics, cultural impact, trends</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-black/5 dark:bg-white/10">
                    <GiCricketBat className="text-xl text-black/70 dark:text-white/80" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">Live cricket tests</p>
                    <p className="text-xs text-black/60 dark:text-white/60">Analytics, predictions, career arcs, history</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:col-span-2 lg:col-span-1">
                <p className="text-xs font-medium text-black/60 dark:text-white/60">Featured modes</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Speed rounds",
                    "Trend alert",
                    "Live rankings",
                    "Expert mode",
                    "Global scores",
                    "Multiplayer",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >
    </main >
  );
}
