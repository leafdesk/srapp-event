/**
 * 참여율 상태 바.
 */
const ProgressBar = ({ rate }) => {
  return (
    // 배경
    <div className="w-full h-[8px] bg-[#F3F1F4] rounded-full my-2 overflow-hidden flex items-center">
      {/* 가운데 linear-gradient 바 */}
      <div
        className="rounded-full h-[6px] ml-[1px]"
        style={{
          background: 'linear-gradient(to right, #EBABDC, #FF3296)',
          width: `${rate}%`,
          maxWidth: '99.8%',
        }}
      />
    </div>
  )
}

export default ProgressBar
