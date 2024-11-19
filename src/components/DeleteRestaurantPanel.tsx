'use client';

import NavBar from '@/components/NavBar';
import deleteRestaurant from '@/libs/deleteRestaurant';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RestaurantByIdJson } from '../../interface';

export default function DeleteRestaurantPanel({
	rid,
	token,
	restaurantJsonReady,
}: {
	rid: string;
	token: string;
	restaurantJsonReady: RestaurantByIdJson;
}) {
	const router = useRouter();
	const handleSubmit = async () => {
		try {
			await deleteRestaurant(rid, token);
			alert('Successfully deleted restaurant.');
			router.push('/manage/restaurant');
			router.refresh();
		} catch (error) {
			console.error('Error deleting restaurant:', error);
			alert('Failed to delete restaurant. Please try again.');
		}
	};

	return (
		<div className="flex flex-row">
			<NavBar />
			<main className="flex flex-col items-start px-24 py-32 bg-black w-full min-h-screen text-white">
				<p className="font-eglen text-3xl md:text-5xl lg:text-7xl text-nowrap">
					Restaurant Detail
				</p>
				<div className="relative z-20 flex flex-row justify-center w-3/4 items-top justify-items-center gap-8 pt-12">
					<div className="relative z-20 flex flex-col justify-start self-center items-start w-full">
						<div className="relative z-20 flex flex-col max-w-lg space-y-2 p-8 w-full bg-transparent border border-white rounded-lg">
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Restaurant name
								</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.name}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Address</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.address}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Food Type</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.foodtype}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Province</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.province}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">
									Postal Code
								</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.postalcode}
								</p>
							</div>
							<div className="flex justify-between items-center">
								<p className="text-white text-sm font-medium py-2">Tel</p>
								<p className="text-white text-sm font-light py-2">
									{restaurantJsonReady.data.tel}
								</p>
							</div>
						</div>
						<div className="py-6 space-x-2 flex justify-start items-start justify-items-start gap-4">
							<button
								onClick={handleSubmit}
								className="w-60 h-10 z-10 border-[1px] rounded-full border-red-600 bg-red-600 text-white text-sm  px-4 py-2.5 flex items-center justify-center"
							>
								Confirm Delete Restaurant
							</button>
						</div>
					</div>
					<div>
						<Image
							src={restaurantJsonReady.data.picture}
							alt="Restaurant Image"
							width={300}
							height={600}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
