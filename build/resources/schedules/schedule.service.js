import { scheduleRepository } from './schedule.memory.repository.js';
import { priceRepository } from '../prices/price.memory.repository.js';
export class ScheduleService {
    getAll() {
        return scheduleRepository.findAll();
    }
    getByTourId(tourId) {
        return scheduleRepository.findByTourId(tourId);
    }
    getById(id) {
        return scheduleRepository.findById(id);
    }
    create(scheduleData) {
        return scheduleRepository.create(scheduleData);
    }
    update(id, scheduleData) {
        return scheduleRepository.update(id, scheduleData);
    }
    delete(id) {
        // Каскадное удаление цен
        priceRepository.deleteByScheduleId(id);
        return scheduleRepository.delete(id);
    }
}
export const scheduleService = new ScheduleService();
//# sourceMappingURL=schedule.service.js.map