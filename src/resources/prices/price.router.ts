import express, { Request, Response } from 'express';
import { priceService } from './price.service.js';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(priceService.getAllPrices());
});

router.get('/:id', (req: Request, res: Response) => {
  const id = req.params['id'] as string;
  const price = priceService.getById(id);
  if (!price) return res.status(404).send('Price not found');
  res.json(price);
});

router.post('/', (req: Request, res: Response) => {
  const newPrice = priceService.create(req.body);
  res.status(201).json(newPrice);
});

router.put('/:id', (req: Request, res: Response) => {
  const id = req.params['id'] as string;
  const updatedPrice = priceService.update(id, req.body);
  if (!updatedPrice) return res.status(404).send('Price not found');
  res.json(updatedPrice);
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params['id'] as string;
  const deleted = priceService.delete(id);
  if (!deleted) return res.status(404).send('Price not found');
  res.sendStatus(204);
});

export const priceRouter = router;