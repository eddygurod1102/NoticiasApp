import EditarNoticia from './form'

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

export const metadata = {
  title: 'Noticia | NoticiasApp',
}

export default async function Formulario({ params }) {
  const noticia = await getNoticia(params.id);
  
  return <EditarNoticia noticia={noticia} />
}