// import { TRegisterSchema } from "../auth/register/_schema";

// const base_url = "http://localhost:3000/api";

// export const registerAPI = async (data: TRegisterSchema) => {
//   const request = await fetch(`${base_url}/users`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//       name: "test",
//     }),
//   });
//   if (!request.ok) {
//     throw new Error("Failed to register the user");
//   }
//   const response = await request.json();
//   return response;
// };
