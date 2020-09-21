import React from 'react';

export default function Logo({ size = 20 }: { size: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M93.75 172.5L58.9819 203.903C56.8297 205.847 56.7775 209.209 58.8683 211.219L128.767 278.412C130.807 280.373 134.067 280.251 135.956 278.144L258.762 141.113C260.566 139.1 263.643 138.885 265.709 140.628L340.607 203.795C342.928 205.753 342.983 209.31 340.724 211.338L262 282"
        stroke="#C0392B"
        strokeWidth="40"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="133" cy="137.5" r="15.5" fill="#C0392B" stroke="#C0392B" strokeWidth="10" />
    </svg>
  );
}
