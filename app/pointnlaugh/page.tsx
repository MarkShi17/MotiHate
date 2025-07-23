"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function pointnlaugh() {
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.play().catch(err => {
                console.warn("autoplay failed");
            })
        }
    }, [])

    const play = () => {
        audioRef.current?.play();
    }

    return (
        <main>
            <audio ref={audioRef} src="/laughing.mp3" loop />
            <Link href="/" className="absolute z-10 text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 hover:bg-black hover:text-white transition-colors">
                Back
            </Link>
            <button className="hover:cursor-pointer" onClick={play}>
                <Image src="/pointnlaugh.png" alt="pointing and laughing at your chopped ahh" fill></Image>
            </button>
        </main>
    )
}