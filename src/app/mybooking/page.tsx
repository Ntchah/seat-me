import Image from "next/image"
import MyBookingPanel from "@/components/MyBookingPanel"

export default function page() {
     return (
          <div className="overflow-hidden w-full h-full py-16 relative z-10">
               <Image
                    src="/img/footer-background.jpeg"
                    alt="Footer Background"
                    fill={true}
                    objectFit="cover"
                    className="absolute inset-0 z-0"
               />
               <div className="absolute inset-0 bg-black opacity-70 z-10" />
               <div className="flex justify-between items-center gap-8">
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
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-white gap-2">
                         <p className="text-md lg:text-xl">Your next meal awaits.</p>
                         <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                              My Bookings
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
               <MyBookingPanel/>
          </div>
     )
}
