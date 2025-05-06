import { tourRepository } from './tour.memory.repository.js';

export class TourService {
  getAll() {
    return tourRepository.findAll();
  }

  getById(id) {
    return tourRepository.findById(id);
  }

  create(tourData) {
    return tourRepository.create(tourData);
  }

  delete(id) {
    return tourRepository.delete(id);
  }
}

export const tourService = new TourService();