import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  service: text("service").notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  message: true,
  service: true,
}).extend({
  email: z.string().email(),
  message: z.string().min(10),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
