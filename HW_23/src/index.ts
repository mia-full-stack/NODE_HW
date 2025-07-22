// ===== ЗАДАНИЕ 1: Обработка цепочки промисов с async/await =====

interface TaskResult {
  taskId: string;
  message: string;
  duration: number;
  timestamp: Date;
}

/**
 * Создает промис с заданной задержкой и возвращает информацию о выполнении
 */
const createDelayedPromise = (
  delay: number,
  taskId: string
): Promise<TaskResult> => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    setTimeout(() => {
      resolve({
        taskId,
        message: `Задача ${taskId} выполнена успешно`,
        duration: Date.now() - startTime,
        timestamp: new Date(),
      });
    }, delay);
  });
};

/**
 * Выполняет промисы последовательно с логированием прогресса
 */
const executePromisesSequentially = async (): Promise<TaskResult[]> => {
  console.log(
    "🚀 Задание 1: Начинаем последовательное выполнение промисов...\n"
  );

  const results: TaskResult[] = [];
  const tasks = [
    { delay: 1000, id: "A" },
    { delay: 3000, id: "B" },
    { delay: 2000, id: "C" },
  ];

  for (const task of tasks) {
    console.log(`⏳ Запускаем задачу ${task.id} (${task.delay}мс)...`);
    const result = await createDelayedPromise(task.delay, task.id);
    console.log(`✅ ${result.message} за ${result.duration}мс`);
    results.push(result);
  }

  console.log("\n📊 Все задачи выполнены последовательно!\n");
  return results;
};

// ===== ЗАДАНИЕ 2: Асинхронная обработка данных из массива =====

/**
 * Асинхронно преобразует строку в верхний регистр с случайной задержкой
 */
const processStringAsync = (str: string, index: number): Promise<string> => {
  const delay = Math.random() * 1000 + 500; // 500-1500мс

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = str.toUpperCase();
      console.log(
        `  📝 Строка "${str}" → "${result}" (${Math.round(delay)}мс)`
      );
      resolve(result);
    }, delay);
  });
};

/**
 * Обрабатывает массив строк параллельно
 */
const processStringsInParallel = async (
  strings: string[]
): Promise<string[]> => {
  console.log("🚀 Задание 2: Параллельная обработка строк...");
  console.log(`📥 Входные данные: [${strings.join(", ")}]\n`);

  const startTime = Date.now();

  const promises = strings.map((str, index) => processStringAsync(str, index));
  const results = await Promise.all(promises);

  const totalTime = Date.now() - startTime;
  console.log(`\n📤 Результат: [${results.join(", ")}]`);
  console.log(`⏱️  Общее время: ${totalTime}мс\n`);

  return results;
};

// ===== ЗАДАНИЕ 3: Обработка ошибок в параллельных промисах =====

type PromiseResult<T> = {
  success: boolean;
  data?: T;
  error?: string;
  promiseId: string;
};

/**
 * Создает промис, который может завершиться успешно или с ошибкой
 */
const createTestPromise = (
  id: string,
  delay: number,
  shouldReject = false
): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`Промис ${id} намеренно завершился с ошибкой`));
      } else {
        resolve(`Промис ${id} выполнен успешно`);
      }
    }, delay);
  });
};

/**
 * Выполняет промисы параллельно с обработкой ошибок
 */
const handleParallelPromisesWithErrors = async (): Promise<void> => {
  console.log("🚀 Задание 3: Обработка ошибок в параллельных промисах...\n");

  const promises = [
    createTestPromise("1", 1000, false),
    createTestPromise("2", 800, true), // Этот промис завершится с ошибкой
    createTestPromise("3", 1200, false),
  ];

  try {
    console.log("⏳ Запускаем три промиса параллельно...");
    const results = await Promise.all(promises);
    console.log("✅ Все промисы выполнены успешно:", results);
  } catch (error) {
    console.log(
      "❌ Поймана ошибка:",
      error instanceof Error ? error.message : error
    );
    console.log("💡 Promise.all прерывается при первой ошибке\n");
  }

  // Альтернативный подход с Promise.allSettled для получения всех результатов
  console.log(
    "🔄 Используем Promise.allSettled для получения всех результатов:"
  );
  const settledResults = await Promise.allSettled(promises);

  settledResults.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`✅ Промис ${index + 1}: ${result.value}`);
    } else {
      console.log(`❌ Промис ${index + 1}: ${result.reason.message}`);
    }
  });
  console.log();
};

// ===== ЗАДАНИЕ 4: Динамическое время выполнения =====

interface DynamicTaskResult {
  originalDelay: number;
  actualDuration: number;
  message: string;
  index: number;
}

/**
 * Создает промис с точным измерением времени выполнения
 */
const createTimedPromise = (
  delay: number,
  index: number
): Promise<DynamicTaskResult> => {
  const startTime = Date.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      const actualDuration = Date.now() - startTime;
      resolve({
        originalDelay: delay,
        actualDuration,
        message: `Промис ${index + 1} завершен`,
        index,
      });
    }, delay);
  });
};

/**
 * Выполняет промисы с динамическим временем выполнения
 */
const executeDynamicTimingPromises = async (
  delays: number[]
): Promise<DynamicTaskResult[]> => {
  console.log("🚀 Задание 4: Промисы с динамическим временем выполнения...");
  console.log(`📥 Задержки: [${delays.join(", ")}] мс\n`);

  const startTime = Date.now();
  console.log("⏳ Запускаем все промисы параллельно...");

  const promises = delays.map((delay, index) =>
    createTimedPromise(delay, index)
  );
  const results = await Promise.all(promises);

  const totalTime = Date.now() - startTime;
  const maxDelay = Math.max(...delays);

  console.log("\n📊 Результаты выполнения:");
  results.forEach((result) => {
    console.log(
      `  ${result.message}: ожидалось ${result.originalDelay}мс, фактически ${result.actualDuration}мс`
    );
  });

  console.log(`\n⏱️  Общее время выполнения: ${totalTime}мс`);
  console.log(`🎯 Максимальная задержка: ${maxDelay}мс`);
  console.log(`💡 Разница: ${totalTime - maxDelay}мс (накладные расходы)\n`);

  return results;
};

// ===== ГЛАВНАЯ ФУНКЦИЯ ВЫПОЛНЕНИЯ ВСЕХ ЗАДАНИЙ =====

const runAllTasks = async (): Promise<void> => {
  console.log("🎓 ДОМАШНЯЯ РАБОТА: TypeScript Async/Await\n");
  console.log("=".repeat(60) + "\n");

  try {
    // Задание 1
    await executePromisesSequentially();

    console.log("=".repeat(60) + "\n");

    // Задание 2
    const testStrings = [
      "typescript",
      "promises",
      "async",
      "await",
      "parallel",
    ];
    await processStringsInParallel(testStrings);

    console.log("=".repeat(60) + "\n");

    // Задание 3
    await handleParallelPromisesWithErrors();

    console.log("=".repeat(60) + "\n");

    // Задание 4
    const testDelays = [1000, 2000, 1500, 4000, 500];
    await executeDynamicTimingPromises(testDelays);

    console.log("🎉 Все задания выполнены успешно!");
  } catch (error) {
    console.error("💥 Критическая ошибка при выполнении заданий:", error);
  }
};

// Запуск всех заданий
runAllTasks();
