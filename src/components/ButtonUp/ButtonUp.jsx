import { ArrowBigUpDash } from 'lucide-react';
import './ButtonUp.css';

export const ButtonUp = ({ hookSmooth }) => {
    const ref = hookSmooth;

    return (
        <a
            className="link-up"
            href="#home"
            onClick={(e) => ref.runSmoothScroll(e, ref.refs.home)}
        >
            <ArrowBigUpDash />
        </a>
    );
};
