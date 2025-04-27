import React, { useState } from "react";

interface PasswordItemProps {
  password: string;
}

const PasswordItem: React.FC<PasswordItemProps> = ({ password }) => {
  const [showCopied, setShowCopied] = useState(false);

  const truncatedPassword =
    password.length > 30 ? `${password.slice(0, 30)}...` : password;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(password);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group">
      <div
        className={`uppercase text-primary-white font-normal font-Troika
          ${
            password.length > 30 ? "text-[1.25vw]" : "text-[1.67vw]"
          } py-[0.36vw] px-[1.25vw] bg-primary-gray rounded-[0.31vw] 
          z-10 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer`}
        onClick={handleCopy}
        title={password.length > 30 ? password : undefined}
      >
        {truncatedPassword}
      </div>

      {showCopied && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-[0.42vw] bg-primary-black text-primary-white px-[0.21vw] py-[0.1vw] rounded-[0.21vw] text-[0.73vw] z-50 whitespace-nowrap">
          Скопировано!
        </div>
      )}
    </div>
  );
};

export default PasswordItem;
