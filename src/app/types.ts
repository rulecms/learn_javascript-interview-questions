export interface Question {
  slug: string;
  title: string;
}

export interface Category {
  title: string;
  description: string;
  slugs: string[];
}

export interface Categories {
  [key: string]: Category;
} 