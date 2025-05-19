import { Tour } from './tour.model.js';

const tours: Tour[] = [];

export class TourRepository {
  findAll(): Tour[] {
    return [...tours];
  }

  findById(id: string): Tour | undefined {
    return tours.find(tour => tour.id === id);
  }

  create(tourData: Partial<Tour>): Tour {
    const newTour = new Tour(tourData);
    tours.push(newTour);
    return newTour;
  }

  delete(id: string): boolean {
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) return false;
    tours.splice(index, 1);
    return true;
  }
}

export const tourRepository = new TourRepository();