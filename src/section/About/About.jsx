import { Textbox } from '../../components/Textbox/Textbox'
import { ABOUT } from '../../content/__about'
import './About.css'

export const About = () => {

    const CONTENT = ABOUT;
    const CARDS = CONTENT.FEEDBACK

    return (
        <section className='about'>
            <article className='about__info'>
                <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT}/>
            </article>
            <article className='about__feedback'>
                <div className='about__text'><h3>Our Customers&apos; Testimonials</h3></div>
                <div className='about__clients'>
                    {CARDS.map((el) => (
                        <div className='about__card card' key={el.id}>
                            <div className='card__photo'><img src={el.photo} alt="client" /></div>
                            <span className='card__name'>{el.name}</span>
                            <span className='card__text'>{el.text}</span>
                            <div className='card__rating'>{el.rating}</div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}