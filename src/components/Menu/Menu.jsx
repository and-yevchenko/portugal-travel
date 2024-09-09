import { AlignVerticalSpaceAround } from 'lucide-react'
import './Menu.css'
import { MENU_LINKS } from '../../content/__menu'
import { useEffect, useRef, useState } from 'react'

export const Menu = ({ hookSmooth }) => {

    const MENU = MENU_LINKS

    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const ref = hookSmooth
    const onClickMenu = (e, mark) => {
        ref.runSmoothScroll(e, ref.refs[`${mark}`])
        setIsOpen(false)
    }

    const refMenu = useRef(null)
    const onClickOutside = (e) => {
         if (refMenu.current && !refMenu.current.contains(e.target)) {
            setIsOpen(false)
         }
    }
    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', onClickOutside);
        };
    }, []);

    return (
        <nav className='menu' ref={refMenu}>
            <button className='menu__button' type='button' onClick={handleClick}>
                <AlignVerticalSpaceAround/>menu
            </button>
            {isOpen &&
                <ul className='menu__list'>
                    {MENU.map((el) => (
                        <li key={el.id}>
                            <a href={el.link} onClick={(e) => onClickMenu(e, el.mark)}>{el.name}</a>
                        </li>
                    ))}
                </ul>
            }
        </nav>
    )
}