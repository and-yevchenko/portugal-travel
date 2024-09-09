import { Mail } from 'lucide-react'
import { Logo } from '../../Logo/Logo'
import './Header.css'
import { Menu } from '../../Menu/Menu'

export const Header = ({ children, hookSmooth }) => {

    const ref = hookSmooth.refs.home

    return (
        <header className='header' id='home' ref={ref}>
            <div className='header__panel'>
                <a href="/"><Logo /></a>
                <Menu hookSmooth={hookSmooth}/>
                <a className='link-send' href=""><span>start the journey</span><Mail /></a>
            </div>
            {children}
        </header>
    )
}
