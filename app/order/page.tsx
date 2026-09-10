"use client";
import { useEffect, useState, type FormEvent } from "react";
import { MENU } from "@/lib/menu";
import { loadCart, saveCart, type CartItem } from "@/lib/cart";

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [placedOrder, setPlacedOrder] = useState<{ name: string; total: number; count: number } | null>(null);

  useEffect(() => { setCart(loadCart()); setLoaded(true); }, []);

  const rows = cart.map((c) => ({ ...c, item: MENU.find((m) => m.id === c.id) })).filter((r) => r.item);
  const total = rows.reduce((s, r) => s + r.item!.price * r.qty, 0);
  const count = rows.reduce((n, r) => n + r.qty, 0);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) { setError("Please enter your name (at least 2 characters)."); return; }
    if (!/^03\d{9}$/.test(phone.trim())) { setError("Please enter a valid phone number, e.g. 03001234567."); return; }
    if (rows.length === 0) { setError("Your cart is empty — add something from the menu first."); return; }
    setError(null);
    setPlacedOrder({ name: name.trim(), total, count });
    setCart([]);
    saveCart([]);
  }

  if (placedOrder) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <div className="rounded-lg border border-green-700 bg-green-50 p-8 text-center">
          <h1 className="text-2xl font-bold text-green-900">Order placed! 🥧</h1>
          <p className="mt-2 text-green-900">
            Thanks {placedOrder.name} — {placedOrder.count} item{placedOrder.count > 1 ? "s" : ""}, Rs {placedOrder.total}.
            Pickup in ~20 minutes.
          </p>
          <p className="mt-2 text-sm text-green-800">(Demo project — no payment, no real order.)</p>
          <a href="/menu" className="mt-4 inline-block rounded-full bg-[#C2405A] px-4 py-2 text-white">Order more</a>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold">Order</h1>
      <p className="mt-1 text-gray-600">{loaded && `${count} items · Rs ${total}`}</p>
      <form onSubmit={handleSubmit} noValidate className="mt-6 max-w-md space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Your name</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)}
            aria-describedby={error ? "order-error" : undefined}
            className="mt-1 w-full rounded border bg-white px-3 py-2" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone (for pickup)</label>
          <input id="phone" inputMode="numeric" value={phone} onChange={(e) => setPhone(e.target.value)}
            placeholder="03001234567"
            aria-describedby={error ? "order-error" : undefined}
            className="mt-1 w-full rounded border bg-white px-3 py-2" />
        </div>
        {error && (
          <p id="order-error" role="alert" className="rounded-full bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        )}
        <button type="submit" className="rounded-full bg-[#C2405A] px-5 py-2.5 font-medium text-white">
          Place order
        </button>
      </form>
    </main>
  );
}