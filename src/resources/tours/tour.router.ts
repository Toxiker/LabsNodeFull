import express, { Request, Response } from 'express';
import { tourService } from './tour.service.js';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(tourService.getAll());
});

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params['id'];
  if (!id) {
    res.status(400).send('id is required');
    return;
  }
  const tour = tourService.getById(id);
  if (!tour) {
    res.status(404).send('Tour not found');
    return;
  }
  res.json(tour);
});

router.post('/', (req: Request, res: Response) => {
  const newTour = tourService.create(req.body);
  res.status(201).json(newTour);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params['id'];
  if (!id) {
    res.status(400).send('id is required');
    return;
  }
  if (tourService.delete(id)) {
    res.sendStatus(204);
  } else {
    res.status(404).send('Tour not found');
  }
});

export const tourRouter = router;