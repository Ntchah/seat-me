import MyBookingCard from "./MyBookingCard"

const tempMyBooking: {
	bid: number;
     name: string;
     imgSrc: string;
     reserveDate: string;
}[] = [
	{
          bid: 1,
		name: 'Dongy Sushi',
		imgSrc: '/img/dongy-sushi.jpeg',
		reserveDate: '18/11/2567',
	},
	{
		bid: 2,
		name: 'Moodeng Steakhouse',
		imgSrc: '/img/moodeng-steakhouse.jpeg',
		reserveDate: '18/11/2567',
	},
	{
		bid: 3,
		name: 'Dongy Sushi',
		imgSrc: '/img/dongy-sushi.jpeg',
		reserveDate: '11/12/2567',
	},
];

export default function MyBookingPanel() {
     return (
          <div className="flex justify-center items-center w-full h-full relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 z-10 relative pt-12 lg:pt-20 px-4 lg:px-16">
              {tempMyBooking.map((restaurant) => (
                <MyBookingCard
                  key={restaurant.bid}
                  bid={restaurant.bid}
                  name={restaurant.name}
                  imgSrc={restaurant.imgSrc}
                  reserveDate={restaurant.reserveDate}
                />
              ))}
            </div>
          </div>
        );
        
        
}