import { Logo } from '../../Logo/Logo'
import './Footer.css'

export const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer__up'>
                <div className='footer__company'>
                    <a className='footer__name' href="#">Horizon</a>
                    <div className='footer__contacts'>
                        <span>Address:</span>
                        <span>Phone:</span>
                        <span>Email:</span>
                    </div>
                </div>
                <div className='footer__links'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Booking and Cancellation Policy</a>
                    <div className='footer__social'>
                        <a href="#" title='Facebook'></a>
                        <a href="#" title='Instagram'></a>
                        <a href="#" title='X'></a>
                        <a href="#" title='LinkedIn'></a>
                    </div>
                </div>
                <div className='footer__logo'>
                    <Logo />
                </div>
            </div>
            <div className='footer__down'>
                <p>© 2024 Horizon. <a href="https://github.com/and-yevchenko" target='_blank'>and-yevchenko</a>. All rights reserved.</p>
            </div>
        </footer>
    )
}