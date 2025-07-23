import * as React from "react"
const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M13.31 25.256c6.948 0 12.58-5.633 12.58-12.581C25.89 5.726 20.258.094 13.31.094 6.36.094.729 5.726.729 12.674c0 6.95 5.632 12.582 12.58 12.582Z"
      />
      <path
        stroke="url(#b)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.936}
        d="m7.616 13.49 3.254 3.253 8.133-8.134"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={13.31}
        x2={13.31}
        y1={8.609}
        y2={16.743}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#21B3FA" />
        <stop offset={1} stopColor="#FFB258" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M.729.094H25.89v25.162H.729z" />
      </clipPath>
    </defs>
  </svg>
)
export default CheckIcon