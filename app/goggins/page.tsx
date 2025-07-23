"use client"
//import ReactPlayer from 'react-player'
import { useRef } from "react";

export default function goggins() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const play = () => {
        videoRef.current?.play().catch(err => {
        console.error("Autoplay blocked: ", err);
        });
    };

    return (
        <main className="relative w-screen h-screen overflow-hidden">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/goggins.mp4"
                loop
                playsInline
                controls={false}
            />
            <button
                className="absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded"
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