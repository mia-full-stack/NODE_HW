
// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

export const myCar: Car = {
  make: "KIA",
  model: "Sportage",
  engine: {
    type: "Diesel",
    horsepower: 116
  },
  year: 2012
};

export function printCarInfo(car: Car): void {
  console.log(`Make: ${car.make}, Model: ${car.model}`);
  console.log(`Engine: ${car.engine.type}, ${car.engine.horsepower} HP`);
  if (car.year) {
    console.log(`Year: ${car.year}`);
  }
}

printCarInfo(myCar);