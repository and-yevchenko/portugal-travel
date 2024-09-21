import { Star } from 'lucide-react';
import './Card.css';

export const Card = ({ card }) => {
    return (
        <div className="about__card card">
            <div className="card__photo">
                <img src={card.photo} alt="client" />
            </div>
            <div className="card__info">
                <span className="card__name">{card.name}</span>
                <span className="card__text">{card.text}</span>
                <div className="card__rating">
                    {[...Array(card.rating)].map((_, index) => (
                        <Star key={index} size={16} color="orange" />
                    ))}
                </div>
            </div>
        </div>
    );
};
