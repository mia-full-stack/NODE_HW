// Импортируем модуль fs с промисами
import fs from "node:fs/promises";

async function writeAndReadFile() {
    const fileName = './info.txt';
    const content = 'Записываем текст в файл info.txt... с помощью Node.js! запускаем файлы с помощью команд: node task1.js и node task2.js';
    
    try {
        // Создаем файл info.txt и записываем в него текст
        console.log('📝 Записываем текст в файл info.txt...');
        await fs.writeFile(fileName, content, 'utf8');
        console.log('✅ Текст успешно записан в файл info.txt');
        
        // Прочитаем содержимое файла info.txt
        console.log('📖 Читаем содержимое файла info.txt...');
        const data = await fs.readFile(fileName, 'utf8');
        
        // Выводим содержимое файла на консоль
        console.log('✅ Файл успешно прочитан');
        console.log('📄 Содержимое файла info.txt:');
        console.log('---');
        console.log(data);
        console.log('---');
        
    } catch (error) {
        console.error('❌ Ошибка при работе с файлом:', error.message);
    }
}

// Запускаем функцию
writeAndReadFile();