import styles from '../styles/navbar.module.css';
import Link from "next/link"
import { useState } from 'react';
export default function Navbar() {
  const [ifMenu, setIfMenu] = useState(false)

  return (
    <div className="mx-auto bg-purple-100 p-5">
        <nav className="grid grid-flow-col grid-cols-auto">
            <div className="cursor-pointer">
                <Link href="/"><img src='/Images/logoSmall.jpg' /></Link>
            </div>
            {ifMenu ? 
                <ul className="block font-bold md:grid grid-flow-col grid-cols-auto">
                    <Link href="/">
                        <p className="cursor-pointer hover:underline">Login</p>
                    </Link>
                    <Link href="/RegisterPage">
                    <p className="cursor-pointer hover:underline">Register</p>
                    </Link>
                    <Link href="/">
                    <p className="cursor-pointer hover:underline">Tutors</p>
                    </Link>
                    <Link href="/">
                    <p className="cursor-pointer hover:underline">Contact</p>
                    </Link>
                </ul>:
                <ul className="hidden md:grid grid-flow-col grid-cols-auto font-bold">
                    <Link href="/">
                        <p className="cursor-pointer hover:underline">Login</p>
                    </Link>
                    <Link href="/RegisterPage">
                    <p className="cursor-pointer hover:underline">Register</p>
                    </Link>
                    <Link href="/">
                    <p className="cursor-pointer hover:underline">Tutors</p>
                    </Link>
                    <Link href="/">
                    <p className="cursor-pointer hover:underline">Contact</p>
                    </Link>
                </ul>}
            <button onClick={()=>{setIfMenu(!ifMenu)}} className="w-2 h-2 focus:outline-none absolute right-8 md:hidden">
                {!ifMenu ? <svg className="text-gray-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>:
                <svg className="text-gray-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>}
            </button>
        </nav>
    </div>
  )
}
