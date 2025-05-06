import { Price } from './price.model.js';

const prices = [];

export class PriceRepository {
  findAll() {
    return [...prices];
  }
  
  create(priceData) {
    const newPrice = new Price(priceData);
    prices.push(newPrice);
    return newPrice;
  }
}

export const priceRepository = new PriceRepository();