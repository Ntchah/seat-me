
import NavBar from '@/components/NavBar';
import RestaurantTableRow from '@/components/RestaurantTableRow';
import getRestaurants from '@/libs/getRestaurants';
import { RestaurantItem, RestaurantJson } from '../../../../interface';
import Link from "next/link";


export default async function page() {
	const restaurantsJson: Promise<RestaurantJson> = getRestaurants();
	const restaurantsJsonReady = await restaurantsJson;

     return (
          <div className="flex flex-row">
               <NavBar />
               <main className="flex flex-col items-start px-16 py-32 bg-black w-full min-h-screen text-white">
                    <div className="flex flex-row items-center">
                         <p className="font-eglen text-3xl md:text-5xl lg:text-7xl whitespace-nowrap">
                              Restaurant Management
                         </p>
                         <Link
                              href="/manage/restaurant/create"
                              className="ml-4 border rounded-full bg-white text-black text-sm px-4 py-2 flex items-center justify-center self-center"
                         >
                              + New
                         </Link>
                    </div>


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
								{restaurantsJsonReady.data.map(
									(restaurant: RestaurantItem, index: number) => (
										<RestaurantTableRow
											key={index}
											name={restaurant.name}
											foodType={restaurant.foodtype}
											province={restaurant.province}
										/>
									),
								)}
							</tbody>
						</table>
					</div>
				</div>

               </main>
          </div>
     );

}
