export type MenuItem = {
  id: string;
  name: string;
  category: "coffee" | "cookies" | "pastries" | "cakes" | "sweets";
  price: number; // PKR
  description: string;
  available: boolean;
  image: string;
};

export const MENU: MenuItem[] = [
  { id: "espresso", name: "Espresso", category: "coffee", price: 350, description: "Single shot, dark and strong.", available: true, image: "/items/espresso.png" },
  { id: "latte", name: "Café Latte", category: "coffee", price: 550, description: "Espresso with steamed milk.", available: true, image: "/items/latte.png" },
  { id: "cappuccino", name: "Cappuccino", category: "coffee", price: 550, description: "Espresso, steamed milk, thick foam.", available: true, image: "/items/cappuccino.png" },
  { id: "cold-brew", name: "Cold Brew", category: "coffee", price: 600, description: "Slow-steeped, served over ice.", available: true, image: "/items/cold-brew.png" },
  { id: "choc-chip", name: "Chocolate Chip Cookie", category: "cookies", price: 250, description: "Soft center, crisp edges.", available: true, image: "/items/choc-chip.png" },
  { id: "oatmeal", name: "Oatmeal Cookie", category: "cookies", price: 220, description: "Chewy with raisins.", available: true, image: "/items/oatmeal.png" },
  { id: "double-choc", name: "Double Chocolate Cookie", category: "cookies", price: 280, description: "For serious chocolate people.", available: true, image: "/items/double-choc.png" },
  { id: "croissant", name: "Butter Croissant", category: "pastries", price: 400, description: "Flaky, baked every morning.", available: true, image: "/items/croissant.png" },
  { id: "danish", name: "Fruit Danish", category: "pastries", price: 450, description: "Seasonal fruit, custard filling.", available: true, image: "/items/danish.png" },
  { id: "cinnamon-roll", name: "Cinnamon Roll", category: "pastries", price: 480, description: "Warm, glazed, generous.", available: true, image: "/items/cinnamon-roll.png" },
  { id: "choc-fudge", name: "Chocolate Fudge Cake", category: "cakes", price: 850, description: "Per slice. Rich and dense.", available: true, image: "/items/choc-fudge.png" },
  { id: "red-velvet", name: "Red Velvet Cake", category: "cakes", price: 900, description: "Per slice. Cream cheese frosting.", available: true, image: "/items/red-velvet.png" },
  { id: "cheesecake", name: "Classic Cheesecake", category: "cakes", price: 950, description: "Per slice. Baked, not set.", available: false, image: "/items/cheesecake.png" },
  { id: "gulab-jamun", name: "Gulab Jamun (2 pc)", category: "sweets", price: 300, description: "Warm, soaked in syrup.", available: true, image: "/items/gulab-jamun.png" },
  { id: "brownie", name: "Fudge Brownie", category: "sweets", price: 350, description: "Dense square of chocolate.", available: true, image: "/items/brownie.png" },
];