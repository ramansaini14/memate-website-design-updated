import React from 'react'

const ToolTip = (props) => {
  return (
    <div className="tooltipCompaire"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_1399_463985)">
      <path d="M6.0626 6.00065C6.21934 5.5551 6.52871 5.17939 6.93591 4.94007C7.34311 4.70076 7.82187 4.61328 8.28739 4.69313C8.75291 4.77297 9.17515 5.015 9.47932 5.37634C9.7835 5.73767 9.94997 6.195 9.94927 6.66732C9.94927 8.00065 7.94927 8.66732 7.94927 8.66732M8.0026 11.334H8.00927M14.6693 8.00065C14.6693 11.6826 11.6845 14.6673 8.0026 14.6673C4.32071 14.6673 1.33594 11.6826 1.33594 8.00065C1.33594 4.31875 4.32071 1.33398 8.0026 1.33398C11.6845 1.33398 14.6693 4.31875 14.6693 8.00065Z" stroke="#98A2B3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_1399_463985">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  <span className="tooltiptext">{props.toolTip}</span>
</div>
  )
}

export default ToolTip