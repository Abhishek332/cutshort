import "./FormElements.scss";

const InputBox: React.FC<InputBoxType> = ({ name, type = "text", value, handleChange, label, required = false }) => {
    return (
        <label className="flex flex-col">
            {label && label}
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
                className="common-box"
            />
        </label>
    )
}

const Button: React.FC<ctaBtn> = ({ text, action }) => <button className="form-btn common-box" onClick={action}>{text}</button>

const OptionBox: React.FC<OptionBoxType> = ({ logo, name, description, stateKey }) => {
    return <div className="option-box">
        <img src={logo} alt="" />
        <h5>{name}</h5>
        <p>{description}</p>
    </div>
}

export { InputBox, Button, OptionBox };