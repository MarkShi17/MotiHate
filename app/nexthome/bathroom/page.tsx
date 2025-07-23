import Image from "next/image"
import Link from "next/link"

export default function bathroom() {
    return (
        <main>
            <Link href="/nexthome/bedroom" className="absolute z-10 text-black text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 bg-white hover:bg-black hover:text-white transition-colors hover: cursor-pointer">
                Back
            </Link>
            <div className="absolute z-10 top-1/20 left-1/2 transform -translate-x-1/2">
                <h1 className="text-black drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] text-5xl font-extrabold">It's time to make a change.<br></br>Take back your time, and life.</h1>
            </div>
            <Image src="/bathroom.jpg" alt="your future bathroom" fill></Image>
        </main>
    )
}