import express, { Request, Response } from 'express';
import { tourService } from './tour.service.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(tourService.getAll());
});

router.get('/:id', (req: Request, res: Response, next) => {
  const id = req.params['id'] as string;
  const tour = tourService.getById(id);
  if (!tour) return next(new Error('Tour not found'));
  res.json(tour);
});

router.get('/:id/schedules', (req: Request, res: Response) => {
  const id = req.params['id'] as string;
  const schedules = tourService.getSchedulesByTourId(id);
  res.json(schedules);
});

router.post('/', (req: Request, res: Response) => {
  const newTour = tourService.create(req.body);
  res.status(201).json(newTour);
});

router.put('/:id', (req: Request, res: Response, next) => {
  const id = req.params['id'] as string;
  const updatedTour = tourService.update(id, req.body);
  if (!updatedTour) return next(new Error('Tour not found'));
  res.json(updatedTour);
});

router.delete('/:id', (req: Request, res: Response, next) => {
  const id = req.params['id'] as string;
  if (tourService.delete(id)) {
    res.sendStatus(204);
  } else {
    next(new Error('Tour not found'));
  }
});

export const tourRouter = router;