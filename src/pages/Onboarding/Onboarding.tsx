import "./Onboarding.scss";
import { MultiStepForm } from "../../components";
import { formData } from "../../data/formData";

const Onboarding = () => {
    return (
        <div className="onboarding-container">
            <div className="brand">
                <img src="favicon.png" alt="" />
                <h2>Eden</h2>
            </div>
            <MultiStepForm formData={formData} />
        </div>
    )
}

export default Onboarding