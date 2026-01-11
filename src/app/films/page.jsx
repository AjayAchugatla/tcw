import Link from "next/link";
import { MdMovie, MdTheaterComedy, MdMusicNote, MdPerson, MdCalendarToday, MdTrendingUp } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";

export const metadata = {
    title: "Films • TCW",
    description: "Tollywood games and quizzes.",
};

export default function FilmsPage() {
    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Film-themed background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Film strip pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            0deg,
                            transparent,
                            transparent 35px,
                            currentColor 35px,
                            currentColor 40px
                        )`,
                        backgroundSize: '100% 80px'
                    }}
                />
                {/* Spotlight gradients */}
                <div className="absolute -top-40 left-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_70%)] blur-3xl" />
                <div className="absolute -bottom-40 right-20 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-3xl" />
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
                                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg">
                                    <MdMovie className="text-2xl" />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
                                        Tollywood Arena
                                    </h1>
                                    <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                                        Lights. Camera. Quiz Time.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 max-w-2xl text-lg text-black/70 dark:text-white/70">
                                From blockbuster dialogues to chart-topping soundtracks — test every frame of your film knowledge.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-pink-500/20 bg-pink-50/50 px-4 py-3 backdrop-blur dark:border-pink-500/20 dark:bg-pink-500/10">
                            <IoSparkles className="text-xl text-pink-600 dark:text-pink-400" />
                            <div className="text-sm">
                                <p className="font-semibold text-black dark:text-white">6 Game Modes</p>
                                <p className="text-black/60 dark:text-white/60">Coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Games Grid */}
                <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Dialogue Decoder",
                            desc: "Guess the movie from iconic lines.",
                            badge: "Quiz",
                            icon: <MdTheaterComedy className="text-2xl" />,
                            gradient: "from-rose-500 to-pink-600"
                        },
                        {
                            title: "Poster Puzzle",
                            desc: "Blurred / cropped posters — name it fast.",
                            badge: "Visual",
                            icon: <MdMovie className="text-2xl" />,
                            gradient: "from-purple-500 to-indigo-600"
                        },
                        {
                            title: "Cast Match",
                            desc: "Pair actors with films and roles.",
                            badge: "Memory",
                            icon: <MdPerson className="text-2xl" />,
                            gradient: "from-pink-500 to-rose-600"
                        },
                        {
                            title: "Song Snippets",
                            desc: "Tiny audio hints — identify the track.",
                            badge: "Audio",
                            icon: <MdMusicNote className="text-2xl" />,
                            gradient: "from-violet-500 to-purple-600"
                        },
                        {
                            title: "Year Sprint",
                            desc: "Release year guesses under pressure.",
                            badge: "Speed",
                            icon: <MdCalendarToday className="text-2xl" />,
                            gradient: "from-fuchsia-500 to-pink-600"
                        },
                        {
                            title: "Trending Now",
                            desc: "Latest releases + box office battles.",
                            badge: "New",
                            icon: <MdTrendingUp className="text-2xl" />,
                            gradient: "from-pink-500 to-purple-600"
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
                                    {game.title === "Trending Now" ? "Coming Soon" : "Play Soon"}
                                </button>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Footer note */}
                <div className="mt-12 rounded-2xl border border-pink-500/20 bg-pink-50/50 p-6 backdrop-blur dark:border-pink-500/20 dark:bg-pink-500/10">
                    <p className="text-sm text-black/70 dark:text-white/70">
                        <span className="font-semibold text-black dark:text-white">🎬 Director's Cut:</span> Each game mode is being fine-tuned for the ultimate Tollywood trivia experience. First launch coming soon with leaderboards, streaks, and multiplayer battles.
                    </p>
                </div>
            </div>
        </main>
    );
}
