# VideoClub API — Express + TypeScript

Proyecto de aprendizaje que replica las **siete operaciones del diagrama UML de VideoClub** ya implementadas en [Java/Spring Boot](https://github.com/samantonio91/videoClub), ahora con Node.js, TypeScript y Express 5.

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

Siguiente etapa: persistencia con MySQL/PostgreSQL y posteriormente alquileres, disponibilidad y devoluciones.
