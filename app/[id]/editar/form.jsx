'use client';

import { useRouter } from "next/navigation"; // Navegar entre rutas del proyecto.

// Función que actualiza la información de una noticia. Se utilizará como evento
// onClick para el botón del componente.
const editarNoticia = async (noticia) => {
  // Recolección de los datos del formulario (el título y el cuerpo).
  const titulo = document.querySelector('#titulo');
  const cuerpo = document.querySelector('#cuerpo');

  // Creación de un objeto para luego después convertirlo a JSON.
  const documento = {
    _id: noticia._id,
    titulo: titulo.value,
    cuerpo: cuerpo.value,
  };

  // Con el método 'PUT', enviamos a la ruta escrita el objeto.
  const respuesta = await fetch('http://localhost:3001/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(documento), // Conversión a JSON.
  });
};

export default function EditarNoticia({ noticia }) {

  const router = useRouter();

  return (
    <>
    <div className="mx-auto">
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
          defaultValue={noticia.titulo}
          className="w-11/12 ml-3 mb-2 border-2 border-gray-200 rounded tablet:text-lg
          desktop-l:text-xl"
        />
        <br />
        <label 
          htmlFor="cuerpo" 
          className="font-semibold ml-3 text-lg mb-2 tablet:text-xl desktop-l:text-2xl"
        >
          Cuerpo
        </label>
        <br />
        <textarea
          name="cuerpo"
          id="cuerpo"
          cols="40"
          rows="10"
          defaultValue={noticia.cuerpo}
          className="w-11/12 ml-3 mb-2 border-2 border-gray-200 rounded tablet:text-lg desktop-l:text-xl"
        ></textarea>
      </form>
      <button
        type="button"
        onClick = { async () => {
          // Luego de que se actualiza la información de la noticia, el sitio
          // redirige a la página de inicio.
          await editarNoticia(noticia).then(router.push(`/`));
        } }
        className="text-center bg-sky-600 text-white transition duration-300 ease-in-out hover:bg-sky-700 p-2 rounded ml-3"
      >
        Editar noticia
      </button>
    </div>
      </>
    )
}