import { useState } from 'react';
import { Textbox } from '../../components/Textbox/Textbox';
import { CONTACT_US } from '../../content/__contact-us';
import './ContactUs.css';

export const ContactUs = ({ contact }) => {
    const CONTENT = CONTACT_US;

    const [showNotValid, setShowNotValid] = useState(false);

    return (
        <section className="contact-us" id="contact" ref={contact}>
            <div className="contact-us__container">
                <article className="contacts-us__text">
                    <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT} />
                </article>
                <form className="form">
                    <div className="form__content">
                        <div>
                            <input
                                className={`form__email${showNotValid ? ' --show' : ''}`}
                                id="email"
                                type="text"
                                required
                                spellCheck="false"
                            />
                            <label className="form__label" htmlFor="email">
                                Enter your email
                            </label>
                        </div>
                        <div>
                            <input
                                className={`form__name${showNotValid ? ' --show' : ''}`}
                                id="name"
                                type="text"
                                required
                                spellCheck="false"
                            />
                            <label className="form__label" htmlFor="name">
                                Enter your name
                            </label>
                        </div>
                        <div>
                            <textarea
                                className={`form__textarea${showNotValid ? ' --show' : ''}`}
                                id="text"
                                type="textarea"
                                maxLength={5000}
                                required
                                spellCheck="false"
                            />
                            <label className="form__label" htmlFor="text">
                                Enter your text
                            </label>
                        </div>
                        <button
                            className="form__button"
                            type="submit"
                            onClick={() => setShowNotValid(true)}
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
