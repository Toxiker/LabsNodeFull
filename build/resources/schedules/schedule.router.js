import express from 'express';
import { scheduleService } from './schedule.service.js';
import { priceService } from '../prices/price.service.js';
const router = express.Router();
router.get('/', (_req, res) => {
    res.json(scheduleService.getAll());
});
router.get('/tour/:tourId', (req, res) => {
    const tourId = req.params['tourId'];
    res.json(scheduleService.getByTourId(tourId));
});
router.get('/:id', (req, res, next) => {
    const id = req.params['id'];
    const schedule = scheduleService.getById(id);
    if (!schedule)
        return next(new Error('Schedule not found'));
    res.json(schedule);
});
router.get('/:id/prices', (req, res) => {
    const id = req.params['id'];
    const prices = priceService.getByScheduleId(id);
    res.json(prices);
});
router.post('/', (req, res) => {
    const newSchedule = scheduleService.create(req.body);
    res.status(201).json(newSchedule);
});
router.put('/:id', (req, res, next) => {
    const id = req.params['id'];
    const updatedSchedule = scheduleService.update(id, req.body);
    if (!updatedSchedule)
        return next(new Error('Schedule not found'));
    res.json(updatedSchedule);
});
router.delete('/:id', (req, res, next) => {
    const id = req.params['id'];
    const deleted = scheduleService.delete(id);
    if (!deleted)
        return next(new Error('Schedule not found'));
    res.sendStatus(204);
});
export const scheduleRouter = router;
//# sourceMappingURL=schedule.router.js.map