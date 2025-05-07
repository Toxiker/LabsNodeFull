import { ISchedule } from './schedule.model';

const schedules: ISchedule[] = [];

export class ScheduleRepository {
  findAll(): ISchedule[] {
    return [...schedules];
  }

  findByTourId(tourId: string): ISchedule[] {
    return schedules.filter(s => s.tourId === tourId);
  }
}

export const scheduleRepository = new ScheduleRepository();