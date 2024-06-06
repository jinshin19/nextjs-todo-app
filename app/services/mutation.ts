// import { useMutation } from "@tanstack/react-query";
// import { registerAPI } from "./api";
// import { TRegisterSchema } from "../auth/register/_schema";

// export const useRegister = () => {
//   return useMutation({
//     mutationFn: (data: TRegisterSchema) => registerAPI(data),
//     onSuccess: (data) => {
//       console.log("Registered Successfully");
//       return data;
//     },
//     onSettled: (_, error) => {
//       error && console.log("error", error);
//     },
//   });
// };
