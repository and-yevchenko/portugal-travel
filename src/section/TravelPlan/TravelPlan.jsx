import { useState } from 'react';
import { Stepper } from '../../components/Stepper/Stepper';
import { Textbox } from '../../components/Textbox/Textbox';
import { TRAVEL_PLAN } from '../../content/__travel-plan';
import { MapPortugal } from './MapPortugal';
import './TravelPlan.css';

export const TravelPlan = () => {
    const content = TRAVEL_PLAN;
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <section className="travel-plan">
            <div className="travel-plan__container">
                <article className="travel-plan__text">
                    <Textbox title={content.TITLE} text={content.TEXT} />
                </article>
                <article className="travel-plan__content">
                    <div className="travel-plan__background"></div>
                    <div className="travel-plan__itinerary">
                        <Stepper
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    </div>
                    <div className="travel-plan__map">
                        <MapPortugal currentStep={currentStep} />
                    </div>
                </article>
            </div>
        </section>
    );
};
