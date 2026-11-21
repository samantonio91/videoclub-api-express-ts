import express from "express";
import type {NextFunction, Request, Response} from "express";
import {ZodError} from "zod";
import {customerRoutes, gameRoutes} from "./controllers";
import {HttpError} from "./errors";
import {InMemoryCustomerRepository, InMemoryGameRepository} from "./repositories";
import {CustomerService, GameService} from "./services";

/** Builds isolated repositories per app instance, so tests cannot share state. */
export function createApp() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({limit: "50kb"}));

  app.get("/health", (_req, res) => { res.json({status: "ok"}); });
  app.use("/api/customers", customerRoutes(new CustomerService(new InMemoryCustomerRepository())));
  app.use("/api/games", gameRoutes(new GameService(new InMemoryGameRepository())));

  app.use((_req, res) => { res.status(404).json({error: "Route not found"}); });
  app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (error instanceof ZodError) {
      res.status(400).json({error: "Validation error", details: error.issues.map(
        issue => ({path: issue.path.join("."), message: issue.message})
      )});
    } else if (error instanceof HttpError) {
      res.status(error.status).json({error: error.message});
    } else if (error instanceof SyntaxError && "body" in error) {
      res.status(400).json({error: "Invalid JSON"});
    } else {
      console.error("Unexpected API error", error);
      res.status(500).json({error: "Internal server error"});
    }
  });
  return app;
}
