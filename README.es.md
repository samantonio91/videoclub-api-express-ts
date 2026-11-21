# VideoClub API — Express + TypeScript

Proyecto de aprendizaje que replica las **siete operaciones del diagrama UML de VideoClub** ya implementadas en [Java/Spring Boot](https://github.com/samantonio91/videoclub-api-java), ahora con Node.js, TypeScript y Express 5.

Usa controladores, servicios, repositorios y validaciones con Zod. Los datos se guardan **en memoria** y se pierden al reiniciar: todavía no es un sistema de producción ni incluye autenticación o alquileres.

## Cómo ejecutar

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
```

Rutas de clientes: `POST /api/customers`, `PUT /api/customers/:id`, `DELETE /api/customers/:id`, `GET /api/customers` y `GET /api/customers/:id`.

Rutas de videojuegos: `POST /api/games` y `PUT /api/games/:id`.

La API acepta nombres de campos en inglés para facilitar su lectura en un portafolio internacional. Hay pruebas HTTP con Vitest y Supertest y validación automática en GitHub Actions.

## Mejoras y proyectos relacionados

Consulta el [backlog de mejoras](ROADMAP.md), enlazado a los Issues reales de GitHub. Las funcionalidades planificadas **todavía no están implementadas**.

Este proyecto forma parte de una comparativa de tres implementaciones del mismo dominio:

- [VideoClub Java + Spring Boot](https://github.com/samantonio91/videoclub-api-java).
- **VideoClub Express + TypeScript** (este repositorio).
- [VideoClub NestJS + TypeScript](https://github.com/samantonio91/videoclub-api-nestjs-ts).

La siguiente etapa será mejorar las pruebas e incorporar persistencia real sin romper los contratos de la API.
