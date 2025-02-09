import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  // API Routes
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const result = await storage.createInquiry(inquiry);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: "Invalid inquiry data" });
    }
  });

  // Ensure all non-API routes are handled by the frontend
  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) {
      next();
    } else {
      // Let Vite handle the frontend routing
      next();
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}