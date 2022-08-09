import { useState } from "react";
import First from "./First"
import Second from "./Second";
import Third from "./Third";
import Success from "./Success";

const MultiStepForm = () => {
    const [formState, setFormState] = useState<FormStates>(
        {
            step: 0,
            fullName: '',
            displayName: '',
            workspaceName: '',
            workspaceUrl: '',
            planToUse: ''
        }
    ),

        renderForm = () => {
            switch (formState.step) {
                case 0:
                    return <First />
                case 1:
                    return <Second />
                case 2:
                    return <Third />
                case 3:
                    return <Success />
                default:
                    <p>Something went wrong.</p>
            }
        }

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