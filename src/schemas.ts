import {z} from "zod";

export const customerSchema = z.object({
  documentId: z.string().trim().min(1).optional(),
  name: z.string().trim().min(1),
  phone: z.string().trim().min(1).optional(),
  email: z.string().trim().email().optional()
}).strict();

export const customerFilterSchema = z.object({
  documentId: z.string().trim().optional(),
  name: z.string().trim().optional()
}).strict();

export const gameSchema = z.object({
  code: z.number().int().nonnegative(),
  title: z.string().trim().min(1),
  price: z.number().finite().nonnegative(),
  platform: z.string().trim().min(1),
  genre: z.string().trim().min(1)
}).strict();

export type CustomerInput = z.infer<typeof customerSchema>;
export type CustomerFilter = z.infer<typeof customerFilterSchema>;
export type GameInput = z.infer<typeof gameSchema>;
