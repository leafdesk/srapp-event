type ButtonProps = {
  onClick?: () => void
  bgColor?: string
  textColor?: string
  text?: string
}

/**
 * 버튼.
 */
const Button = ({
  onClick = () => {},
  bgColor = '#FF3296',
  textColor = 'white',
  text = '',
}: ButtonProps) => {
  return (
    <div className="px-4">
      <button
        onClick={onClick}
        className={`w-full h-[60px] rounded-lg flex items-center justify-center bg-[${bgColor}] font-medium text-xl text-${textColor}`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
