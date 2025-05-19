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

  findById(id) {
    return prices.find(p => p.id === id);
  }

  findByScheduleId(scheduleId) {
    return prices.filter(p => p.scheduleId === scheduleId);
  }

  update(id, priceData) {
    const price = this.findById(id);
    if (!price) return null;
    Object.assign(price, priceData, { updatedAt: new Date() });
    return price;
  }

  delete(id) {
    const index = prices.findIndex(p => p.id === id);
    if (index === -1) return false;
    prices.splice(index, 1);
    return true;
  }

  deleteByScheduleId(scheduleId) {
    let deleted = false;
    for (let i = prices.length - 1; i >= 0; i--) {
      if (prices[i].scheduleId === scheduleId) {
        prices.splice(i, 1);
        deleted = true;
      }
    }
    return deleted;
  }
}

export const priceRepository = new PriceRepository();