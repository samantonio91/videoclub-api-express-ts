# VideoClub Express + TypeScript — Development roadmap

> **Current state:** the original seven UML operations are implemented with *in-memory* repositories. Data is lost on restart. This is a learning API, not a production service.
>
> **Estado actual:** las siete operaciones UML utilizan almacenamiento **en memoria**. No existe persistencia ni despliegue comercial.

This checklist reflects **real open GitHub Issues**; it is not an artificial commit calendar. Features should be delivered only when each issue's acceptance criteria and tests pass.

## Prioritized work / Prioridades

| Order | Issue | Deliverable | Status |
| --- | --- | --- | --- |
| 1 | [#2 — reproducible dependencies and CI](https://github.com/samantonio91/videoclub-api-express-ts/issues/2) | package-lock.json, npm ci, dependency checks | Planned |
| 2 | [#6 — service and API edge-case tests](https://github.com/samantonio91/videoclub-api-express-ts/issues/6) | unit/HTTP contracts, verification | Planned |
| 3 | [#3 — Prisma database adapters](https://github.com/samantonio91/videoclub-api-express-ts/issues/3) | migrations, persistence, integration tests | Planned |
| 4 | [#4 — rentals and returns](https://github.com/samantonio91/videoclub-api-express-ts/issues/4) | business rules, availability, double-rental protection | Planned |
| 5 | [#5 — OpenAPI, Docker and bilingual docs](https://github.com/samantonio91/videoclub-api-express-ts/issues/5) | reproducible local environment, API documentation | Planned |
| 6 | [#7 — portfolio case study and demo](https://github.com/samantonio91/videoclub-api-express-ts/issues/7) | real evidence, sister-repo comparison, safe demo decision | Planned |

## Implementation checklist / Lista de validación

- [x] Seven original UML methods exposed through REST routes.
- [x] TypeScript, Express routing, service/repository separation, request validation and initial tests.
- [ ] CI with a committed dependency lockfile.
- [ ] Broader unit/HTTP contract tests.
- [ ] Persistent database with migrations.
- [ ] Rental, return and availability workflows.
- [ ] OpenAPI contract and easy local deployment.
- [ ] Public portfolio case study with real technical evidence.

## Repository comparison / Comparativa de implementaciones

- [Java + Spring Boot](https://github.com/samantonio91/videoclub-api-java) — enterprise Java/JPA patterns.
- **Express + TypeScript** — manually assembled layers and middleware.
- [NestJS + TypeScript](https://github.com/samantonio91/videoclub-api-nestjs-ts) — framework-defined modules, providers and dependency injection.

**Policy:** use small descriptive pull requests, run tests, state remaining limitations, and never invent dates, production traffic or performance results. Keep all credentials out of Git.
