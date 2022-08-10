import { useState } from "react";
import { formData } from "./formData";
import InputScreen from "./InputScreen";
import SelectionScreen from "./SelectionScreen";


const MultiStepForm = () => {
    const [formState, setFormState] = useState<formStateType>(
        {
            step: '2',
            fullName: '',
            displayName: '',
            workspaceName: '',
            workspaceUrl: '',
            planToUse: ''
        }
    ),

        renderForm = () => {
            switch (formData[parseInt(formState.step)].type) {
                case 'input':
                    return <InputScreen {...formData[parseInt(formState.step)]} formState={formState} />
                case 'selector':
                    return <SelectionScreen {...formData[parseInt(formState.step)]} />
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