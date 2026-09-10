"use client";
import { useEffect, useState } from "react";
import { MENU } from "@/lib/menu";
import { loadCart, saveCart, addToCart, removeFromCart, type CartItem } from "@/lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setCart(loadCart()); setLoaded(true); }, []);
  useEffect(() => { if (loaded) saveCart(cart); }, [cart, loaded]);

  const rows = cart
    .map((c) => ({ ...c, item: MENU.find((m) => m.id === c.id) }))
    .filter((r) => r.item);

  const total = rows.reduce((sum, r) => sum + r.item!.price * r.qty, 0);

  if (loaded && rows.length === 0) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <h1 className="text-3xl font-bold">Your cart</h1>
        <div className="mt-6 rounded-lg border border-dashed bg-white p-8 text-center">
          <p className="text-gray-600">Nothing here yet — the croissants are waiting.</p>
          <a href="/menu" className="mt-4 inline-block rounded-full bg-[#C2405A] px-4 py-2 text-white">
            Browse the menu
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold">Your cart</h1>
      <div className="mt-6 space-y-3">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center justify-between rounded-2xl border border-[#EADFD2] bg-white shadow-sm p-4">
  <div className="flex items-center gap-3">
    <img src={r.item!.image} alt={r.item!.name} className="h-14 w-14 rounded object-cover" />
    <div>
      <p className="font-semibold">{r.item!.name}</p>
      <p className="text-sm text-gray-600">Rs {r.item!.price} each</p>
    </div>
  </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setCart((c) => removeFromCart(c, r.id))} className="h-8 w-8 rounded border" aria-label={`Remove one ${r.item!.name}`}>−</button>
              <span className="w-6 text-center">{r.qty}</span>
              <button onClick={() => setCart((c) => addToCart(c, r.id))} className="h-8 w-8 rounded border" aria-label={`Add one ${r.item!.name}`}>+</button>
              <span className="w-24 text-right font-mono">Rs {r.item!.price * r.qty}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <p className="text-lg font-semibold">Total: <span className="font-mono">Rs {total}</span></p>
        <a href="/order" className="rounded-full bg-[#C2405A] px-5 py-2.5 text-white">Place order</a>
      </div>
    </main>
  );
}