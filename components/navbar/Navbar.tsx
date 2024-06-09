import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import ActiveLink from '../ActiveLink/ActiveLink'


const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" },
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className=" flex items-center gap-2 " href={'/'}>
        <HomeIcon />
        <span className="text-xl"  > Home</span>
      </Link>


      <div className="flex flex-1"></div>
      {navItems.map(item => <ActiveLink key={item.text} {...item} />)}


    </nav>
  )
}
