import { Textbox } from '../../components/Textbox/Textbox'
import { FAQS } from '../../content/__faqs'
import './FAQs.css'
import { Question } from './Question';

export const FAQs = () => {

    const CONTENT = FAQS;
    const QUESTIONS = CONTENT.QUESTIONS

    return (
        <section className='faqs'>
            <article className='faqs__text'>
                <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT}/>
            </article>
            <article className='faqs__questions'>
                {QUESTIONS.map((el) => (
                    <Question key={el.id} el={el}/>
                ))}
            </article>
        </section>
    )
}