import { useEffect, useRef, useState } from 'react';

export const useMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const refMenu = useRef(null);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleCloseMenu = () => {
        setIsOpen(false);
    };
    const handleClickOutside = (e) => {
        if (refMenu.current && !refMenu.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return {
        isOpen,
        refMenu,
        handleMenu,
        handleCloseMenu,
    };
};
