import express from 'express';
import { priceService } from './price.service.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(priceService.getAllPrices());
});

export const priceRouter = router;