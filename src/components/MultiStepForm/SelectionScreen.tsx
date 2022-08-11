import { OptionBox, Button } from "..";
import { formScreenHandler } from "../../redux/multiStepFormSlice";
import { useAppDispatch } from "../../redux/customHooks";

const SelectionScreen: React.FC<onboardingQuestion> = ({ heading, stateKey = '', note, options, ctaText }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex-col-center">
            <h2>{heading}</h2>
            {note && <p>{note}</p>}
            {
                options?.map((optionData: selectOption) => {
                    return <OptionBox key={`option-${optionData.name}`} {...optionData} stateKey={stateKey} />
                })
            }

            <Button text={ctaText} action={() => dispatch(formScreenHandler())} />
        </div>
    )
}

export default SelectionScreen;