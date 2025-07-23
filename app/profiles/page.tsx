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
        <main className="w-screen h-screen flex items-center justify-center bg-black text-white px-8">
            <Link href="/" className="absolute z-10 text-2xl border-2 border-white rounded-lg px-4 py-2 left-12 top-12 text-white   bg-black hover:bg-white hover:text-black transition-colors">
                Back
            </Link>
            <h1 className="absolute text-4xl font-bold z-10 left-1/2 top-1/10 -translate-x-1/2 transform">Same Age. Different Work Ethic.</h1>
            <div className="grid grid-cols-3 gap-8 w-full max-w-7xl h-full items-center">
                {profiles.map((profile, i) => (
                <div
                    key={i}
                    className={`flex flex-col items-center text-center p-6 rounded-xl ${
                    i === 2 ? "bg-white text-black shadow-2xl border-4 border-red-600" : "bg-gray-800"
                    }`}
                >
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-white">
                    <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
                    <h3 className="text-2xl">{profile.title}</h3>
                    <p className="text-sm leading-snug">{profile.desc}</p>
                </div>
                ))}
            </div>
        </main>
    )
}