import InputScreen from "./InputScreen";
import SelectionScreen from "./SelectionScreen";
import { useAppSelector } from "../../redux/customHooks";
import "./MultiStepForm.scss";

const MultiStepForm: React.FC<MultiStepFormProps> = ({ formData }) => {
    const multiStepForm = useAppSelector(state => state.multiStepForm),
        renderForm = () => {
            switch (formData[parseInt(multiStepForm.step)].type) {
                case 'input':
                    return <InputScreen {...formData[parseInt(multiStepForm.step)]} />
                case 'selector':
                    return <SelectionScreen {...formData[parseInt(multiStepForm.step)]} />
                default:
                    <p>Something went wrong.</p>
            }
        };

    return (
        <div className="multi-step-form">
            <h1>MultiStepForm</h1>
            {
                renderForm()
            }
        </div>
    )
}

export default MultiStepForm;


interface MultiStepFormProps {
    formData: onboardingQuestion[]
}