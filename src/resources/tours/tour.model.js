export class Tour {
    constructor({ title, slug, description, isActive }) {
      this.id = Date.now().toString();
      this.title = title;
      this.slug = slug;
      this.description = description;
      this.isActive = isActive ?? true;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }