import { Mail } from 'lucide-react'
import { Logo } from '../../Logo/Logo'
import './Header.css'

export const Header = ({ children }) => {

    return (
        <header className='header'>
            <div className='header__panel'>
                <a href="http://localhost:5173/"><Logo /></a>
                <a className='link-send' href=""><span>start the journey</span><Mail /></a>
            </div>
            {children}
        </header>
    )
}
