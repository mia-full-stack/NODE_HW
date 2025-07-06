// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) 
// и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. 
// Используйте строгую типизацию.

console.log("Задание 1");

const greetUser = (name: string): void => {
  console.log(`Привет, ${name}!`);
};

greetUser("Mia");

// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
// Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` 
// и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.

console.log("------------------------------");
console.log("Задание 2");

interface Person {
  name: string;
  age: number;
  city: string;
}

const printPersonInfo = (person: Person): void => {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
  );
};

const person1: Person = {
  name: "Mia",
  age: 47,
  city: "Hildesheim",
};

printPersonInfo(person1);

// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число 
// и возвращает его квадрат. Используйте строгую типизацию.

console.log("------------------------------");
console.log("Задание 3");

const squareNumber = (num: number): number => {
  return num * num;
};

console.log(squareNumber(4));
console.log(squareNumber(-4));

// Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, 
// если число четное, и `false`, если нечетное. Используйте строгую типизацию.

console.log("------------------------------");
console.log("Задание 4");

const isEven = (number: number): boolean => {
  return number % 2 === 0;
};

console.log(isEven(1));
console.log(isEven(6));

// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
// Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` 
// и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.

console.log("------------------------------");
console.log("Задание 5");

interface Student {
  name: string;
  grade: number;
}

const printStudentInfo = (student: Student): string => {
  return `Студент: ${student.name}, Оценка: ${student.grade}`;
};

const student1 = {
  name: "Mia",
  grade: 3,
};

console.log(printStudentInfo(student1));

// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку 
// и выводит её в консоль без возвращаемого значения. Используйте тип `void`.

console.log("------------------------------");
console.log("Задание 6");

const logMessage = (text: string): void => {
    console.log(text);
};

logMessage("Hello World");
