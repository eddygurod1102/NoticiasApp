import Link from 'next/link'

const getNoticias = async () => {
  const res = await fetch('http://localhost:3001/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  return res.json();
};

export default async function Home() {
  const noticias = await getNoticias();

  return (
    <>
    <div className="flex flex-col justify-items-center">
        <Link
          href="/nueva_noticia"
          className="rounded-full bg-green-600 text-white text-center py-2.5 text-base 
          w-48 mx-auto my-1 transition ease-in-out duration-300 hover:bg-green-700
          tablet:text-lg tablet:px-2.5 tablet:w-56 desktop-l:text-xl desktop-l:w-64
          desktop-l:py-1.5"
        >
          + Agregar una noticia
        </Link>
      <div className="flex flex-col flex-wrap justify-items-center tablet:flex-row desktop-l:flex-row">
        {noticias.map((noticia) => (
          <div 
            className="border-2 border-black mobile-s:w-72 mobile-m:w-80 h-72 mx-auto mt-3 mb-3 flex flex-col 
            justify-evenly tablet:text-lg desktop-l:text-xl"
          >
            <h3 className="font-bold text-center">{noticia.titulo}</h3>
            <div className="flex flex-row justify-center">
              <Link 
                href={`/${noticia._id}`}
                className="text-center p-1 bg-sky-700 rounded text-white transition delay-100 hover:bg-sky-800"
              >
                M&aacute;s detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
