import { scheduleRepository } from './schedule.memory.repository';
import { ISchedule } from './schedule.model';

export class ScheduleService {
  getAll(): ISchedule[] {
    return scheduleRepository.findAll();
  }

  getByTourId(tourId: string): ISchedule[] {
    return scheduleRepository.findByTourId(tourId);
  }
}

export const scheduleService = new ScheduleService();