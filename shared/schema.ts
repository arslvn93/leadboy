import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (keeping it as it's likely needed elsewhere)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Lead capture form schema
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  leadsPerMonth: text("leads_per_month").notNull(),
  created_at: text("created_at").notNull().default(new Date().toISOString()),
});

export const leadFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(6, { message: "Phone number must be at least 6 characters" }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters" }),
  leadsPerMonth: z.string().min(1, { message: "Please select the number of leads per month" }),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  created_at: true,
});

export type InsertLead = z.infer<typeof leadFormSchema>;
export type Lead = typeof leads.$inferSelect;
