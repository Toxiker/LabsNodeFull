import express from 'express';
import { tourRouter } from './resources/tours/tour.router.js';
import { scheduleRouter } from './resources/schedules/schedule.router.js';
import { priceRouter } from './resources/prices/price.router.js';
const app = express();
app.use(express.json());
app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);
app.use('/', (req, res) => {
    res.send('Service is running!');
});
export default app;
//# sourceMappingURL=app.js.map