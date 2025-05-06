import express from 'express';
import { scheduleService } from './schedule.service.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(scheduleService.getAll());
});

router.get('/tour/:tourId', (req, res) => {
  res.json(scheduleService.getByTourId(req.params.tourId));
});

export const scheduleRouter = router;