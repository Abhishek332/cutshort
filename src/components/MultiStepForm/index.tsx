import { useState } from "react";
import First from "./First";
import { formData } from "./formData";


const MultiStepForm = () => {
    const [formState, setFormState] = useState<formState>(
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
                    return;
                case 1:
                    return;// <Second />
                case 2:
                    return;//<Third />
                case 3:
                    return;//<Success />
                default:
                    <p>Something went wrong.</p>
            }
        };

    const handleChange = (e: any) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    setTimeout(() => {
        console.log(formState);
    }, 5000);



    return (
        <div>
            <h1>MultiStepForm</h1>
            {
                formData.map((form: any, i: number) => <First {...form} formState={formState} handleChange={handleChange} />)
            }
        </div>
    )
}

export default MultiStepForm;