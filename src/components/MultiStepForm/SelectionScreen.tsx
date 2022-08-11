import { OptionBox, Button } from "..";
import { formScreenHandler } from "../../redux/multiStepFormSlice";
import { useAppDispatch, useAppSelector } from "../../redux/customHooks";

const SelectionScreen: React.FC<onboardingQuestion> = ({ heading, stateKey = '', note, options, ctaText }) => {
    const dispatch = useAppDispatch(),
        multiStepForm = useAppSelector(state => state.multiStepForm);

    return (
        <div className="flex-col-center">
            <header>
                <h2>{heading}</h2>
                {note && <p>{note}</p>}
            </header>
            <div className="options-container">
                {
                    options?.map((optionData: selectOption) => {
                        return <OptionBox
                            {...optionData}
                            key={`option-${optionData.heading}`}
                            stateKey={stateKey}
                            selected={multiStepForm[stateKey].toLowerCase() === optionData.heading.toLowerCase()}
                        />
                    })
                }
            </div>
            <Button text={ctaText} action={() => dispatch(formScreenHandler())} />
        </div>
    )
}

export default SelectionScreen;