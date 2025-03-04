'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
    const pathname = usePathname()

  return <>
  {sidebarLinks.map((item) => {
    const isActive = (pathname.includes(item.route) && item.route.length > 1 || pathname === item.route)

    const linkComponent = (
        <Link href={item.route} key={item.label} className={cn(isActive ? "bg-primary rounded-xl w-full" : "bg-neutral-100 rounded-xl", "flex justify-start items-center gap-4 p-4 w-[420px]" )}>
            <Image src={item.imgURL} alt={item.label} width={26} height={26} />
            <p>{item.label}</p>
        </Link>
    )

    return linkComponent
  })}
  </>
}

export default NavLinks