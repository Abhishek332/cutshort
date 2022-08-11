import { InputBox, Button } from "..";
import { formScreenHandler, formValueUpdater } from "../../redux/multiStepFormSlice";
import { useAppDispatch, useAppSelector } from "../../redux/customHooks";

const InputScreen: React.FC<onboardingQuestion> = ({ heading, note, inputs, ctaText }) => {
  const dispatch = useAppDispatch(),
    multiStepForm = useAppSelector(state => state.multiStepForm),
    handleChange = (e: any) => {
      const { name, value } = e.target;
      dispatch(formValueUpdater({ name, value }));
    };

  return (
    <div className="flex-col-center">
      <h2>{heading}</h2>
      {note && <p>{note}</p>}
      <div className="container">
        {
          inputs?.map((inputData: inputField) => {
            return <InputBox key={`input-${inputData.name}`} {...inputData} value={multiStepForm[inputData.name]} handleChange={handleChange} />
          })
        }
      </div>
      <Button text={ctaText} action={() => dispatch(formScreenHandler())} />
    </div>
  )
}

export default InputScreen;