import "./FormElements.scss";

const InputBox: React.FC<InputBoxTypes> = ({ name, type = "text", value, handleChange, label, required = false }) => {
    return (
        <label className="flex flex-col">
            {label && label}
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                required={required}
            />
        </label>
    )
}

const Button: React.FC<ButtonType> = ({ text, action }) => <button className="form-btn" onClick={action}>{text}</button>

export { InputBox, Button };