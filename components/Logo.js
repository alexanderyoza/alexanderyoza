import React from 'react';

/**
 * ALEX monogram, recreated as vector so it inherits `currentColor`.
 * Crisp at any size and always visible on dark (set color via CSS on the parent).
 */
export default function Logo({ size = 30, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label="Alex Yoza"
    >
      <rect x="3" y="3" width="94" height="94" rx="12" stroke="currentColor" strokeWidth="4" />
      <g
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="30"
        textAnchor="middle"
      >
        <text x="31" y="43">A</text>
        <text x="69" y="43">L</text>
        <text x="31" y="83">E</text>
        <text x="69" y="83">X</text>
      </g>
    </svg>
  );
}
