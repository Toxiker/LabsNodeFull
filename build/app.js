import express from 'express';
import { tourRouter } from './resources/tours/tour.router.js';
import { scheduleRouter } from './resources/schedules/schedule.router.js';
import { priceRouter } from './resources/prices/price.router.js';
import morgan from 'morgan';
import { logger } from './common/logger.js';
const app = express();
app.use(express.json());
// Логирование query и body
morgan.token('query', (req) => JSON.stringify(req.query));
morgan.token('body', (req) => JSON.stringify(req.body));
// Логирование запросов через morgan + winston
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :query :body', {
    stream: {
        write: (message) => logger.info(message.trim())
    }
}));
app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);
// Тестовый маршрут для проверки логирования ошибок
app.get('/test-error', (req, res) => {
    const error = new Error('Тестовая ошибка для проверки логирования');
    logger.error('Ошибка в тестовом маршруте', {
        error: error.message,
        stack: error.stack,
        path: req.path,
        method: req.method,
        query: req.query,
        body: req.body,
        timestamp: new Date().toISOString()
    });
    res.status(500).send('Test error logged');
});
// Middleware для обработки ошибок
app.use((err, _req, res, _next) => {
    logger.error('Необработанная ошибка в приложении', {
        error: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
    });
    res.status(500).send('Internal Server Error');
});
app.use('/', (_req, res) => {
    res.send('Service is running!');
});
export default app;
//# sourceMappingURL=app.js.map