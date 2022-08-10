import { OptionBox, Button } from "..";

const SelectionScreen: React.FC<onboardingQuestion> = ({ heading, stateKey = '', note, options, ctaText }) => {
    return (
        <div>
            <h1>{heading}</h1>
            {note && <p>{note}</p>}
            {
                options?.map((optionData: selectOption) => {
                    return <OptionBox key={`option-${optionData.name}`} {...optionData} stateKey={stateKey} />
                })
            }

            <Button text={ctaText} action={() => { }} />
        </div>
    )
}

export default SelectionScreen;