export default async function userRegister( userName: string,userEmail: string, userTel: string, userRole: string,userPassword: string,userCreatedAt: string) {
     const response = await fetch("https://seat-me-backend.vercel.app/api/v1/auth/register",{
          method: "POST",
          headers: {
               "Content-Type": "application/json",
          },
          body: JSON.stringify({
               name:userName,
               email:userEmail,
               tel:userTel,
               role:userRole,
               password:userPassword,
               createdAt:userCreatedAt,
          }),
     })
     if(!response.ok) {
          throw new Error("Failed to Register")
     }
     return await response.json()
  
}
