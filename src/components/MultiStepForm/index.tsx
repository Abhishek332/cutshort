import { formData } from "./formData";
import InputScreen from "./InputScreen";
import SelectionScreen from "./SelectionScreen";
import { useAppSelector } from "../../redux/customHooks";

const MultiStepForm = () => {
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
        <div>
            <h1>MultiStepForm</h1>
            {
                renderForm()
            }
        </div>
    )
}

export default MultiStepForm;