import { useState } from 'react';
import { TRAVEL_PLAN } from '../../content/__travel-plan'
import './Stepper.css'

export const Stepper = () => {
    
    const steps = TRAVEL_PLAN.ITINERARY;
    const [currentStep, setCurrentStep] = useState(1)

    return (
        <div className='stepper'>
            {steps.map((step, i) => (
                <div className={`stepper__item ${currentStep >= i + 1 && '--active'}`} 
                     key={i}
                >
                    <button onClick={() => setCurrentStep(i + 1)} type='button'></button>
                    <p>{step}</p>
                </div>
            ))}
        </div>
    )
}
