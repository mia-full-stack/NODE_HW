// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: 
// `str1` и `str2` (оба строки) и возвращает их объединение.

interface ConcatStrings {
  (str1: string, str2: string, str3: string): string;
}

export const concatStrings: ConcatStrings = (str1, str2, str3) => {
  return str1 + str2 + str3;
};

const result = concatStrings("Hello, ", "Mia!", " I love you!");
console.log(result);