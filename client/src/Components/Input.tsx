
interface IInput {
    type?: "email"|"text"|"password";
    value?: string;
    onChange?: (e?: any) => void;
    placeholder?: string;
    className?: string;
}

function Input({placeholder,type, value, onChange, className}: IInput) {
  return (
    <div>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`border-2 p-2 ${className || ''}`} />
    </div>
  )
}

export default Input