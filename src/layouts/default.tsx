import { Navbar } from "@/components/navbar"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { pathname } = useLocation()
  console.log(pathname)
  useEffect(() => {
    if (pathname !== "/") {
      document.title = `${pathname[1].toUpperCase() + pathname.slice(2)} | Ion Restoration`
    } else {
      document.title = "Home | Ion Restoration"
    }
  }, [pathname])
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        {/* Slogan or smth */}
      </footer>
    </div>
  )
}
