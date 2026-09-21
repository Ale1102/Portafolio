import { supabase } from '@/app/utils/supabase';
import Link from 'next/link';

export default async function CategoriaPage({ params }) {
  const { categoria_slug } = await params;
  
  const { data: proyectos } = await supabase
    .from('proyectos')
    .select('*')
    .eq('categoria_slug', categoria_slug);

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-500 dark:text-blue-400 mb-6 inline-block hover:underline">&larr; Volver al inicio</Link>
      <h1 className="text-3xl font-bold mb-8 capitalize text-gray-900 dark:text-gray-100">Categoría: {categoria_slug.replace('-', ' ')}</h1>
      
      {proyectos?.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No hay proyectos en esta categoría.</p>
      ) : (
        <div className="grid gap-4">
          {proyectos?.map((proyecto) => (
            <div key={proyecto.id} className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{proyecto.titulo}</h2>
              <Link href={`/proyectos/${proyecto.slug}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Ver Proyecto
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}