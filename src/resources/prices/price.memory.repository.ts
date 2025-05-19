import { Price } from './price.model.js';

const prices: Price[] = [];

export class PriceRepository {
  findAll(): Price[] {
    return [...prices];
  }
  
  create(priceData: Partial<Price>): Price {
    const newPrice = new Price(priceData);
    prices.push(newPrice);
    return newPrice;
  }

  findById(id: string): Price | undefined {
    return prices.find(p => p.id === id);
  }

  findByScheduleId(scheduleId: string): Price[] {
    return prices.filter(p => p.scheduleId === scheduleId);
  }

  update(id: string, priceData: Partial<Price>): Price | null {
    const price = this.findById(id);
    if (!price) return null;
    Object.assign(price, priceData, { updatedAt: new Date() });
    return price;
  }

  delete(id: string): boolean {
    const index = prices.findIndex(p => p.id === id);
    if (index === -1) return false;
    prices.splice(index, 1);
    return true;
  }

  deleteByScheduleId(scheduleId: string): boolean {
    let deleted = false;
    for (let i = prices.length - 1; i >= 0; i--) {
      if (prices[i]?.scheduleId === scheduleId) {
        prices.splice(i, 1);
        deleted = true;
      }
    }
    return deleted;
  }
}

export const priceRepository = new PriceRepository();