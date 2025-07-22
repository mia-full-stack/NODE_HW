// Задание 1: Модули для работы со строками

/**
 * Делает первую букву строки заглавной
 * @param str - входная строка
 * @returns строка с заглавной первой буквой
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Переворачивает строку задом наперед
 * @param str - входная строка
 * @returns перевернутая строка
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
// Задание 1: Тестирование строковых утилит
console.log("1. ТЕСТИРОВАНИЕ СТРОКОВЫХ УТИЛИТ");
console.log("================================");

const testStrings = ["hello world", "у меня нет фантазии"];

testStrings.forEach((str) => {
  console.log(`Исходная строка: "${str}"`);
  console.log(`Capitalize: "${capitalize(str)}"`);
  console.log(`Reverse: "${reverseString(str)}"`);
  console.log("---");
});

