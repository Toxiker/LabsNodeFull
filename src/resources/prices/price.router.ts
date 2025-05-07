import express, { Request, Response } from 'express';
import { priceService } from './price.service.js';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.json(priceService.getAllPrices());
});

export const priceRouter = router;