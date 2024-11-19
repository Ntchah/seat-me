export default async function putRestaurant(
	id: string,
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
		`https://seat-me-backend.vercel.app:443/api/v1/restaurants/${id}`,
		{
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				address: address,
				foodtype: foodtype,
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
