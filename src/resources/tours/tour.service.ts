import { tourRepository } from './tour.memory.repository.js';
import { scheduleRepository } from '../schedules/schedule.memory.repository.js';
import { priceRepository } from '../prices/price.memory.repository.js';
import { Tour } from './tour.model.js';
import { Schedule } from '../schedules/schedule.model.js';

export class TourService {
  getAll(): Tour[] {
    return tourRepository.findAll();
  }

  getById(id: string): Tour | undefined {
    return tourRepository.findById(id);
  }

  create(tourData: Partial<Tour>): Tour {
    return tourRepository.create(tourData);
  }

  update(id: string, tourData: Partial<Tour>): Tour | null {
    const tour = tourRepository.findById(id);
    if (!tour) return null;
    Object.assign(tour, tourData, { updatedAt: new Date() });
    return tour;
  }

  getSchedulesByTourId(tourId: string): Schedule[] {
    return scheduleRepository.findByTourId(tourId);
  }

  delete(id: string): boolean {
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