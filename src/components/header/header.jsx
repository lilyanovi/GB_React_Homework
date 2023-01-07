import style from './header.module.css'
import { Outlet, Link } from 'react-router-dom'

const navigate = [
    {
        id: 1,
        name: 'Main',
        to: '/'
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile'
    },
    {
        id: 3,
        name: 'Chat',
        to: '/chat'
    },
    {
        id: 4,
        name: 'About',
        to: '/about'
    }
]

export function Header () {
    return (
    <>
        <header>
            <nav className={style.header}>
            <ul>
                {navigate.map((link)=>(
                    <li key={link.id}>
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>
    )
}