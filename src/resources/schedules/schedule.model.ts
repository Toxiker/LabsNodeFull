export class Schedule {
  id: string;
  tourId: string;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor({ tourId = '', isActive = true, startDate = new Date(), endDate = new Date() }: Partial<Schedule> = {}) {
    this.id = Date.now().toString();
    this.tourId = tourId;
    this.isActive = isActive;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}