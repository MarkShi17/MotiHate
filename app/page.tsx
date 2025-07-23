"use client"

import { useRouter } from "next/navigation";
import Link from "next/link"

export default function Home() {

  const pages = ["/reflect", "/goggins", "/abgs", "/profiles", "/timeline", "/pointnlaugh","/nexthome"]
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
      <ul className="absolute left-1/40">
        <li className='text-l font-bold'>All Below:</li>
        {pages.map((link, i) => (
          <li key={i}>
            <Link href={link} className="hover:text-red-600 transition-colors">
              {link.replace('/','')}
            </Link>
          </li>
          ))}
      </ul>
      <div className="border-2 border-black rounded-xl hover:bg-red-600 transition-colors">
        <button className="p-20 text-5xl font-bold hover:cursor-pointer" onClick={motivate}>MotiHate Me!</button>
      </div>
    </main>
  );
}
