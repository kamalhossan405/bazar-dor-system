import { ICategory } from "@/type/Category";
import { IProduct } from "@/type/Product";

export const fallbackCategories: ICategory[] = [
  { id: "1", slug: "chal", nameBn: "চাল", icon: "🌾" },
  { id: "2", slug: "dal", nameBn: "ডাল", icon: "🥣" },
  { id: "3", slug: "tel", nameBn: "তেল", icon: "🛢️" },
  { id: "4", slug: "sobji", nameBn: "সবজি", icon: "🥬" },
  { id: "5", slug: "mach", nameBn: "মাছ", icon: "🐟" },
  { id: "6", slug: "mangsho", nameBn: "মাংস", icon: "🥩" },
  { id: "7", slug: "dim", nameBn: "ডিম", icon: "🥚" },
  { id: "8", slug: "moshla", nameBn: "মসলা", icon: "🌶️" },
];

export const fallbackProducts: IProduct[] = [
  {
    id: 1,
    slug: "miniket-rice",
    nameBn: "মিনিকেট চাল",
    category: "chal",
    categoryNameBn: "চাল",
    categoryIcon: "🌾",
    unit: "কেজি",
    image: "",
    today: 74,
    yesterday: 72,
    lastWeek: 70,
    lastMonth: 68,
    change: { dir: "up", pct: 2.78 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 72, max: 76 },
      { market: "খাতুনগঞ্জ", division: "চট্টগ্রাম", min: 70, max: 74 },
      { market: "বড় বাজার", division: "খুলনা", min: 73, max: 75 },
      { market: "সাহেব বাজার", division: "রাজশাহী", min: 71, max: 74 },
    ],
  },
  {
    id: 2,
    slug: "nazirshail-rice",
    nameBn: "নাজিরশাইল চাল",
    category: "chal",
    categoryNameBn: "চাল",
    categoryIcon: "🌾",
    unit: "কেজি",
    image: "",
    today: 82,
    yesterday: 85,
    lastWeek: 86,
    lastMonth: 84,
    change: { dir: "down", pct: -3.53 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 80, max: 84 },
      { market: "চকবাজার", division: "চট্টগ্রাম", min: 81, max: 85 },
      { market: "কালীবাড়ি বাজার", division: "সিলেট", min: 82, max: 86 },
    ],
  },
  {
    id: 3,
    slug: "masoor-dal",
    nameBn: "দেশি মসুর ডাল",
    category: "dal",
    categoryNameBn: "ডাল",
    categoryIcon: "🥣",
    unit: "কেজি",
    image: "",
    today: 140,
    yesterday: 145,
    lastWeek: 150,
    lastMonth: 142,
    change: { dir: "down", pct: -3.45 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 135, max: 145 },
      { market: "রিয়াজউদ্দিন বাজার", division: "চট্টগ্রাম", min: 138, max: 142 },
      { market: "নিউ মার্কেট", division: "রংপুর", min: 136, max: 144 },
    ],
  },
  {
    id: 4,
    slug: "soybean-oil",
    nameBn: "সয়াবিন তেল (বোতলজাত)",
    category: "tel",
    categoryNameBn: "তেল",
    categoryIcon: "🛢️",
    unit: "লিটার",
    image: "",
    today: 190,
    yesterday: 185,
    lastWeek: 185,
    lastMonth: 180,
    change: { dir: "up", pct: 2.7 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 188, max: 192 },
      { market: "খাতুনগঞ্জ", division: "চট্টগ্রাম", min: 187, max: 190 },
      { market: "বটতলা বাজার", division: "বরিশাল", min: 189, max: 193 },
    ],
  },
  {
    id: 5,
    slug: "deshi-onion",
    nameBn: "দেশি পেঁয়াজ",
    category: "sobji",
    categoryNameBn: "সবজি",
    categoryIcon: "🥬",
    unit: "কেজি",
    image: "",
    today: 110,
    yesterday: 120,
    lastWeek: 130,
    lastMonth: 95,
    change: { dir: "down", pct: -8.33 },
    markets: [
      { market: "শ্যামবাজার", division: "ঢাকা", min: 105, max: 115 },
      { market: "পাহাড়তলী", division: "চট্টগ্রাম", min: 108, max: 112 },
      { market: "রূপাতলী বাজার", division: "বরিশাল", min: 110, max: 116 },
    ],
  },
  {
    id: 6,
    slug: "potato-diamond",
    nameBn: "আলু (ডায়মন্ড)",
    category: "sobji",
    categoryNameBn: "সবজি",
    categoryIcon: "🥬",
    unit: "কেজি",
    image: "",
    today: 45,
    yesterday: 40,
    lastWeek: 42,
    lastMonth: 38,
    change: { dir: "up", pct: 12.5 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 42, max: 48 },
      { market: "চকবাজার", division: "চট্টগ্রাম", min: 44, max: 46 },
      { market: "সাহেব বাজার", division: "রাজশাহী", min: 40, max: 45 },
    ],
  },
  {
    id: 7,
    slug: "broiler-chicken",
    nameBn: "ব্রয়লার মুরগি",
    category: "mangsho",
    categoryNameBn: "মাংস",
    categoryIcon: "🥩",
    unit: "কেজি",
    image: "",
    today: 185,
    yesterday: 195,
    lastWeek: 200,
    lastMonth: 190,
    change: { dir: "down", pct: -5.13 },
    markets: [
      { market: "কাপ্তান বাজার", division: "ঢাকা", min: 180, max: 190 },
      { market: "কর্ণফুলী মার্কেট", division: "চট্টগ্রাম", min: 182, max: 188 },
      { market: "শিবগঞ্জ বাজার", division: "সিলেট", min: 185, max: 192 },
    ],
  },
  {
    id: 8,
    slug: "beef",
    nameBn: "গরুর মাংস",
    category: "mangsho",
    categoryNameBn: "মাংস",
    categoryIcon: "🥩",
    unit: "কেজি",
    image: "",
    today: 780,
    yesterday: 750,
    lastWeek: 750,
    lastMonth: 750,
    change: { dir: "up", pct: 4.0 },
    markets: [
      { market: "মিরপুর ১ নম্বর", division: "ঢাকা", min: 750, max: 800 },
      { market: "রিয়াজউদ্দিন বাজার", division: "চট্টগ্রাম", min: 760, max: 800 },
      { market: "ডাকবাংলো বাজার", division: "খুলনা", min: 750, max: 780 },
    ],
  },
  {
    id: 9,
    slug: "ruhi-fish",
    nameBn: "রুই মাছ (১.৫-২ কেজি)",
    category: "mach",
    categoryNameBn: "মাছ",
    categoryIcon: "🐟",
    unit: "কেজি",
    image: "",
    today: 340,
    yesterday: 360,
    lastWeek: 350,
    lastMonth: 340,
    change: { dir: "down", pct: -5.56 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 320, max: 360 },
      { market: "ফিশারি ঘাট", division: "চট্টগ্রাম", min: 310, max: 350 },
      { market: "রূপসা হাট", division: "খুলনা", min: 330, max: 350 },
    ],
  },
  {
    id: 10,
    slug: "green-chili",
    nameBn: "কাঁচা মরিচ",
    category: "sobji",
    categoryNameBn: "সবজি",
    categoryIcon: "🥬",
    unit: "কেজি",
    image: "",
    today: 160,
    yesterday: 140,
    lastWeek: 180,
    lastMonth: 120,
    change: { dir: "up", pct: 14.29 },
    markets: [
      { market: "কারওয়ান বাজার", division: "ঢাকা", min: 150, max: 170 },
      { market: "চকবাজার", division: "চট্টগ্রাম", min: 155, max: 165 },
      { market: "বড় বাজার", division: "রংপুর", min: 140, max: 160 },
    ],
  },
  {
    id: 11,
    slug: "farm-egg",
    nameBn: "ফার্মের মুরগির ডিম",
    category: "dim",
    categoryNameBn: "ডিম",
    categoryIcon: "🥚",
    unit: "ডজন",
    image: "",
    today: 145,
    yesterday: 150,
    lastWeek: 155,
    lastMonth: 140,
    change: { dir: "down", pct: -3.33 },
    markets: [
      { market: "তেজগাঁও ডিমের আড়ত", division: "ঢাকা", min: 140, max: 150 },
      { market: "পাহাড়তলী", division: "চট্টগ্রাম", min: 142, max: 148 },
      { market: "সাহেব বাজার", division: "রাজশাহী", min: 140, max: 146 },
    ],
  },
  {
    id: 12,
    slug: "garlic-deshi",
    nameBn: "দেশি রসুন",
    category: "moshla",
    categoryNameBn: "মসলা",
    categoryIcon: "🌶️",
    unit: "কেজি",
    image: "",
    today: 220,
    yesterday: 210,
    lastWeek: 200,
    lastMonth: 190,
    change: { dir: "up", pct: 4.76 },
    markets: [
      { market: "শ্যামবাজার", division: "ঢাকা", min: 210, max: 230 },
      { market: "খাতুনগঞ্জ", division: "চট্টগ্রাম", min: 215, max: 225 },
      { market: "বটতলা বাজার", division: "বরিশাল", min: 210, max: 225 },
    ],
  },
];

const BASE_API = "https://openapi.programming-hero.com/api/bazardor";

export async function fetchCategories(): Promise<ICategory[]> {
  try {
    const res = await fetch(`${BASE_API}/categories`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (error: any) {
    console.warn("Categories fetch failed, using fallback:", error?.message);
  }
  return fallbackCategories;
}

export async function fetchProducts(categorySlug?: string | null): Promise<IProduct[]> {
  try {
    const url = categorySlug
      ? `${BASE_API}/products?category=${encodeURIComponent(categorySlug)}`
      : `${BASE_API}/products`;
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (error: any) {
    console.warn("Products fetch failed, using fallback:", error?.message);
  }

  if (categorySlug) {
    return fallbackProducts.filter(
      (p) => p.category?.toLowerCase() === categorySlug.toLowerCase()
    );
  }
  return fallbackProducts;
}

export async function fetchSingleProduct(productId: string | number): Promise<IProduct> {
  try {
    const res = await fetch(`${BASE_API}/products/${productId}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data && (data.id || data.nameBn)) {
        return data;
      }
    }
  } catch (error: any) {
    console.warn("Single product fetch failed, using fallback:", error?.message);
  }

  const found = fallbackProducts.find(
    (p) => String(p.id) === String(productId) || p.slug === String(productId)
  );
  return found || fallbackProducts[0];
}

export const fetchProductById = fetchSingleProduct;
