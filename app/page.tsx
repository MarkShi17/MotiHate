"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const pages = ["/goggins", "/reflect", "/pointnlaugh", "/abgs"]
  const router = useRouter()
  //basic more: message, abgs (clickable but x popup)
  //add back button to other pages
  function motivate () {
    const newPage = pages[Math.floor(Math.random()*pages.length)]
    console.log('www')
    router.push(newPage)
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="border-2 border-black rounded-xl hover:bg-red-600 transition-colors">
        <button className="p-20 text-5xl font-bold hover:cursor-pointer" onClick={motivate}>MotiHate Me!</button>
      </div>
    </main>
  );
}
