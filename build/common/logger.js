import winston from 'winston';
import path from 'path';
import fs from 'fs';
const { combine, timestamp, printf, colorize, errors } = winston.format;
// Создаем директорию для логов в корне проекта
const logDir = path.join(process.cwd(), 'logs');
try {
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    console.log('Директория для логов:', logDir);
}
catch (error) {
    console.error('Ошибка при создании директории для логов:', error);
}
const logFormat = printf(({ level, message, timestamp, stack, ...meta }) => {
    let logMessage = `${timestamp} [${level}]: ${message}`;
    if (Object.keys(meta).length > 0) {
        logMessage += `\nMeta: ${JSON.stringify(meta, null, 2)}`;
    }
    if (stack) {
        logMessage += `\nStack: ${stack}`;
    }
    return logMessage;
});
// Создаем транспорты с обработкой ошибок
const createFileTransport = (filename, level) => {
    const filePath = path.join(logDir, filename);
    console.log(`Создание файла лога: ${filePath}`);
    try {
        // Проверяем возможность записи
        fs.accessSync(logDir, fs.constants.W_OK);
        return new winston.transports.File({
            filename: filePath,
            level,
            handleExceptions: true,
            handleRejections: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat)
        });
    }
    catch (error) {
        console.error(`Ошибка при создании транспорта для файла ${filename}:`, error);
        return new winston.transports.Console({
            level,
            format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat)
        });
    }
};
const errorTransport = createFileTransport('error.log', 'error');
const combinedTransport = createFileTransport('combined.log', 'info');
// Создаем логгер
export const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
    transports: [errorTransport, combinedTransport],
    exitOnError: false
});
// Добавляем консольный транспорт для разработки
if (process.env['NODE_ENV'] !== 'production') {
    logger.add(new winston.transports.Console({
        format: combine(colorize(), timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
        handleExceptions: true,
        handleRejections: true
    }));
}
// Тестовый лог при инициализации
logger.info('Logger initialized');
logger.error('Test error log', { error: new Error('Test error') });
//# sourceMappingURL=logger.js.map