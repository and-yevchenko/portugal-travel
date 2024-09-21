import { useEffect, useRef } from 'react';
import { Textbox } from '../../components/Textbox/Textbox';
import { ABOUT } from '../../content/__about';
import './About.css';
import { Card } from '../../components/Card/Card';

export const About = ({ about }) => {
    const CONTENT = ABOUT;
    const CARDS = CONTENT.FEEDBACK;

    const clients = useRef();
    useEffect(() => {
        const interval = setInterval(() => {
            const lastCard = clients.current.lastChild;
            clients.current.prepend(lastCard);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="about" id="about" ref={about}>
            <div className="about__container">
                <article className="about__info">
                    <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT} />
                </article>
                <article className="about__feedback">
                    <div className="about__text">
                        <h3>Our Customers&apos; Testimonials</h3>
                    </div>
                    <div className="about__clients" ref={clients}>
                        {CARDS.map((card) => (
                            <Card key={card.id} card={card} />
                        ))}
                    </div>
                </article>
            </div>
        </section>
    );
};
