import "./FormElements.scss";
import { useAppDispatch } from "../../redux/customHooks";
import { formValueUpdater } from "../../redux/multiStepFormSlice";

const InputBox: React.FC<InputBoxType> = ({ name, type = "text", value, handleChange, label, example, required = false }) => {
    return (
        <label className="flex flex-col">
            <span>
                {label && label}{' '}
                {!required && <span style={{ color: '#c3c8d2' }}>(optional)</span>}
            </span>
            <div className="input-box common-box">
                {example && <div className="example">{example}</div>}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    required={required}
                />
            </div>
        </label>
    )
}

const Button: React.FC<ctaBtn> = ({ text, action }) => <button className="form-btn common-box" onClick={action}>{text}</button>

const OptionBox: React.FC<OptionBoxType> = ({ logo, heading, description, stateKey, selected }) => {
    const dispatch = useAppDispatch(),
        handleClick = () => dispatch(formValueUpdater({ name: stateKey, value: heading }));

    return <div className="option-box" onClick={handleClick} style={selected ? { border: '1px solid #664de5' } : { border: '1px solid #8b97b1' }}>
        <img src={logo} alt="" />
        <h5>{heading}</h5>
        <p>{description}</p>
    </div>
}

export { InputBox, Button, OptionBox };