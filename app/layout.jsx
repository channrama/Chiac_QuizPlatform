import './globals.css'
import PremiumNav from '../components/PremiumNav'
import Sidebar from '../components/Sidebar'

export const metadata = {
  title: 'QuizAI - Advanced Quiz & Assessment Platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(99, 102, 241, 0.5);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(99, 102, 241, 0.7);
          }
        `}</style>
      </head>
      <body className="bg-dark-900 text-white">
        <PremiumNav />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 md:ml-80 pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
