import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const AuthLayout = ({children}: Readonly<{children: ReactNode}>) => {
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
        <div className='min-w-[520px] shadow-md p-7 rounded-xl'>
            <Link href={"/"} className='flex items-center gap-1.5'>
                <Image src={"/assets/images/site-logo.svg"} alt='site logo' width={28} height={28}/>
                <p className='text-2xl font-semibold'>Site
                    <span className='text-primary'>Logo</span>
                </p>
            </Link>

            {children}
        </div>
    </main>
  )
}

export default AuthLayout