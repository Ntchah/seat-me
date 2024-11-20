
import NavBar from "@/components/NavBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import CreateRestaurantPanel from "@/components/CreateRestaurantPanel";
export default async function page() {

     const session = await getServerSession(authOptions);
     if (!session) return null;

     return (
          <div className="flex flex-row">
               <NavBar />
               <main className="flex flex-col items-start px-32 py-32 bg-black w-full min-h-screen text-white">
                    <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                         Create Restaurant
                    </p>
                    <CreateRestaurantPanel token={session.user.token} />
               </main>
          </div>
     )
}
