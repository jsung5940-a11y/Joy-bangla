export type ProductCategory = 'gaming-pc' | 'monitors' | 'ssd' | 'hdd' | 'accessories' | 'all';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'gaming-pc' | 'monitors' | 'ssd' | 'hdd' | 'accessories';
  priceUSD: number;
  priceBDT: number;
  originalPriceUSD?: number;
  originalPriceBDT?: number;
  image: string;
  badge?: string; // e.g. "HOT", "NEW", "30% OFF"
  specs: string; // e.g. "Ryzen 7, RTX 4070" or "165Hz, 1ms"
  detailedSpecs?: { [key: string]: string };
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  warranty: string;
  description: string;
}

export interface RepairService {
  id: string;
  deviceType: 'pc' | 'monitor' | 'ssd' | 'hdd';
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  turnaroundTime: string;
  basePriceUSD: number;
  basePriceBDT: number;
  commonIssues: {
    issue: string;
    description: string;
    extraCostUSD: number;
    extraCostBDT: number;
  }[];
  repairProcess: string[];
}

export interface RepairTicket {
  ticketNumber: string;
  customerName: string;
  deviceType: 'pc' | 'monitor' | 'ssd' | 'hdd';
  deviceName: string;
  issueDescription: string;
  currentStep: number; // 1 to 5
  steps: {
    title: string;
    desc: string;
    completed: boolean;
    date: string;
  }[];
  serviceFeeUSD: number;
  serviceFeeBDT: number;
  estimatedCompletion: string;
  technician: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface PCPartItem {
  id: string;
  category: 'cpu' | 'motherboard' | 'gpu' | 'ram' | 'ssd' | 'hdd' | 'psu' | 'case' | 'monitor';
  categoryLabel: string;
  name: string;
  spec: string;
  priceUSD: number;
  priceBDT: number;
  wattage: number;
  brand: string;
}
