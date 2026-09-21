import { supabase } from './utils/supabase';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; 

export default async function Home() {
  const { data: proyectos } = await supabase.from('proyectos').select('*');

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Portafolio de Proyectos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {proyectos?.map((proyecto) => (
          <div 
            key={proyecto.id} 
            // Aquí está la magia del modo oscuro en la tarjeta:
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{proyecto.titulo}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{proyecto.descripcion}</p>
            <div className="flex gap-4">
              <Link href={`/proyectos/${proyecto.slug}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Ver Detalles &rarr;
              </Link>
              <Link href={`/categorias/${proyecto.categoria_slug}`} className="text-green-600 dark:text-green-400 font-medium hover:underline">
                Ver Categoría
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}