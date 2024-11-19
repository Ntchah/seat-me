"use client";
import React from "react";
import BookingTableRow from "@/components/BookingTableRow";
import NavBar from "@/components/NavBar";

export default function page() {

     const restaurantData = [
          { username: "Faze", restaurantName: "Dongy Sushi", bookingDate: "2024-11-20" },
          { username: "Dong", restaurantName: "Moodeng steak house", bookingDate: "2024-12-25" },
          { username: "Faze", restaurantName: "Dongy Sushi", bookingDate: "2024-11-20" },
        
        
          //call GET fetch method here
     ];

     return (
          <div className="flex flex-row">
               <NavBar />
               <main className="flex flex-col items-start px-16 py-32 bg-black w-full min-h-screen text-white">
                    <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                         Booking Management
                    </p>

                    <div className="w-full max-w-4xl overflow-hidden rounded-lg mt-4">
                         <div className="overflow-auto"> 
                              <table className="w-full table-auto text-left">
                                   <thead className="text-white text-sm border-b border-white font-medium">
                                        <tr>
                                             <th className="px-4 py-2">User</th>
                                             <th className="px-4 py-2">Restaurant</th>
                                             <th className="px-4 py-2">Booking Date</th>
                                             <th className="px-4 py-2">Actions</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {restaurantData.map((data, index) => (
                                             <BookingTableRow
                                                  key={index}
                                                  userName={data.username}
                                                  restaurantName={data.restaurantName}
                                                  bookingDate={data.bookingDate}
                                             />
                                        ))}
                                   </tbody>
                              </table>
                         </div>
                    </div>

               </main>
          </div>
     );
}
