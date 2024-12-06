import style from './Header.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'

export default function Header() {
    return (
        <>
            <header className='bg-dark'>
                <div className='container-fluid'>
                    <h1 className='text-center text-light'>Questo è l'header tema Star Wars</h1>
                    <Navbar />
                </div>
            </header>
        </>
    )
}