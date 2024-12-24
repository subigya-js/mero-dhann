import * as React from "react"

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = "" }) => {
  return (
    <button
      className={`bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md text-[13px] font-semibold transition duration-150 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
