// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:
// `price` (число)
// `quantity` (число)
// `discount` (число, по умолчанию равен 0)
// Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.

console.log("Задание 1");

const calculateTotal = (
  price: number,
  quantity: number,
  discount: number = 0
): number => {
  return (price - (price * discount) / 100) * quantity;
};

console.log(calculateTotal(30, 5, 10));

// Задание 2
// Использование Union типов
// Создайте переменную `id`, которая может быть либо строкой, либо числом.
// Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.

console.log("Задание 2");

let id: string | number;

const displayId = (id: string | number): string | number => {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id * 10;
  }
};

console.log(displayId(34));
console.log(displayId("thirty four"));

// Задание 3
// Объявление и типизация массивов объектов
// оздайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:
// `orderId` (строка)
// `amount` (число)
// `status` (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, и возвращает массив заказов, соответствующих указанному статусу.

console.log("Задание 3");

type Status = "pending" | "shipped" | "delivered";

type Order = {
  orderId: string;
  amount: number;
  status: Status;
};

const orders: Order[] = [
  {
    orderId: "012345SD",
    amount: 4250,
    status: "shipped",
  },
  {
    orderId: "012345TE",
    amount: 500,
    status: "pending",
  },
  {
    orderId: "012345FV",
    amount: 450,
    status: "shipped",
  },
  {
    orderId: "012345DR",
    amount: 6300,
    status: "delivered",
  },
];

const filterOrdersByStatus = (array: Order[], status: Status): Order[] => {
  return array.filter((item) => item.status === status);
};

console.log(filterOrdersByStatus(orders, "pending"));
console.log(filterOrdersByStatus(orders, "shipped"));
console.log(filterOrdersByStatus(orders, "delivered"));

// Задание 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:
// название товара (строка)
// его цену (число)
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, а значение — количество на складе) и кортеж `productInfo`, обновляет количество товара в объекте `inventory` и возвращает обновленный объект.

console.log("Задание 4");

// type ProductInfo = [string, number, number];
type ProductInfo = [name: string, price: number, quantity: number];

interface IInventory {
  [key: string]: number;
}

const updateStock = (
  inventory: IInventory,
  productInfo: ProductInfo
): IInventory => {
  const [name, price, quantity] = productInfo;
  if (inventory[name]) {
    inventory[name] = quantity;
  }
  return inventory;
};

console.log(updateStock({ apple: 5 }, ["apple", 3.95, 300]));
console.log(updateStock({ iceckeam: 4 }, ["iceckeam", 1.15, 500]));
console.log(updateStock({ wather: 8 }, ["wather", 1.25, 10000]));
