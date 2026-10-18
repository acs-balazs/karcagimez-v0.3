# Karcagi Méz – frontend

React és Vite alapú magyar nyelvű webes felület. A kliens a `server/` mappában található Express API-val kommunikál.

## Fejlesztés

```sh
npm install
npm run dev
```

A backend külön terminálból indítható a `server/` mappában:

```sh
npm install
npm run dev
```

Alapértelmezés szerint a kliens a `http://localhost:5000` címen keresi az API-t. Eltérő backendcím esetén a `client/` mappában `.env` fájllal állítsd be:

```env
VITE_API_URL=http://localhost:5000
```

## Elérhető oldalak

- `/` – kezdőlap
- `/termekek` – termékkatalógus és keresés
- `/termek/:slug` – termékadatlap
- `/tortenet` – statikus történetoldal
- `/admin` – adminisztrátori bejelentkezés és termékkezelés

Az adminfelület a backend JWT-alapú bejelentkezését és termék CRUD végpontjait használja. A backend jelenlegi API-ja nem biztosít kosár-, rendelés- vagy fizetési funkciót.

## Ellenőrzés és build

```sh
npm run lint
npm run build
```
