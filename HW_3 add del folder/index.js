import fs from "node:fs/promises";

async function createFolder(folderPath) {
    try {
        await fs.mkdir(folderPath, { recursive: true });
        console.log(`✅ Папка "${folderPath}" создана`);
        return true;
    } catch (err) {
        console.error(`❌ Ошибка создания папки: ${err.message}`);
        return false;
    }
}

async function deleteFolder(folderPath) {
    try {
        await fs.rm(folderPath, { recursive: true, force: true });
        console.log(`✅ Папка "${folderPath}" удалена`);
        return true;
    } catch (err) {
        console.error(`❌ Ошибка удаления папки: ${err.message}`);
        return false;
    }
}

async function folderLifecycle() {
    const folderPath = "./myTestFolder";
    
    console.log("🚀 Начинаем операции с папкой...");
    
    // Создаем папку
    const created = await createFolder(folderPath);
    
    if (created) {
        console.log("⏳ Ждем 5 секунды перед удалением...");
        
        // Используем Promise с setTimeout для корректной работы с async/await
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Удаляем папку
        await deleteFolder(folderPath);
    }
    
    console.log("✨ Операции завершены!");
}

// Запускаем
folderLifecycle();


// const result = await createFolder("./myTestFolder");
// const creatMessage = result ? "Моя папка создана" : "Давай создадим папку";
// console.log(creatMessage);

// setTimeout(()=>{
//     deleteFolder();
// },5000)