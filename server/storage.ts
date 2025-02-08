import { users, type User, type InsertUser } from "@shared/schema";
import { inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";
import fs from "fs";
import path from "path";
import { createObjectCsvWriter } from "csv-writer";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private currentId: number;
  private csvWriter;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.currentId = 1;

    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
    }

    this.csvWriter = createObjectCsvWriter({
      path: path.join(dataDir, 'inquiries.csv'),
      header: [
        {id: 'id', title: 'ID'},
        {id: 'name', title: 'Name'},
        {id: 'email', title: 'Email'},
        {id: 'message', title: 'Message'},
        {id: 'service', title: 'Service'}
      ]
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentId++;
    const inquiry: Inquiry = { ...insertInquiry, id };
    this.inquiries.set(id, inquiry);

    // Save to CSV
    await this.csvWriter.writeRecords([inquiry]);

    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
}

export const storage = new MemStorage();