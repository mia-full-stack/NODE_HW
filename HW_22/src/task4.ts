// Задание 4: Модули для работы с числовыми последовательностями

/**
 * Генерирует последовательность Фибоначчи до указанного числа
 * @param limit - максимальное значение в последовательности
 * @returns массив чисел Фибоначчи
 */
export function generateFibonacci(limit: number): number[] {
  if (limit < 0) return [];
  if (limit === 0) return [0];

  const fibonacci: number[] = [0, 1];

  while (true) {
    const nextFib =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (nextFib > limit) break;
    fibonacci.push(nextFib);
  }

  return fibonacci;
}

/**
 * Генерирует простые числа до указанного числа (включительно)
 * Использует алгоритм "Решето Эратосфена"
 * @param limit - максимальное число для поиска простых чисел
 * @returns массив простых чисел
 */
export function generatePrimeNumbers(limit: number): number[] {
  if (limit < 2) return [];

  // Создаем массив булевых значений
  const isPrime: boolean[] = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 и 1 не являются простыми числами

  // Применяем алгоритм решета Эратосфена
  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      // Отмечаем все кратные i как составные числа
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Собираем все простые числа
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

/**
 * Проверяет, является ли число простым
 * @param num - число для проверки
 * @returns true, если число простое
 */
export function isPrime(num: number): boolean {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

/**
 * Находит n-е число Фибоначчи
 * @param n - позиция в последовательности (начиная с 0)
 * @returns n-е число Фибоначчи
 */
export function getNthFibonacci(n: number): number {
  if (n < 0) throw new Error("Position cannot be negative");
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

/**
 * Генерирует арифметическую прогрессию
 * @param start - начальное значение
 * @param step - шаг прогрессии
 * @param count - количество элементов
 * @returns массив элементов арифметической прогрессии
 */
export function generateArithmeticSequence(
  start: number,
  step: number,
  count: number
): number[] {
  const sequence: number[] = [];
  for (let i = 0; i < count; i++) {
    sequence.push(start + i * step);
  }
  return sequence;
}

/**
 * Генерирует геометрическую прогрессию
 * @param start - начальное значение
 * @param ratio - знаменатель прогрессии
 * @param count - количество элементов
 * @returns массив элементов геометрической прогрессии
 */
export function generateGeometricSequence(
  start: number,
  ratio: number,
  count: number
): number[] {
  const sequence: number[] = [];
  let current = start;
  for (let i = 0; i < count; i++) {
    sequence.push(current);
    current *= ratio;
  }
  return sequence;
}
// Задание 4: Тестирование числовых последовательностей
console.log("\n4. ТЕСТИРОВАНИЕ ЧИСЛОВЫХ ПОСЛЕДОВАТЕЛЬНОСТЕЙ")
console.log("===========================================")

// Генерация последовательности Фибоначчи
const fibLimit = 100
const fibonacci = generateFibonacci(fibLimit)
console.log(`Числа Фибоначчи до ${fibLimit}:`)
console.log(fibonacci.join(", "))

// Генерация простых чисел
const primeLimit = 50
const primes = generatePrimeNumbers(primeLimit)
console.log(`\nПростые числа до ${primeLimit}:`)
console.log(primes.join(", "))

// Тестирование дополнительных функций
console.log("\nДополнительные функции:")
console.log(`10-е число Фибоначчи: ${getNthFibonacci(13)}`)
console.log(`Является ли 21 простым числом: ${isPrime(21)}`)
console.log(`Является ли 47 простым числом: ${isPrime(47)}`)

console.log("\n=== ТЕСТИРОВАНИЕ ЗАВЕРШЕНО ===")
