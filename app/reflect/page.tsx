"use client";
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function reflect() {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function enableCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                if (videoRef.current) {
                videoRef.current.srcObject = stream
                }
            } catch (err) {
                console.error("no camera:", err)
                setError("No camera? Watch you reflection in black coward.")
            }
        }
        enableCamera()
    }, [])

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-black">
            <Link href="/" className="absolute text-black z-10 text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 bg-white hover:bg-black hover:text-white transition-colors">
                Back
            </Link>
            <p className="text-white">{error}</p>
            {error ? (
                <></>
            ) : (
                <video ref={videoRef} autoPlay className="w-full h-full object-cover"/>
            )}
            <div className="absolute top-8 text-white left-1/2 transform -translate-x-1/2">
                <h1 className="text-white text-5xl font-bold drop-shadow-lg">Look at yourself. You chopped twin.</h1>
            </div>
        </main>
    );
    /* return (
        <main className="bg-black h-screen flex flex-col items-center">
            <h1 className="text-white text-6xl bold pt-6"> Look at yourself. You chopped twin. 💔</h1>
        </main>
    ) */
    
}