
export default async function getRestaurant(id:string) {

     const response = await fetch(`https://seat-me-backend.vercel.app/api/v1/restaurants/${id}`)
     if(!response.ok) {
          throw new Error("Failed to fetch hospital")
     }
     return await response.json()
}