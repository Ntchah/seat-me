"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function page() {

     return (
          <div className="relative w-full h-screen py-16 bg-black overflow-hidden">
               <Image
                    src="/img/footer-background.jpeg"
                    alt="Background"
                    fill
                    className="absolute inset-0 z-0 object-cover"
               />
               <div className="absolute inset-0 bg-black opacity-70 z-10" />

               <div className="relative z-20 flex justify-between items-center">
                    <Image
                         src="/img/Subtract.png"
                         alt="Left Decor"
                         width={80}
                         height={80}
                    />
                    <h1 className="text-white font-eglen text-4xl md:text-5xl lg:text-6xl">
                         Booking Successful!
                    </h1>
                    <Image
                         src="/img/Subtract-decor.png"
                         alt="Right Decor"
                         width={80}
                         height={80}
                    />
               </div>

               <div className="relative z-20 flex flex-col max-w-lg mx-auto mt-8 space-y-2 p-8 w-3/4 bg-transparent border border-white rounded-lg">
                    <p className="text-white text-center text-lg font-semibold pb-2">Reservation Summary</p>
                    <div className="flex justify-between items-center">
                         <p className="text-white text-sm font-medium py-2">Restaurant</p>
                         <p className="text-white text-sm font-light py-2">Dongy Sushi</p>
                    </div>
                    <div className="flex justify-between items-center">
                         <p className="text-white text-sm font-medium py-2">Date</p>
                         <p className="text-white text-sm font-light py-2">18/11/2567</p>
                    </div>
                    <div className="flex justify-between items-center">
                         <p className="text-white text-sm font-medium py-2">Number of guests</p>
                         <p className="text-white text-sm font-light py-2">2</p>
                    </div>
               </div>

               <div className="relative z-20 mt-16 flex justify-center">
                    <Link
                         href="/mybooking"
                         className="w-30 h-10 z-10  rounded-full  bg-yellow-400 hover:bg-yellow-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center shadow-lg transition" 
                    >
                         Go to my booking---{'>'}
                    </Link>
               </div>
          </div>
     );
}
