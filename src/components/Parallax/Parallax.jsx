import { useEffect } from 'react'
import './Parallax.css'

export const Parallax = ({ children }) => {

    useEffect(() => {
      const handleScroll = () => {
        document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
      }
      window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='parallax'>
          <div className='parallax__title'>
            {children}
          </div>
          <div className='parallax__full'></div>
          <div className='parallax__back'></div>
          <div className='parallax__middle'></div>
          <div className='parallax__front'></div>
        </div>
    )
}