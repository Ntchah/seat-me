export interface RestaurantItem {
	_id: string;
	name: string;
	foodtype: string;
	address: string;
	province: string;
	postalcode: string;
	tel: string;
	picture: string;
	__v: number;
	id: string;
}

export interface RestaurantJson {
	success: boolean;
	count: number;
	pagination: Object;
	data: RestaurantItem[];
}

export interface BookingItem {
	_id: string;
	user: string;
	restaurant: RestaurantItem;
	bookingDate: string;
	numOfGuests: string;
	__v: number;
	id: string;
}

export interface BookingJson {
	success: boolean;
	count: number;
	pagination: Object;
	data: BookingItem[];
}
