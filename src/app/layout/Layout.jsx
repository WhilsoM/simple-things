import { Footer } from '@widgets/footer/Footer'
import { Header } from '@widgets/header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
    <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
