# TSOA Todo API

A minimal **TypeScript + Express + TSOA** Todo API with **automatic OpenAPI generation** and **Swagger UI documentation**.  
This project demonstrates a lightweight, type-safe backend using functional Express routes and TSOA controllers.

---

## Features

- Express server in TypeScript
- Class-based controllers with TSOA
- Automatic OpenAPI (`openapi.json`) generation
- Swagger UI at `/docs`
- Public API spec served from `/public/openapi.json`
- Minimal Todo CRUD endpoints
- Strong TypeScript type safety

---

## Project Structure


```
tsoa-todo/
│
├── src/
│   ├── server.ts
│   ├── controllers/
│   │   └── todo.controller.ts
│   ├── models/
│   │   └── todo.ts
│   └── routes.ts   (auto-generated)
│
├── tsoa.json
├── tsconfig.json
├── package.json


```



## Generate TSOA Routes and OpenAPI Spec
```
# Generate OpenAPI spec
bunx tsoa spec

# Generate Express routes
bunx tsoa routes

```