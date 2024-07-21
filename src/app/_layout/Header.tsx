import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <Image 
                src="/svgs/logo.svg" 
                alt="logo" 
                width={190}
                height={23}
            />
        </Link>
    )
}

const Nav = () => {
    return (
        <div className="flex items-center gap-6">
            <ul className='flex gap-9'>
                {
                    navLinks.map(link => (
                        <li>
                            <Link 
                                className='font-semibold font-lexend' 
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="flex gap-2">
                <Link 
                    className='main_blue_button !text-sm !px-4 ' 
                    href='/sign-in'
                >
                    Sign In
                </Link>

                <Link 
                    className='py-3 px-4 text-sm font-semibold bg-slate-200 rounded-xl text-main-black font-lexend'
                    href="/get-started"
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
}

function Header() {
    return (
        <header>
            <div className="h-[65px] justify-between px-10 max-w-[1280px] w-full flex items-center">
                <Logo/>
                <Nav/>
            </div>
        </header>
    )
}

export default Header