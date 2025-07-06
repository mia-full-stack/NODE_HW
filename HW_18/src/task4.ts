// Задание 4
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля 
// `name` (строка) 
// и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, 
// которая принимает этот массив и возвращает массив зарплат всех сотрудников.

interface Employee {
  name: string;
  salary: number;
}

export const employees: Employee[] = [
  { name: "Mia", salary: 8000 },
  { name: "Alex", salary: 5000 },
  { name: "Miku", salary: 6500 }
];

export function getSalaries(employeeList: Employee[]): number[] {
  return employeeList.map(emp => emp.salary);
}

const salaries = getSalaries(employees);
console.log(salaries);