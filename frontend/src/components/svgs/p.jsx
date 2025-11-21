import React from "react";

const PSvg = (props) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      {/* Define the animated linear gradient */}
      <linearGradient id="animatedPGFade" x1="0%" y1="0%" x2="100%" y2="100%">
        {/* Stop 1: Starts as Blue */}
        <stop offset="0%" stopColor="#6366F1">
          {/* Animation: Shift the stop color over a 4-second cycle */}
          <animate
            attributeName="stop-color"
            values="#6366F1; #8B5CF6; #34D399; #6366F1"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        
        {/* Stop 2: Starts as Purple */}
        <stop offset="100%" stopColor="#8B5CF6">
          {/* Animation: Shift the stop color over a 4-second cycle (staggered slightly) */}
          <animate
            attributeName="stop-color"
            values="#8B5CF6; #34D399; #6366F1; #8B5CF6"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>

      {/* Define a secondary gradient for a subtle light reflection/shimmer */}
      <linearGradient id="shimmerHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
        <stop offset="50%" stopColor="rgba(255, 255, 255, 0.0)" />
        <stop offset="100%" stopColor="rgba(255, 255, 255, 0.0)" />
      </linearGradient>

    </defs>

    {/* Circle now filled with the animated gradient */}
    <circle cx="50" cy="50" r="45" fill="url(#animatedPGFade)" />
    
    {/* Optional: Add a rotating shimmer layer for extra dynamism */}
    <circle cx="50" cy="50" r="45" fill="url(#shimmerHighlight)" opacity="0.5">
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="8s"
            repeatCount="indefinite"
        />
    </circle>


    {/* Text layer remains the same, white on top */}
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="60"
      fontWeight="900"
      fill="white"
      fontFamily="Inter, sans-serif"
    >
      P
    </text>
  </svg>
);

export default PSvg;