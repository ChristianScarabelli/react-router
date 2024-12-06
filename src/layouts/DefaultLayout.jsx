import { Outlet } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

export default function DefaultLayout() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}