import { Tour, ITour } from './tour.model';

const tours: ITour[] = [];

export class TourRepository {
  findAll(): ITour[] {
    return [...tours];
  }

  findById(id: string): ITour | undefined {
    return tours.find(tour => tour.id === id);
  }

  create(tourData: Omit<ITour, 'id' | 'createdAt' | 'updatedAt'>): ITour {
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