export class Price {
  id: string;
  scheduleId: string;
  priceValue: number;
  priceCurrency: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({ scheduleId = '', priceValue = 0, priceCurrency = 'USD' }: Partial<Price> = {}) {
    this.id = Date.now().toString();
    this.scheduleId = scheduleId;
    this.priceValue = priceValue;
    this.priceCurrency = priceCurrency;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}