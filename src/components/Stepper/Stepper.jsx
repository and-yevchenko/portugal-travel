import { TRAVEL_PLAN } from '../../content/__travel-plan';
import './Stepper.css';

export const Stepper = ({ currentStep, setCurrentStep }) => {
    const steps = TRAVEL_PLAN.ITINERARY;

    return (
        <div className="stepper">
            {steps.map((step, i) => (
                <div
                    className={`stepper__item${currentStep >= i + 1 ? ' --active' : ''}`}
                    key={i}
                >
                    <button
                        onClick={() => setCurrentStep(i + 1)}
                        type="button"
                        id={`button-${i}`}
                    ></button>
                    <label htmlFor={`button-${i}`}>{step}</label>
                </div>
            ))}
        </div>
    );
};
