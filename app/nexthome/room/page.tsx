import Image from "next/image"
import Link from "next/link"

export default function room() {
    return (
        <main>
            <Link href="/nexthome" className="absolute z-10 text-black text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 bg-white hover:bg-black hover:text-white transition-colors hover: cursor-pointer">
                Back
            </Link>
            <div className="absolute z-10 top-1/20 left-1/2 transform -translate-x-1/2">
                <h1 className="text-white drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] text-5xl font-extrabold">Looking a bit... disastrous?</h1>
            </div>
            <Image src="/room.jpg" alt="your future room" fill></Image>
            <Link 
                className="absolute z-10 text-black text-2xl border-2 border-black rounded-lg px-4 py-2 top-1/2 left-7/8 transform -translate-x-1/2 bg-white hover:bg-black hover:text-white transition-colors hover:cursor-pointer"
                href="/nexthome/bedroom"
            >
                View your future bedroom <span className="text-3xl font-extrabold">→</span>
            </Link>
        </main>
    )
}