import { InputBox, Button } from "..";
import { formScreenHandler, formValueUpdater } from "../../redux/multiStepFormSlice";
import { useAppDispatch, useAppSelector } from "../../redux/customHooks";

const InputScreen: React.FC<onboardingQuestion> = ({ heading, note, inputs, ctaText }) => {
  const dispatch = useAppDispatch(),
    multiStepForm = useAppSelector(state => state.multiStepForm),
    handleChange = (e: any) => {
      const { name, value } = e.target;
      dispatch(formValueUpdater({ name, value }));
    },
    handleSubmit = () => {
      let checkEmpty = true;
      inputs?.forEach((input) => {
        if (!input.required) return;
        if (multiStepForm[input.name]) checkEmpty = false;
        else checkEmpty = true;
      })
      if (checkEmpty) {
        showError();
        return;
      }
      dispatch(formScreenHandler());
    },
    showError = () => alert("Fill require fields");

  return (
    <div className="flex-col-center">
      <header>
        <h2>{heading}</h2>
        {note && <p>{note}</p>}
      </header>
      <div>
        {
          inputs?.map((inputData: inputField) => {
            return <InputBox key={`input-${inputData.name}`} {...inputData} value={multiStepForm[inputData.name]} handleChange={handleChange} />
          })
        }
      </div>
      <Button text={ctaText} action={handleSubmit} />
    </div>
  )
}

export default InputScreen;