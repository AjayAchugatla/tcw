import Link from "next/link";
import { GiCricketBat, GiCricket } from "react-icons/gi";
import { MdSportsCricket, MdTimer, MdEmojiEvents, MdPeople, MdBarChart } from "react-icons/md";
import { IoFlash } from "react-icons/io5";

export const metadata = {
    title: "Cricket • TCW",
    description: "Cricket games and quizzes.",
};

export default function CricketPage() {
    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Cricket-themed background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Cricket pitch pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(90deg, transparent, transparent 80px, currentColor 80px, currentColor 82px),
                            repeating-linear-gradient(0deg, transparent, transparent 80px, currentColor 80px, currentColor 82px)
                        `,
                        backgroundSize: '100% 100%'
                    }}
                />
                {/* Stadium lights effect */}
                <div className="absolute -top-40 right-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] blur-3xl" />
                <div className="absolute -bottom-40 left-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-12">
                {/* Header Section */}
                <div className="relative">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
                    >
                        ← Back to Home
                    </Link>

                    <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
                                    <GiCricketBat className="text-2xl" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
                                        Cricket Arena
                                    </h1>
                                    <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                                        Pitch Perfect Knowledge
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 max-w-2xl text-lg text-black/70 dark:text-white/70">
                                From legendary sixes to career stats — prove you know cricket better than the commentators.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-50/50 px-4 py-3 backdrop-blur dark:border-green-500/20 dark:bg-green-500/10">
                            <IoFlash className="text-xl text-green-600 dark:text-green-400" />
                            <div className="text-sm">
                                <p className="font-semibold text-black dark:text-white">6 Game Modes</p>
                                <p className="text-black/60 dark:text-white/60">Live soon</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Games Grid */}
                <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Over-by-Over Recall",
                            desc: "Guess what happened next in famous overs.",
                            badge: "Moments",
                            icon: <MdSportsCricket className="text-2xl" />,
                            gradient: "from-green-500 to-emerald-600"
                        },
                        {
                            title: "Who Am I?",
                            desc: "Clues → player name. Fewer clues, more points.",
                            badge: "Quiz",
                            icon: <MdPeople className="text-2xl" />,
                            gradient: "from-blue-500 to-cyan-600"
                        },
                        {
                            title: "Record Rush",
                            desc: "Fast rounds: highest, fastest, most.",
                            badge: "Speed",
                            icon: <MdTimer className="text-2xl" />,
                            gradient: "from-emerald-500 to-green-600"
                        },
                        {
                            title: "Lineup Builder",
                            desc: "Build the XI from a match context.",
                            badge: "Strategy",
                            icon: <GiCricket className="text-2xl" />,
                            gradient: "from-teal-500 to-cyan-600"
                        },
                        {
                            title: "Scorecard Snap",
                            desc: "Identify matches from partial scorecards.",
                            badge: "Stats",
                            icon: <MdBarChart className="text-2xl" />,
                            gradient: "from-cyan-500 to-blue-600"
                        },
                        {
                            title: "Trophy Hunt",
                            desc: "Tournament history + championship quizzes.",
                            badge: "New",
                            icon: <MdEmojiEvents className="text-2xl" />,
                            gradient: "from-green-500 to-teal-600"
                        },
                    ].map((game) => (
                        <div
                            key={game.title}
                            className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                        >
                            {/* Gradient accent on hover */}
                            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${game.gradient} opacity-0 blur-2xl transition group-hover:opacity-20`} />

                            <div className="relative">
                                <div className="flex items-start justify-between">
                                    <div className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${game.gradient} text-white shadow-md`}>
                                        {game.icon}
                                    </div>
                                    <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                                        {game.badge}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                                    {game.title}
                                </h3>
                                <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                                    {game.desc}
                                </p>

                                <button
                                    type="button"
                                    className={`mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r ${game.gradient} px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                                    disabled
                                >
                                    {game.title === "Trophy Hunt" ? "Coming Soon" : "Play Soon"}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Footer note */}
                <div className="mt-12 rounded-2xl border border-green-500/20 bg-green-50/50 p-6 backdrop-blur dark:border-green-500/20 dark:bg-green-500/10">
                    <p className="text-sm text-black/70 dark:text-white/70">
                        <span className="font-semibold text-black dark:text-white">🏏 Match Ready:</span> All game modes are in development with live stats integration, player profiles, and real-time leaderboards. First delivery coming soon!
                    </p>
                </div>
            </div>
        </main>
    );
}
