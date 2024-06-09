'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css'



type ActiveLinkProps = {
  text: string,
  path: string
}


const ActiveLink = ({ text, path }: ActiveLinkProps) => {
  const pathName = usePathname()
  const isPathInUrl = pathName === path
  return (
    <Link key={text} className={`${style.link} ${isPathInUrl ? style['active-link'] : ''}`} href={path}> {text}</Link>
  )
}

export default ActiveLink