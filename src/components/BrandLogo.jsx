import React from 'react';

function BrandLogo({ size = 'md' }) {
  const sizeClass =
    size === 'lg'
      ? 'h-12 w-auto'
      : size === 'sm'
      ? 'h-6 w-auto'
      : 'h-7 w-auto';

  return (
    <span className="inline-flex items-center select-none group">
      <svg
        viewBox="0 0 70 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClass} transition-transform duration-300 group-hover:scale-[1.03]`}
        aria-label="LTK Logo"
      >
        <defs>
          <linearGradient id="ltk-brand-grad" x1="36" y1="5" x2="66" y2="27" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Connected L + T Ligature */}
        <path
          d="M4 5H9.5V21.5H22V10.5H14.5V5H36V10.5H27.5V27H4V5Z"
          fill="#F4F4F5"
        />

        {/* Connected K (Flush with T crossbar, exact 45-degree geometric bevels) */}
        <path
          d="M36 5H41.5V13.5L50 5H57.5L46 16.5L56.5 27H49L41.5 19.5V27H36V5Z"
          fill="url(#ltk-brand-grad)"
        />

        {/* Tight Accent Dot */}
        <rect
          x="60"
          y="21.5"
          width="5.5"
          height="5.5"
          rx="2.75"
          fill="#38BDF8"
        />
      </svg>
    </span>
  );
}

export default BrandLogo;
