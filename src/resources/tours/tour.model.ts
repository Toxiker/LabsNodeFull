export class Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({ title = '', slug = '', description = '', isActive = true }: Partial<Tour> = {}) {
    this.id = Date.now().toString();
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.isActive = isActive;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}