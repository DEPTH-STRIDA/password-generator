import React from "react";

interface CharacterButtonProps {
  char: string;
  isActive: boolean;
  isEnabled: boolean;
  onClick: () => void;
  onHover?: () => void;
}

const CharacterButton: React.FC<CharacterButtonProps> = ({
  char,
  isActive,
  isEnabled,
  onClick,
  onHover,
}) => {
  const handleClick = () => {
    if (isEnabled) {
      onClick();
    } else {
      onHover?.();
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => !isEnabled && onHover?.()}
      className={`w-[30px] h-[30px] rounded-[6px] font-Troika text-[20px] text-primary-white 
      flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer
      ${isActive ? 'bg-primary-green' : 'bg-primary-gray'} 
      ${isEnabled ? 'hover:scale-110' : 'opacity-50 cursor-not-allowed'}`}
    >
      {char}
    </div>
  );
};

export default CharacterButton; 