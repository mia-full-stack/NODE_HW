import { EventEmitter } from 'events';
import fs from 'node:fs';

// Создаем экземпляр EventEmitter
const chatEmitter = new EventEmitter();

// Имя файла для сохранения чата
const CHAT_FILE = 'chat.txt';

// Функция для проверки существования файла
function fileExists(filename) {
    try {
        fs.accessSync(filename);
        return true;
    } catch {
        return false;
    }
}

// Функция для инициализации файла чата
function initializeChatFile() {
    const timestamp = new Date().toLocaleString('ru-RU');
    const header = `=== Новая сессия чата - ${timestamp} ===\n\n`;
    
    try {
        if (fileExists(CHAT_FILE)) {
            // Если файл существует, добавляем новую сессию
            fs.appendFileSync(CHAT_FILE, `\n${header}`);
        } else {
            // Если файла нет, создаем новый
            fs.writeFileSync(CHAT_FILE, header);
        }
        
        console.log(`Чат будет сохранен в файл: ${CHAT_FILE}`);
    } catch (error) {
        console.error('Ошибка при инициализации файла чата:', error.message);
    }
}

// Функция для сохранения сообщения в файл (асинхронно)
function saveMessageToFile(formattedMessage) {
    fs.appendFile(CHAT_FILE, formattedMessage + '\n', (error) => {
        if (error) {
            console.error('Ошибка при сохранении в файл:', error.message);
        }
    });
}

// Функция для отправки сообщения
function sendMessage(username, message, emitter) {
    const timestamp = new Date().toLocaleTimeString('ru-RU');
    
    // Генерируем событие 'message' с данными пользователя и временем
    emitter.emit('message', { username, message, timestamp });
}

// Регистрируем обработчик для события 'message'
chatEmitter.on('message', (data) => {
    const formattedMessage = `[${data.timestamp}] ${data.username}: ${data.message}`;
    
    // Выводим в консоль
    console.log(formattedMessage);
    
    // Асинхронно сохраняем в файл
    saveMessageToFile(formattedMessage);
});

// Обработчик для системных сообщений
chatEmitter.on('system', (message) => {
    const timestamp = new Date().toLocaleTimeString('ru-RU');
    const formattedMessage = `[${timestamp}] [СИСТЕМА]: ${message}`;
    
    // Выводим в консоль
    console.log(formattedMessage);
    
    // Асинхронно сохраняем в файл
    saveMessageToFile(formattedMessage);
});

// Функция для завершения сессии чата
function endChatSession() {
    const timestamp = new Date().toLocaleString('ru-RU');
    const footer = `\n=== Сессия завершена - ${timestamp} ===\n`;
    
    fs.appendFile(CHAT_FILE, footer, (error) => {
        if (error) {
            console.error('Ошибка при завершении сессии:', error.message);
        } else {
            console.log(`\nИстория чата сохранена в файл: ${CHAT_FILE}`);
        }
    });
}

// Инициализируем файл чата
initializeChatFile();

console.log('=== Чат-приложение запущено ===\n');

// Отправляем несколько сообщений от разных пользователей
sendMessage('Алиса', 'Привет всем!', chatEmitter);
sendMessage('Боб', 'Как дела?', chatEmitter);
sendMessage('Алиса', 'Отлично! А у тебя?', chatEmitter);

// Системное сообщение
chatEmitter.emit('system', 'Новый пользователь присоединился к чату');

sendMessage('Чарли', 'Привет, ребята!', chatEmitter);
sendMessage('Боб', 'Все хорошо, спасибо!', chatEmitter);
sendMessage('Алиса', 'Рада слышать 😊', chatEmitter);

// Еще одно системное сообщение
chatEmitter.emit('system', 'Пользователь Чарли покинул чат');

console.log('\n=== Чат завершен ===');

// Завершаем сессию с небольшой задержкой для завершения записи
setTimeout(() => {
    endChatSession();
}, 100);