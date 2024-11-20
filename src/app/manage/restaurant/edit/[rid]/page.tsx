import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import EditRestaurantAdminPanel from '@/components/EditRestaurantAdminPanel';
import getRestaurant from '@/libs/getRestaurant';
import { getServerSession } from 'next-auth';
import { RestaurantByIdJson } from '../../../../../../interface';
import NavBar from '@/components/NavBar';

export default async function page({
     params,
}: {
     params: {
          rid: string;
     };
}) {
     const session = await getServerSession(authOptions);
     if (!session) return null;
     const restaurantJson: Promise<RestaurantByIdJson> = getRestaurant(params.rid);
     const restaurantJsonReady = await restaurantJson;

     return (

          <div className="flex flex-row">
               <NavBar />
               <main className="flex flex-col items-start px-32 py-32 bg-black w-full min-h-screen text-white">
                    <p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
                         Edit Restaurant
                    </p>
                    <EditRestaurantAdminPanel
                         rid={params.rid}
                         token={session.user.token}
                         restaurantJsonReady={restaurantJsonReady}
                    />
               </main>
          </div>
     );
}
