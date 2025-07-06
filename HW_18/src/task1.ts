// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.



type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

const adminUser: Admin & User = {
  name: "Mia",
  email: "mia@gmail.com",
  permissions: ["read", "write", "delete"],
};
console.log(adminUser);