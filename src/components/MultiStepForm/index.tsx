import InputScreen from "./InputScreen";
import SelectionScreen from "./SelectionScreen";
import Success from "./Success";
import { useAppSelector } from "../../redux/customHooks";
import "./MultiStepForm.scss";

const MultiStepForm: React.FC<MultiStepFormProps> = ({ formData }) => {
    const multiStepForm = useAppSelector(state => state.multiStepForm),
        renderForm = () => {
            if (parseInt(multiStepForm.step) === formData.length)
                return <Success />;
            switch (formData[parseInt(multiStepForm.step)].type) {
                case 'input':
                    return <InputScreen {...formData[parseInt(multiStepForm.step)]} />
                case 'selector':
                    return <SelectionScreen {...formData[parseInt(multiStepForm.step)]} />
                default:
                    return <p>Something went wrong.</p>
            }
        };


    return (
        <div className="multi-step-form">
            <div className="progress-bar">
                {
                    new Array(formData.length + 1).fill(0).map((_, i) => <div key={`step-${i + 1}`} className="step-box">
                        <div className="step" style={i.toString() <= multiStepForm.step ? { background: '#664de5', color: 'white', borderColor: '#664de5' } : {}}>{i + 1}</div>
                        <div className="bar" >
                            <div style={
                                i.toString() < multiStepForm.step ? { width: '100%' }
                                    : i.toString() === multiStepForm.step ? { transition: '0.3s', width: '50%' } : { width: '0%' }}></div>
                        </div>
                    </div>)
                }
            </div>
            <div className="form">
                {
                    renderForm()
                }
            </div>
        </div >
    )
}

export default MultiStepForm;


interface MultiStepFormProps {
    formData: onboardingQuestion[]
}