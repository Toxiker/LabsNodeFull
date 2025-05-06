import { Tour } from './tour.model.js';

const tours = [];

export class TourRepository {
  findAll() {
    return [...tours];
  }

  findById(id) {
    return tours.find(tour => tour.id === id);
  }

  create(tourData) {
    const newTour = new Tour(tourData);
    tours.push(newTour);
    return newTour;
  }

  delete(id) {
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) return false;
    tours.splice(index, 1);
    return true;
  }
}

export const tourRepository = new TourRepository();