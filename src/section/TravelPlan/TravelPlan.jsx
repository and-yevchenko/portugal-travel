import { Stepper } from '../../components/Stepper/Stepper';
import { Textbox } from '../../components/Textbox/Textbox'
import { TRAVEL_PLAN } from '../../content/__travel-plan';
import './TravelPlan.css'

export const TravelPlan = () => {

    const content = TRAVEL_PLAN;

    return (
        <section className='travel-plan'>
            <article className='travel-plan__text'>
                <Textbox title={content.TITLE} text={content.TEXT}/>
            </article>
            <article className='travel-plan__content'>
                <div className='travel-plan__itinerary'>
                    <Stepper />
                </div>
                <div className='travel-plan__map'>
                    <img src="../../public/travel-plan/portugal-map.svg" alt="" />
                </div>
            </article>
        </section>
    )
}