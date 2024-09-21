import './Textbox.css';

export const Textbox = ({ title, text }) => {
    return (
        <div className="textbox">
            <h2 className="textbox__title">{title}</h2>
            <p className="textbox__text">{text}</p>
        </div>
    );
};
