import React, { useState } from "react";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  maxValue: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, maxValue }) => {
  const [showHint, setShowHint] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Если поле пустое или содержит только 0, устанавливаем значение 0
    if (!inputValue || inputValue === '0') {
      onChange(0);
      return;
    }

    // Убираем ведущие нули
    const cleanValue = inputValue.replace(/^0+/, '');
    const newValue = parseInt(cleanValue);

    if (newValue > maxValue) {
      setShowHint(true);
      setTimeout(() => setShowHint(false), 2000);
      return;
    }
    
    onChange(newValue);
  };

  return (
    <div className="flex flex-row justify-start items-center gap-[0.83vw] relative z-50">
      <input
        type="number"
        value={value || ''} // Показываем пустую строку вместо 0
        onChange={handleChange}
        className="w-[2.86vw] h-[1.3vw] bg-primary-gray rounded-[0.31vw] text-primary-white 
        font-normal font-Troika text-[1.04vw] flex justify-center items-center text-center relative
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        focus:outline-none focus:ring-2 focus:ring-primary-green"
      />
      {showHint && (
        <p className="text-primary-red font-normal font-Troika text-[1.04vw]">
          МАКСИМУМ {maxValue}
        </p>
      )}
    </div>
  );
};

export default NumberInput; 