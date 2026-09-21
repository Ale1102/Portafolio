import { supabase } from '@/app/utils/supabase';
import Link from 'next/link';

export default async function ProyectoPage({ params }) {
  const { slug } = await params;
  
  const { data: proyecto } = await supabase
    .from('proyectos')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!proyecto) return <div className="p-10 text-center text-xl dark:text-gray-200">Proyecto no encontrado</div>;

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <Link href="/" className="text-blue-500 dark:text-blue-400 mb-6 inline-block hover:underline">&larr; Volver al inicio</Link>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{proyecto.titulo}</h1>
      <Link href={`/categorias/${proyecto.categoria_slug}`}>
        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mt-4 inline-block hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer">
          {proyecto.categoria_slug}
        </span>
      </Link>
      <div className="mt-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <p>{proyecto.descripcion}</p>
      </div>
    </main>
  );
}