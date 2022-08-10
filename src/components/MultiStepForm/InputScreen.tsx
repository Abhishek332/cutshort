import { InputBox, Button } from "..";

const InputScreen: React.FC<InputScreenProps> = ({ heading, note, inputs, ctaText, formState }) => {
  return (
    <div>
      <h1>{heading}</h1>
      {note && <p>{note}</p>}
      {
        inputs.map((inputData: inputField) => {
          return <InputBox key={`input-${inputData.name}`} {...inputData} value={formState[inputData.name]} handleChange={()=>{}} />
        })
      }

      <Button text={ctaText} action={() => { }} />
    </div>
  )
}

export default InputScreen;

interface InputScreenProps extends onboardingQuestion {
  formState: formStateType;
}