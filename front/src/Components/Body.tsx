import React, { useState } from "react";
import {
  random_static_header,
  voronoi_falt_header,
  grung,
  marble,
} from "../assets/img";
import PasswordItem from "./PasswordItem";
import CustomCheckbox from "./CustomCheckbox";

const Body: React.FC = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: false
  });

  const handleCheckboxChange = (key: keyof typeof checkboxStates) => {
    setCheckboxStates(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="bg-primary-black h-full w-full">
      <div
        className="fixed left-0 right-0 bottom-0 mix-blend-overlay opacity-[85%] z-0
        top-[130px]"
        style={{
          backgroundImage: `url(${marble})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "1920px 1920px",
          backgroundPosition: "center",
          filter: "blur(4px)",
          //   WebkitFilter: 'blur(4px)',
        }}
      />

      <div className="flex justify-center items-start z-30 mt-[40px] gap-[105px]">
        <div className="flex flex-col justify-center items-start">
          <div className="relative">
            <div className="absolute top-[50%] left-[-35px] w-[406px] h-[1px] bg-primary-green"></div>
            <div className="absolute top-[25%] left-[-21px] w-[1px] h-[43px] bg-primary-green"></div>
            <div className="absolute top-[25%] right-[-55px] w-[1px] h-[43px] bg-primary-green"></div>

            <h1
              className="uppercase font-normal bg-gradient-to-b  text-transparent font-Cattedrale bg-clip-text from-primary-white from-[50%] to-primary-green to-[50%]
          text-[40px]"
            >
              Генератор паролей
            </h1>
          </div>
          <p className="text-primary-white font-normal font-Troika text-[20px] mt-[23px]">
            ДЛИНА ПАРОЛЯ
          </p>
          <div className="flex flex-row justify-start items-center gap-[16px] mt-[11px]">
            <div className="w-[55px] h-[25px] bg-primary-gray rounded-[6px] text-primary-white font-normal font-Troika text-[20px] flex justify-center items-center">
              11
            </div>
            <p className="text-primary-red font-normal font-Troika text-[20px]">
              МАКСИМУМ 100
            </p>
          </div>
          <p className="text-primary-white font-normal font-Troika text-[20px] mt-[11px]">
            КОЛИЧЕСТВО ПАРОЛЕЙ
          </p>
          <div className="flex flex-row justify-start items-center gap-[16px] mt-[11px]">
            <div className="w-[55px] h-[25px] bg-primary-gray rounded-[6px] text-primary-white font-normal font-Troika text-[20px] flex justify-center items-center">
              11
            </div>
            <p className="text-primary-red font-normal font-Troika text-[20px]">
              МАКСИМУМ 50
            </p>
          </div>
          <p className="text-primary-white font-normal font-Troika text-[20px] mt-[20px]">
            СИМВОЛЫ В ПАРОЛЕ
          </p>

          <div className="flex flex-row justify-start items-center gap-[20px] mt-[11px]">
            <CustomCheckbox 
              checked={checkboxStates.uppercase}
              onChange={() => handleCheckboxChange('uppercase')}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[20px] uppercase">
                Прописные Латинские бувы
              </p>
              <p className="text-primary-green font-Cydre font-black text-[14px] uppercase">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-[20px] mt-[11px]">
            <CustomCheckbox 
              checked={checkboxStates.lowercase}
              onChange={() => handleCheckboxChange('lowercase')}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[20px] uppercase">
                Строчные Латинские бувы
              </p>
              <p className="text-primary-green font-Cydre font-black text-[14px] lowercase">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-[20px] mt-[11px]">
            <CustomCheckbox 
              checked={checkboxStates.numbers}
              onChange={() => handleCheckboxChange('numbers')}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[20px] uppercase">
                Цифры
              </p>
              <p className="text-primary-green font-Cydre font-black text-[14px] lowercase">
                0123456789
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-[20px] mt-[11px]">
            <CustomCheckbox 
              checked={checkboxStates.special}
              onChange={() => handleCheckboxChange('special')}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[20px] uppercase">
                Специальные символы
              </p>
              <p className="text-primary-green font-Cydre font-black text-[14px] lowercase">
                {"!#$%&()*+./:;=>?@[\\]^`{|}~'\\"}
              </p>
            </div>
          </div>

          <p className="text-primary-white font-normal font-Troika text-[20px] mt-[23px]">
            СИМВОЛЫ НА ВЫБОР
          </p>

          <div className="flex flex-col justify-center items-start gap-[8px] mt-[11px]">
            <div className="flex flex-row justify-center items-center gap-[8px]">
              {["!", "#", "$", "%", "&", "(", ")", "*", "+", ".", "/", ":", ";"].map((char) => (
                <div
                  key={char}
                  className="w-[30px] h-[30px] bg-primary-green rounded-[6px]
                  font-Troika text-[20px] text-primary-white flex justify-center items-center"
                >
                  {char}
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center items-center gap-[8px]">
              {["=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~"].map((char) => (
                <div
                  key={char}
                  className="w-[30px] h-[30px] bg-primary-green rounded-[6px]
                  font-Troika text-[20px] text-primary-white flex justify-center items-center"
                >
                  {char}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-col justify-center items-center">
            <h2
              className="uppercase text-primary-white font-normal font-Troika
          text-[32px]"
            >
              Будет сгенерирован пароль вида
            </h2>
            <PasswordItem password="^q%1'*Cn.m" />
          </div>

          <div
            className="flex flex-row justify-start items-center
           flex-wrap mt-[36px] gap-[16px] max-w-[930px]"
          >
            <PasswordItem password="^q%1'*Cn.m1212121212121212121212" />
            <PasswordItem password="^q%1'*m1212121212121212121212.m" />
            <PasswordItem password="^q%1'*m1212121212121212121212.m" />
            <PasswordItem password="^q%1'*n.m" />
            <PasswordItem password="^q%1'*Cm1212121212121212121212n.m" />
            <PasswordItem password="^q%1'*Cm1212121212121212121212n.m" />
            <PasswordItem password="^q%1'*Cm1212121212121212121212n.m" />
            <PasswordItem password="^q%1'*Cm1212121212121212121212n.m" />
            <PasswordItem password="^q%1'*Cm1212121212121212121212n.m" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
