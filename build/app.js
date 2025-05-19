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
// Middleware для обработки ошибок
app.use((err, req, res, next) => {
    logger.error(err.stack || err.message);
    res.status(500).send('Internal Server Error');
});
app.use('/', (req, res) => {
    res.send('Service is running!');
});
app.get('/error', (req, res) => {
    throw new Error('Test error for logger');
});
export default app;
//# sourceMappingURL=app.js.map