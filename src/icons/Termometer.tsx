import React from "react";

interface Props {
  color?: string;
  size?: number | string;
}

const TermometerIcon = ({ size = 50, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    x="0"
    y="0"
    viewBox="0 0 96 96"
  >
    <g>
      <path d="M50 58.424V30a2 2 0 00-4 0v28.424A5.002 5.002 0 0043 63c0 2.757 2.243 5 5 5s5-2.243 5-5a5.002 5.002 0 00-3-4.576zM48 64a1 1 0 110-2 1 1 0 010 2z"></path>
      <path d="M56.009 55.459L56 30c0-4.411-3.589-8-8-8s-8 3.589-8 7.999l-.01 25.46A11.029 11.029 0 0037 63c0 6.065 4.935 11 11 11s11-4.935 11-11c0-2.809-1.08-5.509-2.991-7.541zM48 70c-3.859 0-7-3.141-7-7 0-1.984.848-3.885 2.327-5.213a2 2 0 00.663-1.487L44 30c0-2.206 1.794-4 4-4s4 1.794 4 4.001l.009 26.299c0 .567.241 1.108.664 1.487A7.02 7.02 0 0155 63c0 3.859-3.141 7-7 7z"></path>
    </g>
  </svg>
);

export default TermometerIcon;
