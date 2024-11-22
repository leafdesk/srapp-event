type ButtonProps = {
  onClick?: () => void
  bgColor?: string
  textColor?: string
  text?: string
  disabled?: boolean
}

/**
 * 버튼.
 */
const Button = ({
  onClick = () => {},
  bgColor = '#FF3296',
  textColor = 'white',
  text = '',
  disabled = false,
}: ButtonProps) => {
  return (
    <div className="px-4">
      <button
        onClick={disabled ? undefined : onClick}
        className={`w-full h-[60px] rounded-lg flex items-center justify-center bg-[${bgColor}] font-medium text-xl text-${textColor} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
