import { useState } from 'react'

type DropdownProps = {
  options: string[]
  placeholder: string
  onSelect: (value: string) => void
}

const Dropdown = ({ options, placeholder, onSelect }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedValue(value)
    onSelect(value)
  }

  return (
    <div className="relative px-4">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="w-full h-[54px] px-4 rounded-lg border border-gray-300 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
