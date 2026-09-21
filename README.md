# Portafolio de Proyectos - Next.js & Supabase

## Descripción del Proyecto
Esta es una landing page dinámica construida para mostrar un portafolio profesional. Utiliza Next.js (App Router) para el renderizado del servidor y Supabase como backend serverless para la persistencia de datos. Incluye manejo de rutas dinámicas, soporte automático para modo oscuro/claro y conexión segura mediante políticas RLS (Row Level Security).

## Instrucciones de Instalación Local
1. Clona este repositorio: `git clone <tu-url-del-repositorio>`
2. Navega a la carpeta del proyecto: `cd portafolio-evaluacion`
3. Instala las dependencias: `npm install`
4. Configura las variables de entorno (ver sección abajo).
5. Ejecuta el servidor de desarrollo: `npm run dev`
6. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Variables de Entorno Necesarias
Para correr este proyecto necesitas crear un archivo `.env.local` en la raíz con las siguientes variables apuntando a tu proyecto de Supabase. **No expongas credenciales reales aquí**.

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase_aqui
\`\`\`
