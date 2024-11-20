"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { RestaurantByIdJson } from "../../interface";
import postRestaurant from "@/libs/postRestaurant";

export default function CreateRestaurantPanel({
     token,
}: {
     token: string;
}) {
     const [restaurantName, setrestauRantName] = useState<string>('');
     const [address, setAddress] = useState<string>('');
     const [foodType, setFoodType] = useState<string>('');
     const [province, setProvince] = useState<string>('');
     const [postalCode, setPostalCode] = useState<string>('');
     const [tel, setTel] = useState<string>('');
     const [img, setImg] = useState<string>('');

     const router = useRouter();

     const validateInputs = (): boolean => {
          if (!restaurantName.trim()) {
               alert('Restaurant name is required.');
               return false;
          }

          if (!address.trim()) {
               alert('Address is required.');
               return false;
          }

          if (!foodType.trim()) {
               alert('Food type is required.');
               return false;
          }

          if (!province.trim()) {
               alert('Province is required.');
               return false;
          }

          if (!postalCode.trim() || postalCode.length !== 5 || isNaN(Number(postalCode))) {
               alert('Postal code is required and must be a valid 5-digit number.');
               return false;
          }

          if (!tel.trim() || tel.length < 10 || isNaN(Number(tel))) {
               alert('Phone number is required and must be at least 10 digits.');
               return false;
          }

          if (!img.trim()) {
               alert('Image URL is required.');
               return false;
          }

          return true;
     };

     const handleSubmit = async () => {
          if (!validateInputs()) {
               return;
          }

          try {
               const response: RestaurantByIdJson = await postRestaurant(
                    token,
                    restaurantName,
                    address,
                    foodType,
                    province,
                    postalCode,
                    tel,
                    img,
               )
               router.push(`/manage/restaurant/detail/${response.data._id}`);
               router.refresh();
          } catch (error) {
               console.error('Error posting restaurant:', error);
               alert('Failed to create restaurant. Please try again.');
          }

     }

     return (
          <div>
               <div className="flex flex-col space-y-4 mt-4">
                    {/*Restaurant Name*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              1.  Restaurant Name
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="restaurantName"
                                   value={restaurantName}
                                   onChange={(e) => setrestauRantName(e.target.value)}
                                   required
                                   placeholder="Enter Restaurant Name"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
                    {/*Address*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              2.  Address
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="address"
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}
                                   required
                                   placeholder="Enter Address"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
                    {/*Food Type*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              3.  Food Type
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="foodType"
                                   value={foodType}
                                   onChange={(e) => setFoodType(e.target.value)}
                                   required
                                   placeholder="Enter Food Type"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
                    {/*Province*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              4.  Province
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="province"
                                   value={province}
                                   onChange={(e) => setProvince(e.target.value)}
                                   required
                                   placeholder="Enter Province"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
                    {/*Postal Code*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              5.  Postal Code
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="postalCode"
                                   value={postalCode}
                                   onChange={(e) => setPostalCode(e.target.value)}
                                   required
                                   placeholder="Enter Postal Code"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
                    {/*Telephone Number*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              6.  Telephone Number
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="tel"
                                   value={tel}
                                   onChange={(e) => setTel(e.target.value)}
                                   required
                                   placeholder="Enter Telephone Number"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
                    {/*Image*/}
                    <div className="flex justify-between items-center space-x-16">
                         <span className="text-white text-sm font-light w-56 text-left border border-white rounded-full px-4 py-2">
                              7.  Image
                         </span>
                         <div className="relative">
                              <div className="absolute h-full"></div>
                              <input
                                   type="text"
                                   id="img"
                                   value={img}
                                   onChange={(e) => setImg(e.target.value)}
                                   required
                                   placeholder="Enter Image Path"
                                   className="w-full bg-black text-white border-0 border-b-2 border-gray-300 focus:border-yellow-500 placeholder:text-sm placeholder-gray-500 focus:ring-0 focus-visible:outline-none"
                              />
                         </div>
                    </div>
               </div>

               <div className="relative z-20 mt-8 flex justify-center">
                    <button
                         onClick={handleSubmit}
                         className="w-30 h-10 z-10  rounded-full  bg-yellow-400 hover:bg-yellow-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center shadow-lg transition"
                    >
                         Confirm Create Restaurant
                    </button>
               </div>
          </div>
     )
}
