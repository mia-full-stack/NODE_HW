// Импортируем модуль fs с промисами
import fs from "node:fs/promises";

async function createAndDeleteFolder() {
    const folderName = './myFolder';
    
    try {
        // Создаем каталог с именем myFolder
        console.log('📁 Создаем каталог myFolder...');
        await fs.mkdir(folderName);
        console.log('✅ Каталог myFolder успешно создан');
        
        // Ждем 5 секунд для наглядности
        console.log('⏳ Ждем 5 секунд перед удалением...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Удаляем каталог myFolder
        console.log('🗑️ Удаляем каталог myFolder...');
        await fs.rmdir(folderName);
        console.log('✅ Каталог myFolder успешно удален');
        
    } catch (error) {
        // Обрабатываем различные типы ошибок
        if (error.code === 'EEXIST') {
            console.log('⚠️ Каталог уже существует');
        } else if (error.code === 'ENOENT') {
            console.log('⚠️ Каталог не найден для удаления');
        } else {
            console.error('❌ Ошибка:', error.message);
        }
    }
}

// Запускаем функцию
createAndDeleteFolder();