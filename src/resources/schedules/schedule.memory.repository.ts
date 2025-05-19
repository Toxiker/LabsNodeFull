import { Schedule } from './schedule.model.js';

const schedules: Schedule[] = [];

export class ScheduleRepository {
  findAll(): Schedule[] {
    return [...schedules];
  }

  findByTourId(tourId: string): Schedule[] {
    return schedules.filter(s => s.tourId === tourId);
  }

  findById(id: string): Schedule | undefined {
    return schedules.find(s => s.id === id);
  }

  create(scheduleData: Partial<Schedule>): Schedule {
    const newSchedule = new Schedule(scheduleData);
    schedules.push(newSchedule);
    return newSchedule;
  }

  delete(id: string): boolean {
    const index = schedules.findIndex(s => s.id === id);
    if (index === -1) return false;
    schedules.splice(index, 1);
    return true;
  }

  update(id: string, scheduleData: Partial<Schedule>): Schedule | null {
    const schedule = this.findById(id);
    if (!schedule) return null;
    Object.assign(schedule, scheduleData, { updatedAt: new Date() });
    return schedule;
  }

  findByScheduleId(scheduleId: string): Schedule[] {
    return schedules.filter(s => s.id === scheduleId);
  }
}

export const scheduleRepository = new ScheduleRepository();