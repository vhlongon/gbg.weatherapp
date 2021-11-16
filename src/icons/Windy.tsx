import React from "react";

interface Props {
  color?: string;
  size?: number | string;
}

const WindyIcon = ({ color, size = 50 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    x="0"
    y="0"
    viewBox="0 0 96 96"
    fill={color}
  >
    <g>
      <path d="M54 46l-30.001-.001a2 2 0 000 4L54 50c3.859 0 7 3.141 7 7s-3.141 7-7 7a2 2 0 000 4c6.065 0 11-4.935 11-11s-4.935-11-11-11z"></path>
      <path d="M47.999 52H24a2 2 0 000 4h23.999a1 1 0 010 2 2 2 0 000 4c2.757 0 5-2.243 5-5s-2.243-5-5-5zM69 38a2 2 0 000 4 1 1 0 010 2h-4a2 2 0 000 4h4c2.757 0 5-2.243 5-5s-2.243-5-5-5zM23.999 43.999L57 44c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8a2 2 0 004 0c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4l-33.001-.001a2 2 0 000 4z"></path>
    </g>
  </svg>
);

export default WindyIcon;
