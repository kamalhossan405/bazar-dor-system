export interface IProductMarket {
  market: string;
  division?: string;
  min: number;
  max: number;
}

export interface IProductChange {
  dir: "up" | "down" | "flat";
  pct: number;
}

export interface IProduct {
  id: number | string;
  slug?: string;
  nameBn: string;
  nameEn?: string;
  category?: string;
  categorySlug?: string;
  categoryNameBn: string;
  categoryNameEn?: string;
  categoryIcon?: string;
  unit: string;
  image?: string;
  today: number;
  yesterday?: number;
  lastWeek?: number;
  lastMonth?: number;
  change: IProductChange;
  markets: IProductMarket[];
}
