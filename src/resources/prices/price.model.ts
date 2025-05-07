export interface IPrice {
  id: string;
  scheduleId: string;
  priceValue: number;
  priceCurrency: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Price implements IPrice {
  id: string;
  scheduleId: string;
  priceValue: number;
  priceCurrency: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({ scheduleId, priceValue, priceCurrency = 'USD' }: { scheduleId: string; priceValue: number; priceCurrency?: string }) {
    this.id = Date.now().toString();
    this.scheduleId = scheduleId;
    this.priceValue = priceValue;
    this.priceCurrency = priceCurrency;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}