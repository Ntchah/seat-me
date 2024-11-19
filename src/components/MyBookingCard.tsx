import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function MyBookingCard({
     bid,
     name,
     imgSrc,
     reserveDate,
}: {
     bid: number;
     name: string;
     imgSrc: string;
     reserveDate: string;
}) {
     return (
          <div className="flex flex-col justify-start shadow-lg">
               <span
                    key={bid}
                    className="w-36 h-8 z-10 border-[1px] rounded-full border-white flex items-center justify-center text-white font-light py-2 text-sm"
               >
                    Reservation #{bid}
               </span>


               <p className="font-eglen text-5xl text-white text-left text-wrap max-w-[270px] py-2 mb-4">
                    {name}
               </p>
               <p className="text-sm text-white text-left font-light text-wrap max-w-[270px] py-2">
                    Date: {reserveDate}
               </p>

               <Image
                    src={imgSrc}
                    alt="restaurant image"
                    className="w-[270px] h-[400px] object-cover mb-4"
                    width={100}
                    height={100}
               />

               <div className="w-full py-2 space-x-2 flex justify-between">
                    <Link
                         href="/"
                         className="w-30 h-10 z-10 border-[1px] rounded-full border-gray-500 bg-gray-500 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
                    >
                         Edit booking
                    </Link>
                    <Link
                         href="/"
                         className="w-36 h-10 z-10 border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
                    >
                         Cancel booking
                    </Link>
               </div>
          </div>
     );
}