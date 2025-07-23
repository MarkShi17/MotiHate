import Image from "next/image"
import Link from "next/link"

export default function profiles() {
    const profiles = [
        {
            name: "Eric Huang",
            title: "Economics @ Princeton",
            desc: "Raised an $800k pre-seed for his consulting startup. Runs a 6 minute mile. Wakes up at 4am to read Ernest Hemmingway.",
            image: "/huang.jpeg"
        },
        {
            name: "Daniel Gao",
            title: "AI/ML PhD @ Caltech",
            desc: "Accepted to PhD programs at 20. Forbes 30 under 30. Benches 315lbs. Drives a GT3 RS and owns a private island off the coast of Florida.",
            image: "/daniel.png"
        },
        {
            name: "You",
            title: "Unemployed @ Mom's Basement",
            desc: "Undefined.",
            image: "/default.jpg"
        },
    ]
    return (
        <main className="min-h-screen w-screen bg-black text-white px-4 py-10 flex flex-col items-center">
            <Link
                href="/"
                className="absolute z-10 text-xl border-2 border-white rounded-lg px-4 py-2 left-4 top-4 bg-black hover:bg-white hover:text-black transition-colors"
            >
                Back
            </Link>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center max-w-[90%]">
                Same Age. Different Work Ethic.
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                {profiles.map((profile, i) => (
                    <div
                        key={i}
                        className={`flex flex-col items-center text-center p-6 rounded-xl ${
                        i === 2
                            ? "bg-white text-black shadow-2xl border-4 border-red-600" : "bg-gray-800"
                        }`}
                    >
                        <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-white">
                            <Image
                                src={profile.image}
                                alt={profile.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{profile.name}</h2>
                        <h3 className="text-md sm:text-lg md:text-xl mb-2">{profile.title}</h3>
                        <p className="text-sm leading-snug">{profile.desc}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}