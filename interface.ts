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

export interface RestaurantByIdJson {
	success: boolean;
	pagination: Object;
	data: RestaurantItem;
}

export interface BookingItem {
	_id: string;
	user: string;
	restaurant: RestaurantItem;
	bookingDate: string;
	numOfGuests: number;
	__v: number;
	id: string;
}

export interface BookingJson {
	success: boolean;
	count: number;
	pagination: Object;
	data: BookingItem[];
}

export interface BookingByIdJson {
	success: boolean;
	pagination: Object;
	data: BookingItem;
}
