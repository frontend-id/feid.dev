import React from 'react';

export default function AngularIcon({ size = '1em' }: { size: number | string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 250 250" style={{ display: 'inline-block' }}>
      <g>
        <polygon
          fill="#dd0031"
          points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 	"
        />
        <polygon
          fill="#c3002f"
          points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 	"
        />
        <path
          fill="#ffffff"
          d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
		L125,52.1z M142,135.4H108l17-40.9L142,135.4z"
        />
      </g>
    </svg>
  );
}
