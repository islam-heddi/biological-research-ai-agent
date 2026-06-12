
interface IInput {
    type?: "email"|"text"|"password";
    value?: string;
    onChange?: (e?: any) => void;
    placeholder?: string;
    className?: string;
}

function Input({placeholder, type = "text", value, onChange, className}: IInput) {
  return (
    <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-2xl border border-white/10 bg-[#0f1726] px-4 py-3 text-white outline-none transition duration-200 focus:border-[#11ff00] focus:ring-2 focus:ring-[#11ff00]/20 ${className || ''}`}
        />
    </div>
  )
}

export default Input