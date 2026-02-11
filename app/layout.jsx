import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Online Quiz & Assessment Platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-4 py-6">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
}
