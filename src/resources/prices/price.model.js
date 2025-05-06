export class Price {
    constructor({ scheduleId, priceValue, priceCurrency = 'USD' }) {
      this.id = Date.now().toString();
      this.scheduleId = scheduleId;
      this.priceValue = priceValue;
      this.priceCurrency = priceCurrency;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }