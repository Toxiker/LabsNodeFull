import { scheduleRepository } from './schedule.memory.repository.js';

export class ScheduleService {
  getAll() {
    return scheduleRepository.findAll();
  }

  getByTourId(tourId) {
    return scheduleRepository.findByTourId(tourId);
  }
}

export const scheduleService = new ScheduleService();