import LandingBanner from '@/components/LandingBanner';
import MealPanel from '@/components/MealPanel';
import RestaurantPanel from '@/components/RestaurantPanel';

export default function Home() {
	return (
		<main>
			<LandingBanner />
			<MealPanel />
			<RestaurantPanel />
		</main>
	);
}
