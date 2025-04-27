import React, { useState, useEffect } from "react";
import { marble } from "../assets/img";
import PasswordItem from "./PasswordItem";
import CustomCheckbox from "./CustomCheckbox";
import NumberInput from "./NumberInput";
import CharacterButton from "./CharacterButton";
import {
  generatePassword,
  generatePasswords,
} from "../utils/passwordGenerator";

const SPECIAL_CHARS_ROW1 = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];
const SPECIAL_CHARS_ROW2 = [".", "/", ":", ";", "=", ">", "?", "@", "["];
const SPECIAL_CHARS_ROW3 = ["\\", "]", "^", "`", "{", "|", "}", "~"];

const Body: React.FC = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: false,
  });

  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordCount, setPasswordCount] = useState(10);
  const [activeChars, setActiveChars] = useState<Set<string>>(
    new Set([
      ...SPECIAL_CHARS_ROW1,
      ...SPECIAL_CHARS_ROW2,
      ...SPECIAL_CHARS_ROW3,
    ])
  );
  const [savedActiveChars, setSavedActiveChars] = useState<Set<string>>(
    new Set([
      ...SPECIAL_CHARS_ROW1,
      ...SPECIAL_CHARS_ROW2,
      ...SPECIAL_CHARS_ROW3,
    ])
  );
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const [previewPassword, setPreviewPassword] = useState("");
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  // Обработка включения/выключения специальных символов
  useEffect(() => {
    if (checkboxStates.special) {
      // Восстанавливаем сохраненный выбор символов
      setActiveChars(new Set(savedActiveChars));
    } else {
      // Сохраняем текущий выбор перед выключением
      setSavedActiveChars(new Set(activeChars));
    }
  }, [checkboxStates.special]);

  // Обновляем превью пароля при изменении настроек
  useEffect(() => {
    const options = {
      length: passwordLength,
      uppercase: checkboxStates.uppercase,
      lowercase: checkboxStates.lowercase,
      numbers: checkboxStates.numbers,
      specialChars: activeChars,
      useSpecialChars: checkboxStates.special,
    };

    const newPreview = generatePassword(options);
    setPreviewPassword(newPreview);
  }, [passwordLength, checkboxStates, activeChars]);

  const handleWarning = () => {
    setIsWarningVisible(true);
    setTimeout(() => setIsWarningVisible(false), 1000);
  };

  const handleCharClick = (char: string) => {
    if (!checkboxStates.special) {
      handleWarning();
      return;
    }

    const newSet = new Set(activeChars);
    if (newSet.has(char)) {
      newSet.delete(char);
    } else {
      newSet.add(char);
    }
    setActiveChars(newSet);
    setSavedActiveChars(newSet); // Сохраняем состояние при каждом изменении
  };

  const handleSpecialCheckboxChange = () => {
    setCheckboxStates((prev) => ({
      ...prev,
      special: !prev.special,
    }));
  };

  const handleCheckboxChange = (key: keyof typeof checkboxStates) => {
    setCheckboxStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setShowPasswords(false);
    setGeneratedPasswords([]);

    // Небольшая задержка для анимации
    await new Promise((resolve) => setTimeout(resolve, 100));

    const options = {
      length: passwordLength,
      uppercase: checkboxStates.uppercase,
      lowercase: checkboxStates.lowercase,
      numbers: checkboxStates.numbers,
      specialChars: activeChars,
      useSpecialChars: checkboxStates.special,
    };

    const passwords = generatePasswords(options, passwordCount);

    // Анимированное появление паролей
    setShowPasswords(true);
    for (let i = 0; i < passwords.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setGeneratedPasswords((prev) => [...prev, passwords[i]]);
    }

    setIsGenerating(false);
  };

  return (
    <div className="bg-primary-black min-h-[100vh] w-full">
      <div
        className="fixed left-0 right-0 bottom-0 mix-blend-overlay opacity-[85%] z-0
        top-[6.77vw]"
        style={{
          backgroundImage: `url(${marble})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "100vw 100vw",
          backgroundPosition: "center",
          filter: "blur(0.21vw)",
        }}
      />

      <div className="flex justify-center items-start z-30 mt-[0.78vw] gap-[7.91vw] relative">
        <div className="flex flex-col justify-center items-start relative">
          <div className="relative">
            <div className="absolute top-[50%] left-[-1.82vw] w-[21.15vw] h-[0.052vw] bg-primary-green"></div>
            <div className="absolute top-[25%] left-[-1.09vw] w-[0.052vw] h-[2.24vw] bg-primary-green"></div>
            <div className="absolute top-[25%] right-[-2.86vw] w-[0.052vw] h-[2.24vw] bg-primary-green"></div>

            <h1
              className="uppercase font-normal bg-gradient-to-b text-transparent font-Cattedrale bg-clip-text from-primary-white from-[50%] to-primary-green to-[50%]
          text-[2.08vw]"
            >
              Генератор паролей
            </h1>
          </div>
          
          <p className="text-primary-white font-normal font-Troika text-[1.04vw] mt-[0.57vw]">
            ДЛИНА ПАРОЛЯ
          </p>
          <div className="mt-[0.26vw] relative">
            <NumberInput
              value={passwordLength}
              onChange={setPasswordLength}
              maxValue={100}
            />
          </div>
          <p className="text-primary-white font-normal font-Troika text-[1.04vw] mt-[0.57vw]">
            КОЛИЧЕСТВО ПАРОЛЕЙ
          </p>
          <div className="mt-[0.26vw] relative">
            <NumberInput
              value={passwordCount}
              onChange={setPasswordCount}
              maxValue={50}
            />
          </div>
          <p className="text-primary-white font-normal font-Troika text-[1.04vw] mt-[1.04vw]">
            СИМВОЛЫ В ПАРОЛЕ
          </p>

          <div className="flex flex-row justify-start items-center gap-[1.04vw] mt-[0.26vw]">
            <CustomCheckbox
              checked={checkboxStates.uppercase}
              onChange={() => handleCheckboxChange("uppercase")}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[1.04vw] uppercase">
                Прописные Латинские бувы
              </p>
              <p className="text-primary-green font-Cydre font-black text-[0.73vw] uppercase">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-[1.04vw] mt-[0.57vw]">
            <CustomCheckbox
              checked={checkboxStates.lowercase}
              onChange={() => handleCheckboxChange("lowercase")}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[1.04vw] uppercase">
                Строчные Латинские бувы
              </p>
              <p className="text-primary-green font-Cydre font-black text-[0.73vw] lowercase">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-[1.04vw] mt-[0.57vw]">
            <CustomCheckbox
              checked={checkboxStates.numbers}
              onChange={() => handleCheckboxChange("numbers")}
            />
            <div className="flex flex-col justify-center items-start">
              <p className="text-primary-white font-normal font-Troika text-[1.04vw] uppercase">
                Цифры
              </p>
              <p className="text-primary-green font-Cydre font-black text-[0.73vw] lowercase">
                0123456789
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-start items-center gap-[1.04vw] mt-[0.57vw]">
            <CustomCheckbox
              checked={checkboxStates.special}
              onChange={handleSpecialCheckboxChange}
            />
            <div className="flex flex-col justify-center items-start">
              <p
                className={`text-primary-white font-normal font-Troika text-[1.04vw] uppercase
                ${isWarningVisible ? "animate-pulse text-primary-red" : ""}`}
              >
                Специальные символы
              </p>
              <p className="text-primary-green font-Cydre font-black text-[0.73vw] lowercase">
                {"!#$%&()*+./:;=>?@[\\]^`{|}~'\\"}
              </p>
            </div>
          </div>

          <p className="text-primary-white font-normal font-Troika text-[1.04vw] mt-[1.2vw]">
            СИМВОЛЫ НА ВЫБОР
          </p>

          <div className="flex flex-col justify-center items-start gap-[0.42vw] mt-[0.57vw]">
            <div className="flex flex-row justify-center items-center gap-[0.42vw]">
              {SPECIAL_CHARS_ROW1.map((char) => (
                <CharacterButton
                  key={char}
                  char={char}
                  isActive={activeChars.has(char)}
                  isEnabled={checkboxStates.special}
                  onClick={() => handleCharClick(char)}
                  onHover={handleWarning}
                />
              ))}
            </div>
            <div className="flex flex-row justify-center items-center gap-[0.42vw]">
              {SPECIAL_CHARS_ROW2.map((char) => (
                <CharacterButton
                  key={char}
                  char={char}
                  isActive={activeChars.has(char)}
                  isEnabled={checkboxStates.special}
                  onClick={() => handleCharClick(char)}
                  onHover={handleWarning}
                />
              ))}
            </div>
            <div className="flex flex-row justify-center items-center gap-[0.42vw]">
              {SPECIAL_CHARS_ROW3.map((char) => (
                <CharacterButton
                  key={char}
                  char={char}
                  isActive={activeChars.has(char)}
                  isEnabled={checkboxStates.special}
                  onClick={() => handleCharClick(char)}
                  onHover={handleWarning}
                />
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute top-[0.52vw] left-[-1.82vw] w-[21.15vw] h-[0.052vw] bg-primary-green"></div>
            <div className="absolute top-[-0.78vw] left-[-1.09vw] w-[0.052vw] h-[2.24vw] bg-primary-green"></div>
            <div className="absolute top-[-1.04vw] right-[-1.09vw] w-[0.052vw] h-[2.24vw] bg-primary-green"></div>
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className={`bg-primary-red text-primary-white font-Troika font-black 
                text-[1.46vw] uppercase px-[1.04vw] py-[0.52vw] rounded-[0.31vw] mt-[1.46vw]
                transition-all duration-300 ease-in-out
                ${
                  isGenerating
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
            >
              {isGenerating ? (
                <div className="animate-spin rounded-full h-[0.31vw] w-[0.31vw] border-[0.21vw] border-primary-white border-t-transparent" />
              ) : (
                "СГЕНЕРИРОВАТЬ"
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-col justify-center items-center">
            <h2 className="uppercase text-primary-white font-normal font-Troika text-[1.67vw]">
              Будет сгенерирован пароль вида
            </h2>
            <PasswordItem password={previewPassword} />
          </div>

          <div className="flex flex-row justify-start items-center flex-wrap mt-[1.88vw] gap-[0.83vw] w-[48.44vw]">
            {showPasswords &&
              generatedPasswords.map((password, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PasswordItem password={password} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
