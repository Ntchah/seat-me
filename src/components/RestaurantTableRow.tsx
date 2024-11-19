"use client";
import React from "react";
import Link from "next/link";

export default function RestaurantTableRow({
     name,
     foodType,
     province,
}: {
     name: string;
     foodType: string;
     province: string;
}) {
     return (
          <tr className="border-b border-gray-700 hover:bg-gray-900 text-sm font-light">
               <td className="px-4 py-2">{name}</td>
               <td className="px-4 py-2">{foodType}</td>
               <td className="px-4 py-2">{province}</td>
               <td className="px-4 py-2 flex space-x-2">
                    <Link
                         href="/"
                         className="border-[1px] rounded-full border-white text-white text-sm  px-3 py-1 flex items-center justify-center"
                    >
                         View
                    </Link>
                    <Link
                         href="/"
                         className="border-[1px] rounded-full border-gray-500 bg-gray-500 text-white text-sm  px-3 py-1 flex items-center justify-center"
                    >
                         Edit
                    </Link>
                    <Link
                         href="/"
                         className="border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-3 py-1 flex items-center justify-center"
                    >
                         Delete
                    </Link>
               </td>
          </tr>
     );
}
