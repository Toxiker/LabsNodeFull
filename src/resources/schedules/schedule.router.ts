import express, { Request, Response } from 'express';
import { scheduleService } from './schedule.service.js';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(scheduleService.getAll());
});

router.get('/tour/:tourId', (req: Request, res: Response) => {
  const tourId = req.params['tourId'];
  if (!tourId) {
    res.status(400).send('tourId is required');
    return;
  }
  res.json(scheduleService.getByTourId(tourId));
});

export const scheduleRouter = router;