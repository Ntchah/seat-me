"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import DropDownList from './DropDownList';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function TopMenu() {
     const { data: session, status } = useSession();

     if (status === "loading") {
          return null;
     }

     const [isOpen, setIsOpen] = useState(false);

     const toggleDropdown = () => {
          setIsOpen(!isOpen);
          console.log("toggle");
     };
     return (
          <div className='fixed z-40 w-full h-16 lg:h-24 py-4 lg:py-7 px-5 lg:px-12 gap-3 flex item-center justify-between'>
               <Link href="/" passHref>
                    <Image
                         src='/img/logo.png'
                         alt="vsclogo"
                         width={150}
                         height={50}
                    />
               </Link>
               <div className="flex items-center gap-4">
                    {
                         session ?
                              <div className="flex items-center gap-4 font-light text-sm">
                                   <p>Welcome back,{session.user.name}!</p>
                                   <button
                                        onClick={() => {
                                             if (confirm("Are you sure you want to sign out?")) {
                                                  signOut({ callbackUrl: "/" });
                                             }
                                        }}
                                        className="flex flex-row items-center gap-3 px-6 py-2 border border-white rounded-full text-white text-sm font-light hover:bg-white hover:text-black transition-colors duration-300"
                                   >
                                        <p>Sign Out</p>
                                   </button>

                              </div>

                              :
                              <Link
                                   href="/login"
                                   className="flex flex-row items-center gap-3 px-6 py-2 border border-white rounded-full text-white text-sm font-light hover:bg-white hover:text-black transition-colors duration-300"
                              >
                                   <p>Sign In</p>
                              </Link>
                    }
                    <div className="relative flex lg:hidden items-center">
                         <MenuIcon fontSize='small' onClick={toggleDropdown} className='w-6 h-6 rounded-md' />
                         {isOpen && <DropDownList />}
                    </div>
               </div>
          </div>

     )
}