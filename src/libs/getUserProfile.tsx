export default async function getUserProfile(token:string) {
     const response = await fetch("https://seat-me-backend.vercel.app/api/v1/auth/me",{
          method: "GET",
          headers: {
               authorization: `Bearer ${token}`,
          },
     })
     if(!response.ok) {
          throw new Error("Failed to fetch user profile")
     }
     return response.json()

}