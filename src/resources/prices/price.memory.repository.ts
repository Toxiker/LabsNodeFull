import { Price, IPrice } from './price.model';

const prices: IPrice[] = [];

export class PriceRepository {
  findAll(): IPrice[] {
    return [...prices];
  }
  
  create(priceData: Omit<IPrice, 'id' | 'createdAt' | 'updatedAt'>): IPrice {
    const newPrice = new Price(priceData);
    prices.push(newPrice);
    return newPrice;
  }
}

export const priceRepository = new PriceRepository();