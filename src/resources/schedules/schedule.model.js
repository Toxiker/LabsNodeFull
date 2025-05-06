export class Schedule {
    constructor({ tourId, isActive, startDate, endDate }) {
      this.id = Date.now().toString();
      this.tourId = tourId;
      this.isActive = isActive ?? true;
      this.startDate = startDate;
      this.endDate = endDate;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }