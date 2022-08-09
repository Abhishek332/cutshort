import { InputBox, Button } from "../";

const First: React.FC<any> = ({ heading, note, inputs, cta, formState, handleChange }) => {
  return (
    <div>
      <h1>{heading}</h1>
      {note && <p>{note}</p>}
      {
        inputs.map((inputdata: any, i: number) => <InputBox {...inputdata} handleChange={handleChange} value={formState[inputdata.name]} />)
      }

      <Button text={cta.text} action={cta.action} />
    </div>
  )
}

export default First;