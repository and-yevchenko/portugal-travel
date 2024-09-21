import { Textbox } from '../../components/Textbox/Textbox';
import { FAQS } from '../../content/__faqs';
import './FAQs.css';
import { Question } from './Question';

export const FAQs = ({ faqs }) => {
    const CONTENT = FAQS;
    const QUESTIONS = CONTENT.QUESTIONS;

    return (
        <section className="faqs" id="faqs" ref={faqs}>
            <div className="faqs__container">
                <article className="faqs__text">
                    <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT} />
                </article>
                <article className="faqs__questions">
                    {QUESTIONS.map((el) => (
                        <Question key={el.id} el={el} />
                    ))}
                </article>
            </div>
        </section>
    );
};
