// Задание 1: Стрелочная функция для суммы четных чисел
const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter(num => num % 2 === 0) // Фильтруем четные числа
    .reduce((sum, num) => sum + num, 0); // Суммируем их
};

// Пример использования:
console.log("Задание 1");

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 8])); 

// Задание 2: Интерфейс StringToBooleanFunction
interface StringToBooleanFunction {
  (str: string): boolean;
}

// Реализация функции, проверяющей пустую строку
const isEmpty: StringToBooleanFunction = (str: string): boolean => {
  return str.trim().length === 0;
};

// Пример использования:
console.log("Задание 2");
console.log(isEmpty("")); // true
console.log(isEmpty("   ")); // true
console.log(isEmpty("hello")); // false



// Задание 3: Тип CompareStrings
type CompareStrings = (str1: string, str2: string) => boolean;

// Функция для проверки равенства строк
const areStringsEqual: CompareStrings = (str1: string, str2: string): boolean => {
  return str1 === str2;
};

// Альтернативная функция - проверка равенства без учета регистра
const areStringsEqualIgnoreCase: CompareStrings = (str1: string, str2: string): boolean => {
  return str1.toLowerCase() === str2.toLowerCase();
};

// Примеры использования:
console.log("Задание 3");
console.log(areStringsEqual("hello", "hello")); // true
console.log(areStringsEqual("hello", "Hello")); // false
console.log(areStringsEqualIgnoreCase("hello", "Hello")); // true



// Задание 4: Обобщенная функция getLastElement
function getLastElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[array.length - 1] : undefined;
}

// Примеры использования:
console.log("Задание 4");
console.log(getLastElement([1, 5, 3, 8])); 
console.log(getLastElement(["a", "b", "f"])); 
console.log(getLastElement<boolean>([])); // undefined




// Задание 5: Обобщенная функция makeTriple
function makeTriple<T>(first: T, second: T, third: T): T[] {
  return [first, second, third];
}

// Примеры использования:
console.log("Задание 5");
console.log(makeTriple(1, 5, 3));
console.log(makeTriple("a", "b", "f"));
console.log(makeTriple(true, false, false));

// Дополнительные примеры для демонстрации типизации
const numberTriple = makeTriple<number>(10, 20, 30);
const stringTriple = makeTriple<string>("hello", "world", "!");