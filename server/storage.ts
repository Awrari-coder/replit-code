import { users, type User, type InsertUser } from "@shared/schema";
import { inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { createObjectCsvWriter } from "csv-writer";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class DatabaseStorage implements IStorage {
  private csvWriters: Map<number, any>;

  constructor() {
    this.csvWriters = new Map();

    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }
  }

  private createUserSpreadsheet(user: User) {
    const csvWriter = createObjectCsvWriter({
      path: path.join(process.cwd(), 'data', `user_${user.id}_activities.csv`),
      header: [
        {id: 'date', title: 'Date'},
        {id: 'action', title: 'Action'},
        {id: 'details', title: 'Details'}
      ]
    });

    this.csvWriters.set(user.id, csvWriter);

    // Write initial row
    return csvWriter.writeRecords([{
      date: new Date().toISOString(),
      action: 'Account Created',
      details: `User: ${user.name}, Email: ${user.email}`
    }]);
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();

    await this.createUserSpreadsheet(user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();

    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return db.select().from(inquiries);
  }
}

export const storage = new DatabaseStorage();