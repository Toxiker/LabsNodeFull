import { priceRepository } from './price.memory.repository.js';

export class PriceService {
  getAllPrices() {
    return priceRepository.findAll();
  }

  getById(id) {
    return priceRepository.findById(id);
  }

  getByScheduleId(scheduleId) {
    return priceRepository.findByScheduleId(scheduleId);
  }

  create(priceData) {
    return priceRepository.create(priceData);
  }

  update(id, priceData) {
    return priceRepository.update(id, priceData);
  }

  delete(id) {
    return priceRepository.delete(id);
  }
}

export const priceService = new PriceService();