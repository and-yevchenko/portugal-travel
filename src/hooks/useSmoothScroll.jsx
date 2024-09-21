import { useRef } from 'react';

export const useSmoothScroll = () => {
    const refs = {
        home: useRef(null),
        tour: useRef(null),
        faqs: useRef(null),
        about: useRef(null),
        contact: useRef(null),
    };

    const runSmoothScroll = (e, ref) => {
        e.preventDefault();
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return {
        refs,
        runSmoothScroll,
    };
};
