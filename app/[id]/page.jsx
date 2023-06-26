import Link from "next/link";
import Eliminar from './editar/eliminar';

const getNoticia = async (id) => {
  const respuesta = await fetch(`http://localhost:3001/noticia/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application-json',
    },
    cache: 'no-store',
  });

  return respuesta.json();
};

export default async function Noticia({ params }) {

  const noticia = await getNoticia(params.id);
  return (
    <>
    <div className="w-10/12 mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl desktop-l:text-4xl">{noticia.titulo}</h1>
      <p className="text-justify my-3 md:text-lg desktop-l:text-xl">{noticia.cuerpo}</p>
      <div className="flex flex-row justify-evenly tablet:w-80 tablet:mx-auto">
        <Link 
          href={`/${noticia._id}/editar`}
          className="p-2 bg-sky-600 text-white rounded transition duration-300 
          ease-in-out hover:bg-sky-700 desktop-l:text-lg"
        >
          Editar noticia
        </Link>
        <Eliminar _id={params.id}/>
      </div>
    </div>
    </>
  )
};