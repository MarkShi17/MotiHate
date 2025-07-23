"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef } from "react"

export default function abgs () {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [showMessage, setShowMessage] = useState(false)

    const nope = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((err) => {
                console.warn("sound failed")
            })
        }
        setShowMessage(true)
    }
    const close = () => {
        setShowMessage(false)
    }

    return (
        <main>
            <audio ref={audioRef} src="/error.mp3"/>
            <Link href="/" className="absolute z-10 text-2xl border-2 border-black rounded-lg px-4 py-2 left-12 top-12 bg-white hover:bg-black hover:text-white transition-colors">
                Back
            </Link>
            <div className="absolute z-10 top-6 text-white left-1/2 transform -translate-x-1/2">
                <h1 className="text-black text-5xl font-bold drop-shadow-lg">Click for ABGS!!!</h1>
            </div>
            <button className="hover:cursor-pointer" onClick={nope}>
                <Image src="/abgs.jpg" alt="abgs you CANNOT GET" fill></Image>
            </button>
            <p
                className={`transition-opacity duration-300 ${ showMessage ? "opacity-100" : "opacity-0" } 
                text-white text-5xl font-bold bg-red-600 px-4 py-2 border-2 border-black rounded-xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer`}
                onClick={ showMessage ? close : nope}
            >   
                Not Enough Aura
                <button onClick={close} className="ml-4 text-white bg-red-600 px-3 py-1 border-2 border-white rounded-xl hover:text-black hover:border-black transition-colors hover:cursor-pointer">
                    X
                </button>
            </p>
        </main>
    )
    
}