// Задание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface Product {
  name: string;
  price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

export const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price * (1 - discount / 100);
};

const discountedPrice = calculateDiscount({ name: "Laptop", price: 1800 }, 25);
console.log(discountedPrice);