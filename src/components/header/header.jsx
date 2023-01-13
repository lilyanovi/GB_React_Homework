import { Outlet, Link, NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logOut } from '../../services/firebase'

import style from './header.module.css'

const navigates = [
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
    },
    {
        id: 5,
        name: 'Articles',
        to: '/articles'
    }
]

export function Header () {
    
    const navigate = useNavigate()

    const name = useSelector((store) => store.profile.name)
    const isAuth = useSelector((store) => store.profile.isAuth)
  
    const handleLogin = () => {
      navigate('/signin')
    }
    const handleSignUp = () => {
      navigate('/signup')
    }
    const handleLogout = async () => {
      await logOut()
    }
  
    
    
    return (
    <>
        <header>
            <nav className={style.header}>
            <ul>
                {navigates.map((link)=>(
                    <li key={link.id}>
                        <Link to={link.to}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            {!isAuth && (
              <>
                <button onClick={handleLogin}>login</button>
                <button onClick={handleSignUp}>sing up</button>
              </>
            )}
            {isAuth && (
              <>
                <button onClick={handleLogout}>logout</button>
              </>
            )}
        </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>
    )
}