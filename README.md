# 🚛 Mudanzas Express | Catálogo Interactivo v2.0

Este proyecto es un **Catálogo Interactivo de Servicios de Mudanza** diseñado para ofrecer una experiencia de búsqueda y filtrado de alto rendimiento. Desarrollado con **React 18**, **TypeScript** y **Vite**, implementa las mejores prácticas de renderizado y gestión de estados.

## 🎯 Objetivo del Proyecto

Crear una interfaz dinámica que permita a los usuarios explorar diferentes tipos de servicios logísticos (Residencial, Corporativo, Internacional, etc.) utilizando herramientas avanzadas de filtrado y ordenamiento sin comprometer el rendimiento de la aplicación.

## 🚀 Requisitos Funcionales Implementados

### 1. Renderizado Condicional y Listas
- **Gestión de Estados**: Pantallas dedicadas para carga (`LoadingSpinner`), errores y estados vacíos (`EmptyState`).
- **Eficiencia en Listas**: Uso de `.map()` con `id` únicos para un re-renderizado óptimo del DOM virtual.
- **Tarjetas Dinámicas**: Etiquetas inteligentes que cambian según la categoría y disponibilidad del servicio.

### 2. Sistema de Búsqueda y Filtros
- **Búsqueda Multi-campo**: Filtra por nombre y descripción en tiempo real, ignorando mayúsculas/minúsculas.
- **Filtros Avanzados**:
  - Por categoría (Dropdown).
  - Por disponibilidad (Checkbox).
- **Limpieza de Filtros**: Botón dedicado para resetear todos los parámetros de búsqueda.

### 3. Ordenamiento (No-Mutante)
- Implementación de lógica de ordenamiento sin mutar el array original (usando el operador spread y `useMemo`).
- **Criterios**: Nombre (A-Z), Precio (Asc/Desc) y Rating.

## 🛠️ Stack Tecnológico

- **React 18**: Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`).
- **TypeScript**: Tipado estricto para modelos de datos y props de componentes.
- **Vite**: Bundler de última generación para un desarrollo ultra rápido.
- **CSS Pro**: Diseño moderno con variables, animaciones `fadeIn` y UI responsiva.

## 📂 Estructura de Archivos

```text
src/
├── components/
│   ├── Catalog.tsx         # Orquestador principal
│   ├── ItemCard.tsx        # Representación visual de cada servicio
│   ├── FilterPanel.tsx     # Controles de categoría y disponibilidad
│   └── SearchBar.tsx       # Input de búsqueda con debounce
├── data/
│   └── items.ts            # Base de datos mock de servicios
├── hooks/
│   └── useDebounce.ts      # Hook para optimizar la búsqueda
└── types/
    └── index.ts            # Interfaces de TypeScript
