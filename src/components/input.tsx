type InputProps = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  type?: string
}

const Input = ({ placeholder, onChange, value, type = 'text' }: InputProps) => {
  return (
    <div className="px-4">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[54px] px-4 rounded-lg border border-gray-300 text-gray-700 placeholder-[#aaa] bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
