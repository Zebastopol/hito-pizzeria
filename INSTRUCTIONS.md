# Hito 4 - Pizzería Mamma Mía - Instrucciones de Ejecución

## Cambios Implementados

### 1. **Home.jsx - Consumo de API de Pizzas**
- ✅ Agregados imports de `useState` y `useEffect`
- ✅ Eliminada la importación de pizzas hardcodeadas
- ✅ Implementado fetch a `http://localhost:5000/api/pizzas`
- ✅ Estado inicializado correctamente con array vacío
- ✅ Las pizzas se cargan dinámicamente desde la API

### 2. **Pizza.jsx - Componente de Pizza Individual**
- ✅ Nuevo componente creado
- ✅ Consume API con endpoint `http://localhost:5000/api/pizzas/p001`
- ✅ Muestra toda la información de la pizza:
  - Nombre
  - Precio
  - Ingredientes
  - Imagen
  - Descripción
- ✅ Incluye estado de carga mientras se obtienen los datos

### 3. **App.jsx - Configuración de Componentes**
- ✅ Home component descomentado y activo
- ✅ Pizza component comentado (disponible para activar cuando sea necesario)

## Instrucciones para Ejecutar el Proyecto

### Paso 1: Levantar el Backend

1. Abrir una terminal y navegar a la carpeta del backend:
```bash
cd pizzeria-mamma-mia/pizza-backend
```

2. Instalar dependencias (si no están instaladas):
```bash
npm install
```

3. Iniciar el servidor backend:
```bash
npm run dev
```

El backend debería estar corriendo en: `http://localhost:5000`

### Paso 2: Levantar el Frontend

1. Abrir una **nueva terminal** y navegar a la carpeta del frontend:
```bash
cd pizzeria-mamma-mia
```

2. Instalar dependencias (si no están instaladas):
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

El frontend debería estar corriendo en: `http://localhost:5173` (o el puerto que indique Vite)

## Verificación de Funcionalidad

### Verificar Home Component (Lista de Pizzas)
1. Abrir el navegador en la URL del frontend
2. Deberías ver el Header y las tarjetas de pizzas
3. Las pizzas se cargan desde la API (verifica en la consola del navegador que no hay errores)
4. Deberías ver 6 pizzas diferentes con sus ingredientes y precios

### Verificar Pizza Component (Pizza Individual)
1. En `App.jsx`, comentar `<Home />` y descomentar `<Pizza />`
2. Guardar el archivo
3. El navegador debería mostrar la información detallada de la pizza "napolitana" (p001)
4. Verifica que se muestren:
   - Imagen grande de la pizza
   - Nombre: "napolitana"
   - Descripción completa
   - Lista de ingredientes con badges
   - Precio: $5.950

## Endpoints de la API Utilizados

- **GET** `http://localhost:5000/api/pizzas` - Obtiene todas las pizzas
- **GET** `http://localhost:5000/api/pizzas/p001` - Obtiene una pizza específica por ID

## Estructura de Datos de Pizza

```json
{
  "id": "p001",
  "name": "napolitana",
  "price": 5950,
  "ingredients": ["mozzarella", "tomates", "jamón", "orégano"],
  "img": "https://...",
  "desc": "La pizza napolitana, de masa tierna..."
}
```

## Notas Importantes

- Asegúrate de que el backend esté corriendo **antes** de iniciar el frontend
- Si cambias entre componentes Home y Pizza, guarda el archivo App.jsx para ver los cambios
- Verifica la consola del navegador para cualquier error de red o CORS
- El backend usa CORS habilitado, por lo que no deberías tener problemas de conexión

## Troubleshooting

### Error: "Failed to fetch"
- Verifica que el backend esté corriendo en el puerto 5000
- Revisa que la URL de la API sea correcta

### No se muestran las pizzas
- Abre la consola del navegador (F12)
- Verifica que no haya errores de JavaScript
- Confirma que el backend esté respondiendo correctamente

### El componente Pizza no muestra datos
- Verifica que el ID "p001" exista en el archivo `pizza-backend/db/pizzas.json`
- Revisa la consola para errores de red
