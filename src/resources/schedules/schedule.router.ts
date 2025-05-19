import express, { Request, Response } from 'express';
import { scheduleService } from './schedule.service.js';
import { priceService } from '../prices/price.service.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(scheduleService.getAll());
});

router.get('/tour/:tourId', (req: Request, res: Response) => {
  const tourId = req.params['tourId'] as string;
  res.json(scheduleService.getByTourId(tourId));
});

router.get('/:id', (req: Request, res: Response, next) => {
  const id = req.params['id'] as string;
  const schedule = scheduleService.getById(id);
  if (!schedule) return next(new Error('Schedule not found'));
  res.json(schedule);
});

router.get('/:id/prices', (req: Request, res: Response) => {
  const id = req.params['id'] as string;
  const prices = priceService.getByScheduleId(id);
  res.json(prices);
});

router.post('/', (req: Request, res: Response) => {
  const newSchedule = scheduleService.create(req.body);
  res.status(201).json(newSchedule);
});

router.put('/:id', (req: Request, res: Response, next) => {
  const id = req.params['id'] as string;
  const updatedSchedule = scheduleService.update(id, req.body);
  if (!updatedSchedule) return next(new Error('Schedule not found'));
  res.json(updatedSchedule);
});

router.delete('/:id', (req: Request, res: Response, next) => {
  const id = req.params['id'] as string;
  const deleted = scheduleService.delete(id);
  if (!deleted) return next(new Error('Schedule not found'));
  res.sendStatus(204);
});

export const scheduleRouter = router;