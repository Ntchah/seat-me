export default async function postRestaurant(
	token: string,
	name: string,
	address: string,
	foodtype: string,
	province: string,
	postalcode: string,
	tel: string,
	picture: string,
) {
	const response = await fetch(
		'https://seat-me-backend.vercel.app:443/api/v1/restaurants/',
		{
			method: 'POST',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				foodtype: foodtype,
				address: address,
				province: province,
				postalcode: postalcode,
				tel: tel,
				picture: picture,
			}),
		},
	);
	if (!response.ok) {
		throw new Error('Failed to fetch');
	}
	return await response.json();
}
