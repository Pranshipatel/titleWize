import React from "react"

const RightAngle = ({ color = "currentColor", strokeWidth = 2, size = 100, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M10 90 L10 10 L90 10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}

export default RightAngle

// Usage example
export const RightAngleExample = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
      <RightAngle color="#3b82f6" strokeWidth={3} size={200} />
    </div>
  )
}

