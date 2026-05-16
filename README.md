# 🧬 Rick & Morty App

Aplicación web desarrollada en React que consume la API pública de Rick and Morty,
permitiendo visualizar y filtrar los personajes de la serie.

## 🚀 Demo en vivo

[Ver aplicación desplegada](#) <!-- Actualiza este link después del deploy en Vercel -->

---

## 🛠️ Tecnologías usadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/) — navegación entre vistas
- [Bootstrap 5](https://getbootstrap.com/) — diseño responsivo
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — tipografía
- [Rick and Morty API](https://rickandmortyapi.com/) — fuente de datos

---

## 📋 Funcionalidades

- ✅ Visualización de todos los personajes de la serie
- ✅ Filtrado de personajes por especie
- ✅ Navegación entre vistas con React Router
- ✅ Diseño responsivo (móvil, tablet y desktop)
- ✅ Estados de carga y manejo de errores
- ✅ Página 404 personalizada

---

## 📁 Estructura del proyecto

src/
├── components/
│ ├── Navbar.jsx # Menú de navegación principal
│ ├── CharacterCard.jsx # Tarjeta individual de personaje
│ └── CharacterGrid.jsx # Rejilla de tarjetas
├── pages/
│ ├── HomePage.jsx # Vista de todos los personajes
│ ├── FilterPage.jsx # Vista de filtrado por especie
│ └── ErrorPage.jsx # Página de error 404
├── services/
│ └── api.js # Lógica de consumo de la API
├── App.jsx # Configuración de rutas
├── main.jsx # Punto de entrada
└── index.css # Estilos globales

---

## ⚙️ Instalación y ejecución local

### 1. Clona el repositorio

```bash
git clone https://github.com/TU_USUARIO/rick-and-morty-app.git
```

### 2. Entra a la carpeta del proyecto

```bash
cd rick-and-morty-app
```

### 3. Instala las dependencias

```bash
npm install
```

### 4. Corre el servidor de desarrollo

```bash
npm run dev
```

### 5. Abre en el navegador

http://localhost:5173

---

## 🌐 Deploy

La aplicación está desplegada en Vercel:  
[Ver aplicación](#) <!-- Actualiza este link después del deploy -->

---

## 👨‍💻 Autor

Desarrollado como entregable académico consumiendo la
[Rick and Morty API](https://rickandmortyapi.com/).
