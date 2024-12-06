import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li><NavLink to='/aboutus'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/postslist'>List</NavLink>
                </li>
            </ul>
        </nav>
    )
}