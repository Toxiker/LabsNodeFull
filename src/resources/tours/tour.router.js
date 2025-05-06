import express from 'express';
import { tourService } from './tour.service.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(tourService.getAll());
});

router.get('/:id', (req, res) => {
  const tour = tourService.getById(req.params.id);
  if (!tour) return res.status(404).send('Tour not found');
  res.json(tour);
});

router.post('/', (req, res) => {
  const newTour = tourService.create(req.body);
  res.status(201).json(newTour);
});

router.delete('/:id', (req, res) => {
  tourService.delete(req.params.id)
    ? res.sendStatus(204)
    : res.status(404).send('Tour not found');
});

export const tourRouter = router;