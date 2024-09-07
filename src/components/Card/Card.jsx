import './Card.css'

export const Card = ({ el }) => {

    return (
        <div className='about__card card' key={el.id}>
            <div className='card__photo'><img src={el.photo} alt="client" /></div>
            <div className='card__info'>
                <span className='card__name'>{el.name}</span>
                <span className='card__text'>{el.text}</span>
                <div className='card__rating'>{el.rating}</div>
            </div>
        </div>
    )
}