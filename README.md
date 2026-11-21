# VideoClub API — Express 5 + TypeScript

A backend learning project reimplementing the **seven operations** from [VideoClub Java/Spring Boot](https://github.com/samantonio91/videoClub) with Express, TypeScript and dependency injection through repository interfaces.

**Status:** working starter API using **in-memory data**, not persistent storage. No authentication, rentals, or payments. Data is lost on restart.

## Requirements and commands

Node.js 22+ and npm.

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
```

Health check: `GET http://localhost:3000/health`.

## Endpoints

| UML operation | Java | Express + TypeScript |
|---|---|---|
| AgregarCliente | POST /api/clientes | POST /api/customers |
| ModificarCliente | PUT /api/clientes/:id | PUT /api/customers/:id |
| EliminarCliente | DELETE /api/clientes/:id | DELETE /api/customers/:id |
| MostrarClientes | GET /api/clientes | GET /api/customers |
| BuscarCliente | GET /api/clientes/:id | GET /api/customers/:id |
| AgregarJuego | POST /api/juegos | POST /api/games |
| ModificarJuego | PUT /api/juegos/:id | PUT /api/games/:id |

Customer JSON: `{"documentId":"ABC-123","name":"Ana Garcia","phone":"5551234","email":"ana@example.com"}`

Game JSON: `{"code":10,"title":"Adventure","price":199.5,"platform":"PC","genre":"RPG"}`

You can filter customers using `GET /api/customers?name=ana&documentId=abc`; matching is case-insensitive.

## Architecture

- `src/domain.ts`: typed Customer, Product and Game models
- `src/schemas.ts`: Zod request validation and input types
- `src/controllers.ts`: Express routes and HTTP responses
- `src/services.ts`: application operations and not-found errors
- `src/repositories.ts`: repository contracts and in-memory adapters
- `src/app.ts`: isolated Express app construction and error handling
- `tests/api.test.ts`: Vitest + Supertest endpoint tests

## Next iterations

1. Add persistent adapters using Prisma and PostgreSQL/MySQL; retain repository interfaces.
2. Extend the model with movies, rentals, returns and availability.
3. Add OpenAPI, Docker and a richer integration test suite.
4. Compare architecture and tests against the Java Spring Boot implementation and a later NestJS project.

README en español: [README.es.md](README.es.md).
