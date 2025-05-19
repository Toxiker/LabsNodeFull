import { priceRepository } from './price.memory.repository.js';
import { Price } from './price.model.js';

export class PriceService {
  getAllPrices(): Price[] {
    return priceRepository.findAll();
  }

  getById(id: string): Price | undefined {
    return priceRepository.findById(id);
  }

  getByScheduleId(scheduleId: string): Price[] {
    return priceRepository.findByScheduleId(scheduleId);
  }

  create(priceData: Partial<Price>): Price {
    return priceRepository.create(priceData);
  }

  update(id: string, priceData: Partial<Price>): Price | null {
    return priceRepository.update(id, priceData);
  }

  delete(id: string): boolean {
    return priceRepository.delete(id);
  }
}

export const priceService = new PriceService();