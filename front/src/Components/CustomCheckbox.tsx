import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className="flex justify-center items-center w-[1.46vw] h-[1.46vw] border-primary-green border-[0.1vw] relative cursor-pointer
      hover:scale-110 transition-all duration-300 ease-in-out"
      onClick={() => onChange(!checked)}
    >
      {checked && (
        <div className={`absolute inset-0 flex justify-center
         items-center ${checked ? 'hover:rotate-[90deg] transition-all duration-300 ease-in-out' : ''}`}>
          <div className="absolute w-[1.25vw] h-[0.1vw] bg-primary-green rotate-45"></div>
          <div className="absolute w-[1.25vw] h-[0.1vw] bg-primary-green -rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default CustomCheckbox; 