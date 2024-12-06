import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

// isActive non va scritto come prop di navbar perchè non viene passato direttamente al componente, ma viene gestito e conosciuto internamente solo da NavLink
// is Active è un oggetto passato a classname come callback, con operatori condizionali per gestire le 2 classi
// is Active è un oggetto con proprietà booleana, quindi se è true è active
export default function Navbar() {
    return (
        <nav>
            <ul className='d-flex align-items-center justify-content-start gap-3 nav nav-underline py-2 ps-2'>
                <li className='nav-item'>
                    <NavLink className={({ isActive }) =>
                        isActive ? `text-warning fs-4 nav-link` : 'fs-4 nav-link'} to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={({ isActive }) =>
                        isActive ? `text-warning fs-4 nav-link` : 'fs-4 nav-link'} to='/aboutus'>About Us</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className={({ isActive }) =>
                        isActive ? `text-warning fs-4 nav-link` : 'fs-4 nav-link'} to='/postslist'>List</NavLink>
                </li>
            </ul>
        </nav >
    )
}