import Link from "next/link"

export default function timeline() {
    return (
        <main>
            <Link href="/" className="absolute z-10 text-2xl border-2 border-white rounded-lg px-4 py-2 left-12 top-12 text-white   bg-black hover:bg-white hover:text-black transition-colors">
                Back
            </Link>
        </main>
        
    )
}