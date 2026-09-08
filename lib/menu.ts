export type MenuItem = {
  id: string;
  name: string;
  category: "coffee" | "cookies" | "pastries" | "cakes" | "sweets";
  price: number; // PKR
  description: string;
  available: boolean;
};

export const MENU: MenuItem[] = [
  { id: "espresso", name: "Espresso", category: "coffee", price: 350, description: "Single shot, dark and strong.", available: true },
  { id: "latte", name: "Café Latte", category: "coffee", price: 550, description: "Espresso with steamed milk.", available: true },
  { id: "cappuccino", name: "Cappuccino", category: "coffee", price: 550, description: "Espresso, steamed milk, thick foam.", available: true },
  { id: "cold-brew", name: "Cold Brew", category: "coffee", price: 600, description: "Slow-steeped, served over ice.", available: true },
  { id: "choc-chip", name: "Chocolate Chip Cookie", category: "cookies", price: 250, description: "Soft center, crisp edges.", available: true },
  { id: "oatmeal", name: "Oatmeal Cookie", category: "cookies", price: 220, description: "Chewy with raisins.", available: true },
  { id: "double-choc", name: "Double Chocolate Cookie", category: "cookies", price: 280, description: "For serious chocolate people.", available: true },
  { id: "croissant", name: "Butter Croissant", category: "pastries", price: 400, description: "Flaky, baked every morning.", available: true },
  { id: "danish", name: "Fruit Danish", category: "pastries", price: 450, description: "Seasonal fruit, custard filling.", available: true },
  { id: "cinnamon-roll", name: "Cinnamon Roll", category: "pastries", price: 480, description: "Warm, glazed, generous.", available: true },
  { id: "choc-fudge", name: "Chocolate Fudge Cake", category: "cakes", price: 850, description: "Per slice. Rich and dense.", available: true },
  { id: "red-velvet", name: "Red Velvet Cake", category: "cakes", price: 900, description: "Per slice. Cream cheese frosting.", available: true },
  { id: "cheesecake", name: "Classic Cheesecake", category: "cakes", price: 950, description: "Per slice. Baked, not set.", available: false },
  { id: "gulab-jamun", name: "Gulab Jamun (2 pc)", category: "sweets", price: 300, description: "Warm, soaked in syrup.", available: true },
  { id: "brownie", name: "Fudge Brownie", category: "sweets", price: 350, description: "Dense square of chocolate.", available: true },
];