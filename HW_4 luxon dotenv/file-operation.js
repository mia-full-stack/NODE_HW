import "dotenv/config";
import path from "node:path"
import * as fs from "node:fs"


const fileName = process.env.FILENAME;
console.log(`Имя файла: ${fileName}`);

const textForFile = `Привет, мир!
Это мой первый файл.
Дата создания: ${new Date()}`;

fs.writeFileSync(fileName, textForFile);
console.log("Файл создан!");

console.log("\n Читаем файл...");

const fileContent = fs.readFileSync(fileName, 'utf-8');
console.log("Файл прочитан!");

console.log("\n Содержимое файла:");
console.log("==================");
console.log(fileContent);
console.log("==================");

console.log("\n Готово!");