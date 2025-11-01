# Red Eclipse Testing

Sitio web del proyecto Red Eclipse Testing construido con React, TypeScript, Vite y Tailwind CSS.

## Requisitos Previos

### Node.js
Este proyecto requiere **Node.js versión 21.7.3**.

Para instalar Node.js 21.7.3:

```bash
# Usando nvm (recomendado)
nvm install 21.7.3
nvm use 21.7.3

# O descarga directamente desde
# https://nodejs.org/download/release/v21.7.3/
```

### pnpm
Este proyecto utiliza **pnpm** como gestor de paquetes.

Para instalar pnpm:

```bash
# Usando npm (viene con Node.js)
npm install -g pnpm

# O usando Homebrew (macOS)
brew install pnpm

# O usando el script de instalación
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Verifica la instalación:
```bash
pnpm --version
```

## Instalación

1. Clona el repositorio
```bash
git clone <url-del-repositorio>
cd red-eclipse-testing
```

2. Instala las dependencias
```bash
pnpm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:5173`

## Build

Para crear una build de producción:

```bash
pnpm build
```

Los archivos compilados se generarán en la carpeta `dist/`

Para previsualizar la build de producción localmente:

```bash
pnpm preview
```

## Linting

Para ejecutar el linter:

```bash
pnpm lint
```

## Deploy

El sitio se deploya automáticamente a GitHub Pages cuando se hace push a la rama `main`.

Para más información sobre la configuración de GitHub Pages, consulta [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

## Stack Tecnológico

- **React 19** - Biblioteca de UI
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Framework de CSS utility-first
- **Framer Motion** - Biblioteca de animaciones
- **React Router** - Enrutamiento

## Tecnologías y Herramientas

- Hot Module Replacement (HMR) para desarrollo rápido
- ESLint para análisis de código
- PostCSS para procesamiento de CSS
- GitHub Actions para CI/CD automático
