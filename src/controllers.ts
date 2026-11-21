import {Router} from "express";
import {parseId} from "./errors";
import {customerSchema, customerFilterSchema, gameSchema} from "./schemas";
import type {CustomerService, GameService} from "./services";

export function customerRoutes(service: CustomerService): Router {
  const router = Router();
  router.post("/", (req, res) => {
    res.status(201).json(service.createCustomer(customerSchema.parse(req.body)));
  });
  router.put("/:id", (req, res) => {
    res.json(service.updateCustomer(parseId(req.params.id), customerSchema.parse(req.body)));
  });
  router.delete("/:id", (req, res) => {
    service.deleteCustomer(parseId(req.params.id));
    res.status(204).send();
  });
  router.get("/", (req, res) => {
    res.json(service.findCustomers(customerFilterSchema.parse(req.query)));
  });
  router.get("/:id", (req, res) => {
    res.json(service.getCustomerById(parseId(req.params.id)));
  });
  return router;
}

export function gameRoutes(service: GameService): Router {
  const router = Router();
  router.post("/", (req, res) => {
    res.status(201).json(service.createGame(gameSchema.parse(req.body)));
  });
  router.put("/:id", (req, res) => {
    res.json(service.updateGame(parseId(req.params.id), gameSchema.parse(req.body)));
  });
  return router;
}
