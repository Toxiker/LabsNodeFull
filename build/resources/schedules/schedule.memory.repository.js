import { Schedule } from './schedule.model.js';
const schedules = [];
export class ScheduleRepository {
    findAll() {
        return [...schedules];
    }
    findByTourId(tourId) {
        return schedules.filter(s => s.tourId === tourId);
    }
    findById(id) {
        return schedules.find(s => s.id === id);
    }
    create(scheduleData) {
        const newSchedule = new Schedule(scheduleData);
        schedules.push(newSchedule);
        return newSchedule;
    }
    delete(id) {
        const index = schedules.findIndex(s => s.id === id);
        if (index === -1)
            return false;
        schedules.splice(index, 1);
        return true;
    }
    update(id, scheduleData) {
        const schedule = this.findById(id);
        if (!schedule)
            return null;
        Object.assign(schedule, scheduleData, { updatedAt: new Date() });
        return schedule;
    }
    findByScheduleId(scheduleId) {
        return schedules.filter(s => s.id === scheduleId);
    }
}
export const scheduleRepository = new ScheduleRepository();
//# sourceMappingURL=schedule.memory.repository.js.map