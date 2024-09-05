import { Textbox } from '../../components/Textbox/Textbox'
import { CONTACT_US } from '../../content/__contact-us'
import './ContactUs.css'

export const ContactUs = () => {

    const CONTENT = CONTACT_US

    return (
        <section className='contact-us'>
            <article className='contacts-us__text'>
                <Textbox title={CONTENT.TITLE} text={CONTENT.TEXT}/>
            </article>
            <form className='form'>
                <input type="email" />
                <input type="text" />
                <input type="textarea" />
            </form>
        </section>
    )
}