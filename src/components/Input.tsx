interface InputProps {
  placeholder: string;
  type: string;
}

function Input({ placeholder, type }: InputProps) {
  return (
    <input
      className="w-full px-2 py-4 border-2 border-gray-400 rounded-sm
      mb-1
      placeholder:italic text-lg"
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
