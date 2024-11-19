"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import DateReserve from '@/components/DateReserve';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import dayjs, { Dayjs } from 'dayjs';
import Image from 'next/image';


export default function page() {
     const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
     const [numGuest, setNumGuest] = useState<number>(1);

     const incrementGuest = () => setNumGuest(numGuest + 1);
     const decrementGuest = () => setNumGuest(Math.max(1, numGuest - 1)); // Ensure minimum guest count is 1

     const handleSubmit = async () => {
          //PUT edit booking
     }
     {/*since this is edit booking,placeholder should be the existing information right,
          I guess we should fetch old data then set placeholder too mai wa*/}

     return (
          <div className="flex flex-row">
               <NavBar />
               <main className="flex flex-col items-start px-32 py-32 bg-black w-full min-h-screen text-white">
                    <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                         Edit Booking
                    </p>

                    <div className="flex flex-col space-y-4 mt-4">
                         {/*Reservation Date*/}
                         <div className="flex justify-between items-center space-x-16">
                              <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                                   1.  Edit Reservation Date
                              </span>
                              <div className="relative">
                                   <div className="absolute bg-white w-1/2  h-full"></div>
                                   <DateReserve
                                        onDateChange={(value: Dayjs) => setReserveDate(value)}
                                   />
                              </div>
                         </div>
                         {/*Number of Guests*/}
                         <div className="flex justify-between items-center space-x-16">
                              <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                                   2.  Edit Number Of Guests
                              </span>
                              <div className="flex items-center gap-4">
                                   <button
                                        onClick={decrementGuest}
                                        className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-200"
                                        aria-label="Decrease"
                                   >
                                        <RemoveIcon fontSize="small" />
                                   </button>
                                   <input
                                        type="number"
                                        min="1"
                                        value={numGuest}
                                        onChange={(e) => {
                                             const value = parseInt(e.target.value, 10);
                                             if (!isNaN(value) && value > 0) setNumGuest(value);
                                        }}
                                        className="w-16 text-center border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-yellow-400"
                                   />
                                   <button
                                        onClick={incrementGuest}
                                        className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-200"
                                        aria-label="Increase"
                                   >
                                        <AddIcon fontSize="small" />
                                   </button>
                              </div>
                         </div>
                    </div>

                    <div className="relative z-20 mt-8 flex justify-center">
                         <button
                              onClick={handleSubmit}
                              className="w-30 h-10 z-10  rounded-full  bg-yellow-400 hover:bg-yellow-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center shadow-lg transition"
                         >
                              Confirm Edit Booking
                         </button>
                    </div>
               </main>
          </div>
     )
}
