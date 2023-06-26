import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly content-center bg-blue-950 h-12 mb-2">
      <div className="flex flex-row justify-around">
        <Link
          href="/"
          className="w-24 text-center text-base text-white transition 
          ease-in-out duration-300 hover:bg-blue-900 py-3 tablet:text-lg
          desktop-l:text-xl desktop-l:w-32 desktop-l:py-2.5"
        >
          Inicio
        </Link>
        <Link
          href="/acerca_de"
          className="w-24 text-center text-base text-white transition ease-in-out
          duration-300 hover:bg-blue-900 py-3 tablet:text-lg desktop-l:text-xl desktop-l:w-32 desktop-l:py-2.5"
        >
          Acerca de
        </Link>
      </div>
    </nav>
  )
}