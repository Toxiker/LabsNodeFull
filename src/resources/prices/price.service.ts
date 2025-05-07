import { priceRepository } from './price.memory.repository.js';

export class PriceService {
  getAllPrices() {
    return priceRepository.findAll();
  }
}

export const priceService = new PriceService();