import { Outlet } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}