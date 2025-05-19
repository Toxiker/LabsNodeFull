export class Price {
    id;
    scheduleId;
    priceValue;
    priceCurrency;
    createdAt;
    updatedAt;
    constructor({ scheduleId = '', priceValue = 0, priceCurrency = 'USD' } = {}) {
        this.id = Date.now().toString();
        this.scheduleId = scheduleId;
        this.priceValue = priceValue;
        this.priceCurrency = priceCurrency;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
//# sourceMappingURL=price.model.js.map