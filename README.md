# Liquoría — Licorería virtual

Catálogo curado de licores con bot recomendador, mapa interactivo de orígenes, reseñas y carrito.
Bilingüe (español / inglés), mobile-first, demo estático sin backend.

## Features

- **Catálogo** con filtros por tipo, perfil de sabor y orden por precio o calificación.
- **Bot recomendador** guiado: 4 preguntas → sugerencias top 3.
- **Mapa de orígenes** interactivo (Leaflet + OpenStreetMap) con todos los productos agrupados por región.
- **Detalle de producto** con imagen, descripción, consejos de cómo beberlo, maridajes, mapa puntual y reseñas.
- **Carrito** persistido en localStorage; checkout simulado vía WhatsApp.
- **i18n ES/EN** con toggle en el header (persistido en localStorage).
- **Tema oscuro** estilo bar premium.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- React-Leaflet + OpenStreetMap (sin API key)

## Desarrollo

```bash
npm install
npm run dev
```

App en `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm start
```

## Despliegue

Compatible con Vercel out-of-the-box: importar el repo y hacer deploy. Sin variables de entorno requeridas.

## Estructura

- `src/data/products.ts` — catálogo (editá acá para agregar/quitar productos)
- `src/data/i18n.ts` — diccionarios ES/EN
- `src/lib/i18n.tsx` — provider de idioma
- `src/lib/cart.tsx` — provider de carrito
- `src/components/` — UI compartida (Header, ProductCard, CartDrawer, mapas)
- `src/app/` — páginas (home, catalogo, producto/[slug], recomendador, mapa, consejos)

## Configuración rápida

- Cambiar número de WhatsApp para checkout: `src/components/CartDrawer.tsx` (`WHATSAPP_NUMBER`).
- Agregar producto nuevo: pushear objeto a `products` en `src/data/products.ts`.

## Aviso legal

Beber con moderación. Prohibida la venta de bebidas alcohólicas a menores de 18 años.
