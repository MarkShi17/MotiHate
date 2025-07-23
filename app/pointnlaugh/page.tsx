"use client"
import Image from "next/image"
import { useEffect, useRef } from "react";

export default function pointnlaugh() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.play().catch(err => {
                console.warn("autoplay failed");
            });
        }
    }, []);

    const play = () => {
        audioRef.current?.play();
    };

    return (
        <main>
            <audio ref={audioRef} src="/laughing.mp3" loop />
            <button className="hover:cursor-pointer" onClick={play}>
                <Image src="/pointnlaugh.png" alt="pointing and laughing at your chopped ahh" fill></Image>
            </button>
        </main>
    )
}