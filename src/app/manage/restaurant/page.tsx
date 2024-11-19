"use client";
import React from "react";
import RestaurantTableRow from "@/components/RestaurantTableRow";
import NavBar from "@/components/NavBar";

export default function page() {

     const restaurantData = [
          { name: "Dongy Sushi", foodType: "FineDine", province: "Rayong" },
          { name: "Dongy Sushi", foodType: "FineDine", province: "Rayong" },
          { name: "Dongy Sushi", foodType: "FineDine", province: "Rayong" },
          //call GET fetch method here
     ];

     return (
          <div className="flex flex-row">
               <NavBar />
               <main className="flex flex-col items-start px-16 py-32 bg-black w-full min-h-screen text-white">
                    <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                         Restaurant Management
                    </p>

                    <div className="w-full max-w-4xl overflow-hidden rounded-lg mt-4">
                         <div className="overflow-auto"> 
                              <table className="w-full table-auto text-left">
                                   <thead className="text-white text-sm border-b border-white font-medium">
                                        <tr>
                                             <th className="px-4 py-2">Name</th>
                                             <th className="px-4 py-2">Foodtype</th>
                                             <th className="px-4 py-2">Province</th>
                                             <th className="px-4 py-2">Actions</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        {restaurantData.map((data, index) => (
                                             <RestaurantTableRow
                                                  key={index}
                                                  name={data.name}
                                                  foodType={data.foodType}
                                                  province={data.province}
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