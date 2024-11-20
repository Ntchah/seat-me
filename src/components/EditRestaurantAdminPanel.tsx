'use client';

import NavBar from '@/components/NavBar';
import putRestaurant from '@/libs/putRestaurant';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RestaurantByIdJson } from '../../interface';
import { useState } from 'react';

export default function EditRestaurantAdminPanel({
     rid,
     token,
     restaurantJsonReady,
}: {
     rid: string;
     token: string;
     restaurantJsonReady: RestaurantByIdJson;
}) {
     const [restaurantName, setrestauRantName] = useState<string>(restaurantJsonReady.data.name);
     const [address, setAddress] = useState<string>(restaurantJsonReady.data.address);
     const [foodType, setFoodType] = useState<string>(restaurantJsonReady.data.foodtype);
     const [province, setProvince] = useState<string>(restaurantJsonReady.data.province);
     const [postalCode, setPostalCode] = useState<string>(restaurantJsonReady.data.postalcode);
     const [tel, setTel] = useState<string>(restaurantJsonReady.data.tel);
     const [img, setImg] = useState<string>(restaurantJsonReady.data.picture);

     const router = useRouter();

     const handleSubmit = async () => {
          try {
			await putRestaurant(
				rid,
				token,
				restaurantName,
				address,
				foodType,
                    province,
                    postalCode,
                    tel,
                    img
			);
			alert('Edited Restaurant successfully!');
			router.push('/manage/restaurant');
			router.refresh();
		} catch (error) {
			console.error('Error editing restaurant:', error);
			alert('Failed to edit restaurant. Please try again.');
		}
     };

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
                                   placeholder={restaurantJsonReady.data.name}
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
                                   placeholder={restaurantJsonReady.data.address}
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
                                   placeholder={restaurantJsonReady.data.foodtype}
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
                                   placeholder={restaurantJsonReady.data.province}
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
                                   placeholder={restaurantJsonReady.data.postalcode}
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
                                   placeholder={restaurantJsonReady.data.tel}
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
                                   placeholder={restaurantJsonReady.data.picture}
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
                         Confirm Edit Restaurant
                    </button>
               </div>
          </div>
     );
}
