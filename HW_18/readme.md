Домашняя работа 18

Задание 1
Объединение и пересечение типов
Создайте два типа: `Admin` и `User`.
Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

Задание 2
Вложенные объекты и опциональные поля
Создайте объект `Car` с полями `make` (строка), `model` (строка), и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
Добавьте опциональное поле `year` (число) для года выпуска машины.
Напишите функцию, которая выводит информацию о машине.

Задание 3
Интерфейс для функции с объектом
Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
Функция должна возвращать новую цену продукта с учетом скидки.

Задание 4
Массив объектов и функции
Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив и возвращает массив зарплат всех сотрудников.

Задание 5
Наследование интерфейсов и работа с объектами
Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента и его оценку.

Задание 6
Интерфейс для функции с несколькими параметрами
Создайте интерфейс для функции `concatStrings`, которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.

Реализуйте эту функцию и протестируйте её.

Commands:
1. npm init -y
2. npm i nodemon ts-node typescript -D
3. npm run build
4. npm run look 

or dev
1. npm i
2. npm start