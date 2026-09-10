"use client";

export type CartItem = { id: string; qty: number };

const KEY = "happypie-cart";

export function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isValidCartItem) : [];
  } catch {
    return [];
  }
}

function isValidCartItem(item: unknown): item is CartItem {
  if (typeof item !== "object" || item === null) return false;
  const e = item as Record<string, unknown>;
  return typeof e.id === "string" && typeof e.qty === "number" && e.qty > 0;
}

export function saveCart(cart: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(cart));
  } catch {
    // storage full/blocked — cart lives in memory only this session
  }
}

export function addToCart(cart: CartItem[], id: string): CartItem[] {
  const existing = cart.find((c) => c.id === id);
  if (existing) return cart.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c));
  return [...cart, { id, qty: 1 }];
}

export function removeFromCart(cart: CartItem[], id: string): CartItem[] {
  return cart
    .map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c))
    .filter((c) => c.qty > 0);
}