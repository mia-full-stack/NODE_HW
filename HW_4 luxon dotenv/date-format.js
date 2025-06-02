import { DateTime } from "luxon";

// Получаем текущую дату и время
const now = DateTime.now();

console.log('Текущая дата и время с использованием Luxon:');
console.log(now);

// Форматирование даты в различных форматах
// 1. Формат DD-MM-YYYY
const format1 = now.toFormat('dd-MM-yyyy');
console.log(`Формат DD-MM-YYYY: ${format1}`);

// 2. Формат MMM Do YY 
const format2 = now.toFormat('MMM d, yy');
console.log(`Формат MMM d, yy: ${format2}`);

// 3. День недели (dddd)
const format3 = now.toFormat('EEEE');
console.log(`День недели (EEEE): ${format3}`);

