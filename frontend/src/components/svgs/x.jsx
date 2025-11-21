import React from "react";

const XSvg = (props) => (
  <svg
    viewBox="0 0 300 120"
    {...props}
    style={{ transformOrigin: "center", ...props.style }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Animated color-shift gradient */}
      <linearGradient id="pfGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%">
          <animate
            attributeName="stop-color"
            values="#8b5cf6; #a855f7; #06b6d4; #8b5cf6"
            dur="6s"
            repeatCount="indefinite"
          />
        </stop>

        <stop offset="50%">
          <animate
            attributeName="stop-color"
            values="#a855f7; #06b6d4; #8b5cf6; #a855f7"
            dur="6s"
            repeatCount="indefinite"
          />
        </stop>

        <stop offset="100%">
          <animate
            attributeName="stop-color"
            values="#06b6d4; #8b5cf6; #a855f7; #06b6d4"
            dur="6s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>

      {/* Helix gradient – now actually defined */}
      <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>

      <filter id="pfGlow">
        <feDropShadow
          dx="0"
          dy="0"
          stdDeviation="4"
          floodColor="#8b5cf6"
          floodOpacity="0.7"
        />
      </filter>
    </defs>

    {/* Big P outline */}
    <g transform="translate(10, 10)">
      <path
        d="M20 100 L20 20 Q20 10 32 10 L70 10 Q95 10 110 28 Q125 46 110 64 Q95 82 70 82 L40 82 Q20 82 20 100 Z"
        fill="none"
        stroke="url(#pfGradient)"
        strokeWidth="6"
        filter="url(#pfGlow)"
      />
    </g>

    {/* Helix */}
    <g
      transform="translate(22, 18) scale(0.9)"
      fill="none"
      stroke="url(#helixGradient)"
      strokeWidth="4"
      strokeLinecap="round"
    >
      <path d="M30 80 Q 50 30, 70 80">
        <animate attributeName="opacity" values="1; 0.5; 1" dur="2s" repeatCount="indefinite" />
      </path>

      <path d="M70 20 Q 50 70, 30 20" opacity="0.7">
        <animate attributeName="opacity" values="0.5; 1; 0.5" dur="2s" repeatCount="indefinite" />
      </path>

      <circle cx="50" cy="50" r="15" stroke="white" strokeWidth="2" opacity="0.4">
        <animate attributeName="r" values="15; 18; 15" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Wordmark */}
    <text
      x="150"
      y="78"
      fontSize="48"
      fontWeight="700"
      stroke="url(#pfGradient)"
      strokeWidth="1.2"
      fill="url(#pfGradient)"
      letterSpacing="0.8"
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        paintOrder: "stroke fill",
        filter: "url(#pfGlow)",
      }}
    >
      <tspan>PulseFeed</tspan>

      <animate attributeName="opacity" values="1; 0.92; 1" dur="2.8s" repeatCount="indefinite" />
      <animate
        attributeName="letter-spacing"
        values="0.8; 1.4; 0.8"
        dur="3.5s"
        repeatCount="indefinite"
      />
    </text>
  </svg>
);

export default XSvg;
