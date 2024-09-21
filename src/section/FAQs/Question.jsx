import { useState } from 'react';

export const Question = ({ el }) => {
    const [open, setOpen] = useState(false);
    const handleClick = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };

    return (
        <div className={`faqs__item${open ? ' --active' : ''}`}>
            <h3
                onClick={(e) => handleClick(e)}
                className={open ? '--active' : ''}
            >
                {el.question}
            </h3>
            <div>
                <p>{el.answer}</p>
            </div>
        </div>
    );
};
