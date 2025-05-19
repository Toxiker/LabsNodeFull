import { tourRepository } from './tour.memory.repository.js';
import { scheduleRepository } from '../schedules/schedule.memory.repository.js';
import { priceRepository } from '../prices/price.memory.repository.js';

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

  update(id, tourData) {
    const tour = tourRepository.findById(id);
    if (!tour) return null;
    Object.assign(tour, tourData, { updatedAt: new Date() });
    return tour;
  }

  getSchedulesByTourId(tourId) {
    return scheduleRepository.findByTourId(tourId);
  }

  delete(id) {
    // Каскадное удаление расписаний и цен
    const schedules = scheduleRepository.findByTourId(id);
    for (const schedule of schedules) {
      priceRepository.deleteByScheduleId(schedule.id);
      scheduleRepository.delete(schedule.id);
    }
    return tourRepository.delete(id);
  }
}

export const tourService = new TourService();