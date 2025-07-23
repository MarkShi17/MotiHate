"use client"
//import ReactPlayer from 'react-player'
import { useRef } from "react"
import Link from "next/link"

export default function goggins() {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const play = () => {
        videoRef.current?.play().catch(err => {
        console.error("Autoplay blocked: ", err)
        })
    }

    return (
        <main className="relative w-screen h-screen overflow-hidden">
            <Link href="/" className="absolute z-10 text-black text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 bg-white hover:bg-black hover:text-white transition-colors">
                Back
            </Link>
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/goggins.mp4"
                loop
                playsInline
                controls={false}
            />
            <button
                className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded font-bold text-xl hover:cursor-pointer hover:bg-black hover:text-white transition-colors"
                onClick={play}
            >
                Play
            </button>
            <div>

            </div>
            <h1 className="absolute text-white top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold drop-shadow-lg">Lock In</h1>
        </main>
    );
}