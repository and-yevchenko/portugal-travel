import { Mail } from 'lucide-react'
import { Logo } from '../../Logo/Logo'
import './Header.css'
import { Menu } from '../../Menu/Menu'

export const Header = ({ children }) => {

    return (
        <header className='header'>
            <div className='header__panel'>
                <a href="http://localhost:5173/"><Logo /></a>
                <Menu />
                <a className='link-send' href=""><span>start the journey</span><Mail /></a>
            </div>
            {children}
        </header>
    )
}
