import style from './Header.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'

export default function Header() {
    return (
        <>
            <header className='bg-dark py-2'>
                <div className='container-fluid'>
                    <h1 className='display-2 text-center text-light'>Star Wars</h1>
                    <Navbar />
                </div>
            </header>
        </>
    )
}