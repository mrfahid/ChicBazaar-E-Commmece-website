import { Outlet } from 'react-router-dom';
import {Navbar, Footer} from './components'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout