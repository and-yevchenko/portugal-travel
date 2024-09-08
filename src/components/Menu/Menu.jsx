import { AlignVerticalSpaceAround } from 'lucide-react'
import './Menu.css'
import { MENU_LINKS } from '../../content/__menu'
import { useState } from 'react'

export const Menu = () => {

    const MENU = MENU_LINKS

    const [isOpen, setIsOpen] = useState(true)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='menu'>
            <button className='menu__button' type='button' onClick={handleClick}>
                <AlignVerticalSpaceAround/>menu
            </button>
            {isOpen &&
                <ul className='menu__lis'>
                    {MENU.map((el) => (
                        <li key={el.id}><a href={el.link}>{el.name}</a></li>
                    ))}
                </ul>
            }
        </nav>
    )
}