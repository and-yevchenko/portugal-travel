import { AlignVerticalSpaceAround } from 'lucide-react'
import './Menu.css'
import { MENU_LINKS } from '../../content/__menu'
import { useMenu } from '../../hooks/useMenu'

export const Menu = ({ hookSmooth }) => {

    const MENU = MENU_LINKS

    const hookMenu = useMenu()
    // const [isOpen, setIsOpen] = useState(false)
    // const handleClick = () => {
    //     setIsOpen(!isOpen)
    // }

    const ref = hookSmooth
    const handleClickLink = (e, mark) => {
        ref.runSmoothScroll(e, ref.refs[`${mark}`])
        hookMenu.handleCloseMenu
    }

    // const refMenu = useRef(null)
    // const onClickOutside = (e) => {
    //      if (refMenu.current && !refMenu.current.contains(e.target)) {
    //         setIsOpen(false)
    //      }
    // }
    // useEffect(() => {
    //     document.addEventListener('mousedown', onClickOutside);
        
    //     return () => {
    //       document.removeEventListener('mousedown', onClickOutside);
    //     };
    // }, []);

    return (
        <nav className='menu' ref={hookMenu.refMenu}>
            <button className='menu__button' type='button' onClick={hookMenu.handleMenu}>
                <AlignVerticalSpaceAround/>menu
            </button>
            {hookMenu.isOpen &&
                <ul className='menu__list'>
                    {MENU.map((el) => (
                        <li key={el.id}>
                            <a href={el.link} onClick={(e) => handleClickLink(e, el.mark)}>{el.name}</a>
                        </li>
                    ))}
                </ul>
            }
        </nav>
    )
}