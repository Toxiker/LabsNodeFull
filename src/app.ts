import express, { Request, Response, NextFunction } from 'express';
import { tourRouter } from './resources/tours/tour.router.js';
import { scheduleRouter } from './resources/schedules/schedule.router.js';
import { priceRouter } from './resources/prices/price.router.js';
import { PORT } from './common/config.js';
import morgan from 'morgan';
import { logger } from './common/logger.js';

const app = express();

app.use(express.json());

// Логирование query и body
morgan.token('query', (req: Request) => JSON.stringify(req.query));
morgan.token('body', (req: Request) => JSON.stringify(req.body));

// Логирование запросов через morgan + winston
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :query :body', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}));

app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);

// Тестовый маршрут для проверки логирования ошибок
app.get('/test-error', (req: Request, res: Response) => {
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
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error('Необработанная ошибка в приложении', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    query: req.query,
    body: req.body,
    timestamp: new Date().toISOString()
  });
  res.status(500).send('Internal Server Error');
});

app.use('/', (req: Request, res: Response) => {
  res.send('Service is running!');
});

export default app;