import { scheduleRepository } from './schedule.memory.repository.js';
import { priceRepository } from '../prices/price.memory.repository.js';
import { Schedule } from './schedule.model.js';

export class ScheduleService {
  getAll(): Schedule[] {
    return scheduleRepository.findAll();
  }

  getByTourId(tourId: string): Schedule[] {
    return scheduleRepository.findByTourId(tourId);
  }

  getById(id: string): Schedule | undefined {
    return scheduleRepository.findById(id);
  }

  create(scheduleData: Partial<Schedule>): Schedule {
    return scheduleRepository.create(scheduleData);
  }

  update(id: string, scheduleData: Partial<Schedule>): Schedule | null {
    return scheduleRepository.update(id, scheduleData);
  }

  delete(id: string): boolean {
    // Каскадное удаление цен
    priceRepository.deleteByScheduleId(id);
    return scheduleRepository.delete(id);
  }
}

export const scheduleService = new ScheduleService();