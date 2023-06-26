'use client';

import { useRouter } from "next/navigation"; // Navegar entre rutas del proyecto.

// Función que agrega una noticia a la base de datos. Se utilizará como evento
// onClick para el botón del componente.
const agregarNoticia = async () => {
  // Recolección de los datos del formulario (el título y el cuerpo).
  const titulo = document.querySelector('#titulo');
  const cuerpo = document.querySelector('#cuerpo');

  // Creación de un objeto para luego después convertirlo a JSON.
  const noticia = {
    titulo: titulo.value,
    cuerpo: cuerpo.value,
  };

  // Con el método 'POST', enviamos a la ruta escrita el objeto.
  const res = await fetch('http://localhost:3001/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(noticia) // Conversión a JSON.
  });
};

export default function AgregarNoticia() {
  const router = useRouter();
  
  return (
    <>
      <form method="post">
          <label 
            htmlFor="titulo" 
            className="font-semibold ml-3 text-lg mb-2 tablet:text-xl desktop-l:text-2xl"
          >
            T&iacute;tulo
          </label>
          <br />
          <input
            type="text"
            name="titulo"
            id="titulo"
            className="w-11/12 ml-3 mb-2 border-2 border-gray-200 rounded tablet:text-lg
            desktop-l:text-xl"
          />
          <br />
          <label 
            htmlFor="cuerpo"
            className="font-semibold ml-3 text-lg mb-2 tablet:text-xl desktop-l:text-2xl"
          >
            Cuerpo</label>
          <br />
          <textarea
            name="cuerpo"
            id="cuerpo"
            cols="40"
            rows="10"
            className="w-11/12 ml-3 mb-2 border-2 border-gray-200 rounded tablet:text-lg desktop-l:text-xl"
          ></textarea>
      </form>
      <br />
      <button
        type="button" 
        onClick={ async () => {
          // Luego de que se agrega la noticia, el sitio redirige a la página
          // de inicio.
          await agregarNoticia().then(router.push('/'));
        } }
        className="text-center bg-sky-600 text-white transition ease-in-out duration-300
        hover:bg-sky-700 p-2 rounded ml-3 desktop-l:text-lg"
      >
        Agregar noticia
      </button>
    </>
  )
}