'use client';

import { useRouter } from "next/navigation";

const eliminarNoticia = async (id) => {
  const bandera = confirm('¿Estás seguro de que quieres eliminar esta noticia?');

  if (bandera) {
    const respuesta = await fetch(`http://localhost:3001/noticia/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
};

export default function Eliminar({_id}) {
  const router = useRouter();

  return (
    <button onClick={async () => {
      await eliminarNoticia(_id).then(router.push('/'));
    }} 
    className="p-2 bg-red-600 text-white rounded transition duration-300 ease-in-out 
    hover:bg-red-700 desktop-l:text-lg"
    >
    Eliminar noticia
  </button>
  )
}