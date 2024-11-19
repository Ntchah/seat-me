"use client"

import DateReserve from "./DateReserve";
import React, { useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { TextField, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";

export default function BookingPanel({ restaurantName }: { restaurantName: string }) {
     const [reserveDate, setreserveDate] = useState<Dayjs | null>(null)
     const [numGuest, setNumGuest] = useState<number>(0)

     const incrementGuest = () => setNumGuest(numGuest + 1);
     const decrementGuest = () => setNumGuest(Math.max(0, numGuest - 1));

     const handleSubmit = () => {

     }

     return (
          <div className="bg-white shadow-lg rounded-lg w-full max-w-md text-black space-y-4">

               <div className="flex justify-between items-center">
                    <div className="z-10 w-10 lg:w-16">
                         <Image
                              src="/img/Subtract.png"
                              alt="Left Decor"
                              layout="intrinsic"
                              objectFit="contain"
                              className="max-w-full"
                              width={80}
                              height={80}
                         />
                    </div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-fullgap-2">
                         <p className="text-2xl lg:text-3xl font-light text-center">{restaurantName}</p>
                         <p className="font-eglen text-xl md:text-2xl text-nowrap">
                              Booking
                         </p>
                    </div>
                    <div className="z-10 w-10 lg:w-16">
                         <Image
                              src="/img/Subtract-decor.png"
                              alt="Right Decor"
                              layout="intrinsic"
                              objectFit="contain"
                              className="max-w-full"
                              width={80}
                              height={80}
                         />
                    </div>
               </div>

               <div className="py-2 px-8">
                    <label className="block text-sm font-medium mb-2">Reservation Date</label>
                    <div className="relative">
                         <DateReserve onDateChange={(value: Dayjs) => setreserveDate(value)} />
                    </div>
               </div>

               <div className="py-2 px-8">
                    <label className="block text-sm font-medium mb-2">Number of Guests</label>
                    <div className="flex items-center gap-4">
                         <button
                              onClick={decrementGuest}
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700"
                              aria-label="decrease"
                         >
                              <RemoveIcon fontSize="small" />
                         </button>
                         <input
                              value={numGuest}
                              onChange={(e) => {
                                   const value = parseInt(e.target.value, 10);
                                   if (!isNaN(value) && value >= 0) setNumGuest(value);
                              }}
                              type="number"
                              className="w-16 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                              min="0"
                         />
                         <button
                              onClick={incrementGuest}
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300"
                              aria-label="increase"
                         >
                              <AddIcon fontSize="small" />
                         </button>
                    </div>
               </div>

               <div className="py-8 px-8 flex justify-center">
                    <button
                         onClick={handleSubmit}
                         className="w-3/4 py-3 bg-yellow-400  hover:bg-yellow-500 text-white font-semibold rounded-3xl shadow-lg transition"
                    >
                         Book Now
                    </button>
               </div>
          </div>



     )
}