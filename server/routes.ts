import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for form submissions
  app.post('/api/leads', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = leadFormSchema.parse(req.body);
      
      // Store the lead data
      const lead = await storage.createLead(validatedData);
      
      // Return success response
      res.status(201).json({
        message: 'Lead created successfully',
        data: lead
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: 'Validation error',
          errors: validationError.details
        });
      } else {
        console.error('Error creating lead:', error);
        res.status(500).json({
          message: 'Internal server error'
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
