import style from './Header.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import lightsaber from '../../assets/purple-light-saber.gif'

export default function Header() {
    return (
        <>
            <header>
                <div className='d-flex align-items-center justify-content-center position-relative'>
                    <figure className='m-0 position-absolute start-0 top-50 translate-middle-y'>
                        <img src={lightsaber} className='img-fluid ps-3' alt="50" />
                    </figure>
                    <h1 className='display-2 text-light py-5'>Star Wars</h1>
                </div>
                <Navbar />
            </header>
        </>
    )
}