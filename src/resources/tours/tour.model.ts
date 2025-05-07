export interface ITour {
  id: string;
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Tour implements ITour {
  id: string;
  title: string;
  slug: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor({ title, slug, description, isActive }: { title: string; slug: string; description: string; isActive?: boolean }) {
    this.id = Date.now().toString();
    this.title = title;
    this.slug = slug;
    this.description = description;
    this.isActive = isActive ?? true;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}