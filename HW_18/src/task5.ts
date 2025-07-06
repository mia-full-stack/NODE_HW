// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` 
// и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, 
// которая выводит полное имя студента и его оценку.

interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

export const student: Student = {
  firstName: "Mia",
  lastName: "Pak",
  grade: 88
};

export function printStudentInfo(student: Student): void {
  console.log(`Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}

printStudentInfo(student);