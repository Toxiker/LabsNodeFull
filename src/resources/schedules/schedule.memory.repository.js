import { Schedule } from './schedule.model.js';

const schedules = [];

export class ScheduleRepository {
  findAll() {
    return [...schedules];
  }

  findByTourId(tourId) {
    return schedules.filter(s => s.tourId === tourId);
  }
}

export const scheduleRepository = new ScheduleRepository();