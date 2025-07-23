"use client"

import Link from "next/link"
import { useState } from "react"

export default function timeline() {
    const [day, setDay] = useState(1)

    const getMessage = (day: number) => {
        if (day <= 50) return "Nothing productive done."
        if (day <= 100) return "We gotta start sometime? Right?"
        if (day <= 150) return "One day or Day one?"
        if (day <= 200) return "Still nothing productive..."
        if (day <= 250) return "Break times long over."
        if (day <= 300) return `1 is still better than 0.`
        if (day <= 350) return "Just a little? Nope."
        if (day <= 364) return "Last chance..."
        return "365 days. And this is it?"
    }

    return (
        <main className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center">
            <Link href="/" className="absolute z-10 text-2xl border-2 border-white rounded-lg px-4 py-2 left-12 top-12 text-white bg-black hover:bg-white hover:text-black transition-colors">
                Back
            </Link>
            <div className="text-4xl font-bold text-center px-8 mb-12">
                {getMessage(day)}
                <p className="text-xl font-medium pt-2">{day == 365 ? `0 days left. All gone.`: `Still ${365-day} days left...`}</p>
            </div>

            <div className="absolute bottom-10 w-full px-12">
                <input
                    type="range"
                    min="1"
                    max="365"
                    value={day}
                    onChange={(e) => setDay(Number(e.target.value))}
                    className="w-full accent-red-600"
                />
                <div className="text-center mt-2 text-sm text-gray-400">
                Day {day} of 365
                </div>
            </div>
        </main>
        
    )
}