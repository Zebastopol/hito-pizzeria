# 🍕 Pizzería Mamma Mía

Proyecto de una pizzería desarrollado con React + Vite y Bootstrap.

## 📋 Descripción

Aplicación web para una pizzería que muestra un catálogo de pizzas con sus ingredientes y precios. Incluye navegación, header con imagen de fondo y footer.

## 🚀 Tecnologías Utilizadas

- React 18.2.0
- Vite 4.4.5
- Bootstrap 5.3.0
- JavaScript (ES6+)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <https://github.com/Zebastopol/hito-pizzeria.git>
```

2. Navega a la carpeta del proyecto:
```bash
cd pizzeria-mamma-mia
```

3. Instala las dependencias:
```bash
npm install
```

## 🎯 Uso

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Para crear el build de producción:
```bash
npm run build
```

Para previsualizar el build:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
pizzeria-mamma-mia/
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── CardPizza.jsx
│   │   ├── Home.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── format.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Características

- ✅ Navbar con renderizado condicional según estado de autenticación
- ✅ Header con imagen de fondo
- ✅ Catálogo de pizzas con cards responsivas
- ✅ Formateo de precios en pesos chilenos (CLP)
- ✅ Diseño responsive con Bootstrap
- ✅ Tema oscuro

## 📝 Licencia

© 2024 - Pizzería Mamma Mia! - Todos los derechos reservados
