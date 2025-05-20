import express from 'express';
import { tourService } from './tour.service.js';
const router = express.Router();
router.get('/', (_req, res) => {
    res.json(tourService.getAll());
});
router.get('/:id', (req, res, next) => {
    const id = req.params['id'];
    const tour = tourService.getById(id);
    if (!tour)
        return next(new Error('Tour not found'));
    res.json(tour);
});
router.get('/:id/schedules', (req, res) => {
    const id = req.params['id'];
    const schedules = tourService.getSchedulesByTourId(id);
    res.json(schedules);
});
router.post('/', (req, res) => {
    const newTour = tourService.create(req.body);
    res.status(201).json(newTour);
});
router.put('/:id', (req, res, next) => {
    const id = req.params['id'];
    const updatedTour = tourService.update(id, req.body);
    if (!updatedTour)
        return next(new Error('Tour not found'));
    res.json(updatedTour);
});
router.delete('/:id', (req, res, next) => {
    const id = req.params['id'];
    if (tourService.delete(id)) {
        res.sendStatus(204);
    }
    else {
        next(new Error('Tour not found'));
    }
});
export const tourRouter = router;
//# sourceMappingURL=tour.router.js.map