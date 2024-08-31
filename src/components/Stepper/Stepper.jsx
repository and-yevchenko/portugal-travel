import { TRAVEL_PLAN } from '../../content/__travel-plan'
import './Stepper.css'

export const Stepper = () => {
    
    const steps = TRAVEL_PLAN.ITINERARY;

    return (
        <div className='stepper'>
            {steps.map((step, i) => (
                <div className='stepper__item' key={i}>
                    <div></div>
                    <p>{step}</p>
                </div>
            ))}
        </div>
    )
}
