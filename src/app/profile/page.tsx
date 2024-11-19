"use client"
import Image from "next/image"
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";
import { useState, useEffect } from "react";
import Link from "next/link";

interface UserProfile {
     name: string;
     email: string;
     tel: string;
     role: string;
     password: string;
     createdAt: string;
}

export default function page() {
     const { data: session, status } = useSession();
     const [profile, setProfile] = useState<UserProfile | null>(null);

     useEffect(() => {
          if (session?.user.token) {
               const fetchProfile = async () => {
                    try {
                         const profileData = await getUserProfile(session.user.token);
                         setProfile(profileData);
                    } catch (err) {
                         console.error("Failed to load profile:", err);
                    }
               };

               fetchProfile();
          }
     }, [session?.user.token]);

     if (status === "loading") {
          return <div>Loading...</div>;
     }

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
                         <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                              Welcome, {session?.user.name}
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
               {profile && (
                    <div className="flex flex-col items-center z-10 text-white relative pt-20 space-y-4">
                         <p className="text-3xl lg:text-4xl">{profile.name}</p>
                         <p className="text-base lg:text-md text-gray-200 font-light">{profile.email}</p>
                         <p className="text-base lg:text-md text-gray-200 font-light">Tel: {profile.tel}</p>
                         <p className="text-base lg:text-md text-gray-200 font-light">Role: {profile.role}</p>
                         <p className="text-base lg:text-md text-gray-200 font-light">Account Created: {new Date(profile.createdAt).toLocaleDateString()}</p>

                         <Link href="/mybooking" className="mt-6 inline-block py-2 px-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-300">
                                   View Bookings
                         </Link>
                    </div>
               )}
          </div>

     )
}