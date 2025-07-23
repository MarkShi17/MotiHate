import Image from "next/image"
import Link from "next/link"

export default function bedroom() {
    return (
        <main>
            <Link href="/nexthome/room" className="absolute z-10 text-black text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 bg-white hover:bg-black hover:text-white transition-colors hover: cursor-pointer">
                Back
            </Link>
            <div className="absolute z-10 top-1/20 left-1/2 transform -translate-x-1/2">
                <h1 className=" max-w-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-5xl font-extrabold">Keep it up. These are the fruits of your laziness.</h1>
            </div>
            <Image src="/bedroom.jpg" alt="your future bedroom" fill></Image>
            <Link 
                className="absolute z-10 text-black text-2xl border-2 border-black rounded-lg px-4 py-2 top-1/2 left-7/8 transform -translate-x-1/2 bg-white hover:bg-black hover:text-white transition-colors hover:cursor-pointer"
                href="/nexthome/bathroom"
            >
                View your future bathroom <span className="text-3xl font-extrabold">→</span>
            </Link>
        </main>
    )
}