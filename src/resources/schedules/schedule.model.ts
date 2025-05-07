export interface ISchedule {
  id: string;
  tourId: string;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Schedule implements ISchedule {
  id: string;
  tourId: string;
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor({ tourId, isActive, startDate, endDate }: { tourId: string; isActive?: boolean; startDate: Date; endDate: Date }) {
    this.id = Date.now().toString();
    this.tourId = tourId;
    this.isActive = isActive ?? true;
    this.startDate = startDate;
    this.endDate = endDate;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}