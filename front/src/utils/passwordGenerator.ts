interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  specialChars: Set<string>;
  useSpecialChars: boolean;
}

const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';

export const generatePassword = (options: PasswordOptions): string => {
  let charset = '';
  
  if (options.uppercase) charset += UPPERCASE_CHARS;
  if (options.lowercase) charset += LOWERCASE_CHARS;
  if (options.numbers) charset += NUMBER_CHARS;
  if (options.useSpecialChars && options.specialChars.size > 0) {
    charset += Array.from(options.specialChars).join('');
  }

  // Если ни один набор символов не выбран, используем все
  if (charset === '') {
    charset = UPPERCASE_CHARS + LOWERCASE_CHARS + NUMBER_CHARS;
  }

  let password = '';
  const charsetLength = charset.length;

  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    password += charset[randomIndex];
  }

  return password;
};

export const generatePasswords = (
  options: PasswordOptions,
  count: number
): string[] => {
  return Array.from({ length: count }, () => generatePassword(options));
}; 