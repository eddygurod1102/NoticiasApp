import Navbar from './navbar'
import './globals.css'

export const metadata = {
  title: 'NoticiasApp',
  description: 'Proyecto React usando Next.js',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  }
}

export default function ayout({ children }) {
  return (
    <html lang="es-MX">
      <body>
        <header>
          <Navbar className="w-auto"></Navbar>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
