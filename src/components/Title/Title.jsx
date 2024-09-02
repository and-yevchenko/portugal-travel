import { useEffect, useRef } from 'react';
import './Title.css'

export const Title = ({ children }) => {

    const title = useRef()
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 350 ?
                title.current.classList.add('_active')
            :
                title.current.classList.remove('_active')
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <h1 ref={title} className='title'>
            <span className='title__mini'>Travel with Horizon in</span>
            {children}
        </h1>
    )
}