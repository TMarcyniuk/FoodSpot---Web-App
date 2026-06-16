# FoodSpot

Aplicación web para descubrir restaurantes cercanos, comparar precios y acceder a descuentos exclusivos.

> Proyecto escolar — Instituto Luis A. Huergo

---
(Para descargar el código hacer click sobre el botón verde llamada "código" y descargar como ZIP)

## Nota Importante

El proyecto todavía no está terminado, y muchas de las funciones relacionadas con el backend todavía no funcionan. Ejemplos de estos son las recomendaciones en la páginca de inicio, el crear una cuenta/iniciar sesión y botones relacionados con el mapa (filtros de búsqueda, buscar por tipo de comida, recomendados)

---

## Cómo correr el proyecto localmente

### 1. Instalar Node.js

Descargá e instalá Node.js desde la página oficial:

[https://nodejs.org](https://nodejs.org)

> Recomendamos la versión **LTS**. La instalación de Node.js incluye `npm` automáticamente.

Para verificar que se instaló correctamente, abrí una terminal y ejecutá:

```bash
node -v
npm -v
```

Deberías ver los números de versión de cada uno.

---

### 2. Clonar el repositorio

Si todavía no tenés el proyecto, cloná el repositorio con:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

---

### 3. Instalar las dependencias

Dentro de la carpeta del proyecto, ejecutá:

```bash
npm install
```

Esto descarga todo lo necesario para correr el proyecto.

---

### 4. Iniciar el servidor de desarrollo. Tené en cuenta estar posicionado dentro de la carpeta "FoodSpot"

```bash
npm run dev
```

---

### 5. Abrir la aplicación

Una vez iniciado, la terminal va a mostrar algo así:

```
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abrí tu navegador y entrá a:

**http://localhost:5173/**

> Si el puerto `5173` está ocupado, Vite va a asignar otro automáticamente. Usá el link que aparezca en tu terminal.
