import express from 'express';
import { scheduleService } from './schedule.service.js';
import { priceService } from '../prices/price.service.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(scheduleService.getAll());
});

router.get('/tour/:tourId', (req, res) => {
  res.json(scheduleService.getByTourId(req.params.tourId));
});

router.get('/:id', (req, res) => {
  const schedule = scheduleService.getById(req.params.id);
  if (!schedule) return res.status(404).send('Schedule not found');
  res.json(schedule);
});

router.get('/:id/prices', (req, res) => {
  const prices = priceService.getByScheduleId(req.params.id);
  res.json(prices);
});

router.post('/', (req, res) => {
  const newSchedule = scheduleService.create(req.body);
  res.status(201).json(newSchedule);
});

router.put('/:id', (req, res) => {
  const updatedSchedule = scheduleService.update(req.params.id, req.body);
  if (!updatedSchedule) return res.status(404).send('Schedule not found');
  res.json(updatedSchedule);
});

router.delete('/:id', (req, res) => {
  const deleted = scheduleService.delete(req.params.id);
  if (!deleted) return res.status(404).send('Schedule not found');
  res.sendStatus(204);
});

export const scheduleRouter = router;