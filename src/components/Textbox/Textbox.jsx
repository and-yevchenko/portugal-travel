import './Textbox.css'

export const Textbox = ({ title, text, background }) => {

    return (
        <div className='textbox' style={background && {backgroundColor: `${background}`}}>
            <h2 className='textbox__title'>{title}</h2>
            <p className='textbox__text'>{text}</p>
        </div>
    )
}
