import { tourRepository } from './tour.memory.repository';
import { ITour } from './tour.model';

export class TourService {
  getAll(): ITour[] {
    return tourRepository.findAll();
  }

  getById(id: string): ITour | undefined {
    return tourRepository.findById(id);
  }

  create(tourData: Omit<ITour, 'id' | 'createdAt' | 'updatedAt'>): ITour {
    return tourRepository.create(tourData);
  }

  delete(id: string): boolean {
    return tourRepository.delete(id);
  }
}

export const tourService = new TourService();