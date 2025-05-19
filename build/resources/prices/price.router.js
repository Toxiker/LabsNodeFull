import express from 'express';
import { priceService } from './price.service.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.json(priceService.getAllPrices());
});
router.get('/:id', (req, res) => {
    const id = req.params['id'];
    const price = priceService.getById(id);
    if (!price)
        return res.status(404).send('Price not found');
    res.json(price);
});
router.post('/', (req, res) => {
    const newPrice = priceService.create(req.body);
    res.status(201).json(newPrice);
});
router.put('/:id', (req, res) => {
    const id = req.params['id'];
    const updatedPrice = priceService.update(id, req.body);
    if (!updatedPrice)
        return res.status(404).send('Price not found');
    res.json(updatedPrice);
});
router.delete('/:id', (req, res) => {
    const id = req.params['id'];
    const deleted = priceService.delete(id);
    if (!deleted)
        return res.status(404).send('Price not found');
    res.sendStatus(204);
});
export const priceRouter = router;
//# sourceMappingURL=price.router.js.map