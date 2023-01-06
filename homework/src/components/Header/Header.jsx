import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { Button } from '../UI/Button/Button'
import { logOut } from '../../services/firebase'

export const navigates = [
    {
        id: 1,
        name: 'Main',
        to: '/',
    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile',
    },
    {
        id: 3,
        name: 'Chat',
        to: '/chats',
    },
    {
        id: 4,
        name: 'Articles',
        to: '/articles',
    },
    // {
    //     id: 5,
    //     name: 'SignIn',
    //     to: '/signin',
    // },
    // {
    //     id: 6,
    //     name: 'SignUp',
    //     to: '/signup',
    // },
]

export function Header() {

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

    return (<>
        <header>
            <nav className={styles.nav}>
                <ul>
                    {navigates.map((link) => (
                        <li key={link.id}>
                            <NavLink to={link.to}
                                style={({ isActive }) => ({
                                    color: isActive ? '#b5290ad4' : '#D9AA8F'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {!isAuth && (
                    <>
                        <Button onClick={handleLogin}>login</Button>
                        <Button onClick={handleSignUp}>sign in</Button>
                    </>
                )}
                {isAuth && (
                    <Button onClick={handleLogout}>logout</Button>
                )}
                <p>{name}</p>
            </nav>
        </header>
        <main>
            <Outlet />  {/*  вставляет те компоненты(страницы), кот-е прописаны в конкретном роуте */}
        </main>
    </>

    )
}