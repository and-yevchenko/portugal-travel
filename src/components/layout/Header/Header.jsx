import { Mail } from 'lucide-react';
import { Logo } from '../../Logo/Logo';
import './Header.css';
import { Menu } from '../../Menu/Menu';

export const Header = ({ children, hookSmooth }) => {
    const ref = hookSmooth;

    return (
        <header className="header" id="home" ref={ref.refs.home}>
            <div className="header__container">
                <div className="header__panel">
                    <a href="./">
                        <Logo />
                    </a>
                    <Menu hookSmooth={hookSmooth} />
                    <a
                        className="link-send"
                        href="#contact"
                        onClick={(e) =>
                            ref.runSmoothScroll(e, ref.refs.contact)
                        }
                    >
                        <span>start the journey</span>
                        <Mail />
                    </a>
                </div>
            </div>
            {children}
        </header>
    );
};
