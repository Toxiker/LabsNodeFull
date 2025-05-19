export class Schedule {
    id;
    tourId;
    isActive;
    startDate;
    endDate;
    createdAt;
    updatedAt;
    constructor({ tourId = '', isActive = true, startDate = new Date(), endDate = new Date() } = {}) {
        this.id = Date.now().toString();
        this.tourId = tourId;
        this.isActive = isActive;
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
//# sourceMappingURL=schedule.model.js.map