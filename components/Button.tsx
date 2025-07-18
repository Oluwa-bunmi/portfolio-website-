import React from 'react'

interface ButtonProps {
    bgClass: string;
    
}
const Button = ({bgClass} : ButtonProps) => {
  return (
    <button
      className={`bg-${bgClass} py-3 px-[40px] rounded-md text-white text-base font-bold cursor-pointer`}
    >
      Resume
    </button>
  );
}

export default Button