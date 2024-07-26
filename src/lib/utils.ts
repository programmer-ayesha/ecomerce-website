import z from "zod";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const validateUserId = z.object({
//   userid: z.string()
// });
// export const validateDelete = z.object({
//   userid:z.string(),
//   productid:z.string()
// })
// export const validatePOST = z.object({
//   userid:z.string(),
//   productid:z.string(),
//   quantity:z.number()
// })

export const validatePOST = z.object({
  userid: z.string(),
  productid: z.string(),
  quantity: z.number().min(1),
});

export const validateUserId = z.object({
  userid: z.string(),
});

export const validateDelete = z.object({
  userid: z.string(),
  productid: z.string(),
});
