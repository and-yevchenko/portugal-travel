import { useEffect, useRef, useState } from 'react'
import './Parallax.css'
import { Mouse } from 'lucide-react'
import { Title } from '../Title/Title'

export const Parallax = () => {

    const [scrollValue, setScrollValue] = useState(window.scrollY)
    const parallax = useRef()

    useEffect(() => {
      const handleScroll = () => {
        parallax.current.style.cssText = `--scrollTop: ${window.scrollY}px`
        setScrollValue(window.scrollY)
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
        <div className='parallax' ref={parallax}>
          <div className='parallax__title'>
            <Title scrollValue={scrollValue}>
              <span className='title__mini'>Travel with Horizon in</span>
              Portugal
            </Title>
          </div>
          <div className='parallax__full'></div>
          <div className='parallax__back'></div>
          <div className='parallax__middle'></div>
          <div className='parallax__front'></div>
          <a href='#' className={`parallax__scroll${scrollValue > 300 ? ' --opacity' : ''}`}><Mouse /></a>
        </div>
    )
}