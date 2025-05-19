export class Tour {
    id;
    title;
    slug;
    description;
    isActive;
    createdAt;
    updatedAt;
    constructor({ title = '', slug = '', description = '', isActive = true } = {}) {
        this.id = Date.now().toString();
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.isActive = isActive;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
//# sourceMappingURL=tour.model.js.map