import fs from 'node:fs';

export const logMessage = async (message) => {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${message}\n`;

    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error('Ошибка записи:', err);
        }
    });
};