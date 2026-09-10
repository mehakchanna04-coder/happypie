"use client";
import { useEffect, useState } from "react";
import { MENU } from "@/lib/menu";
import { loadCart, saveCart, addToCart, type CartItem } from "@/lib/cart";

export default function MenuPage() {
  const categories = ["coffee", "cookies", "pastries", "cakes", "sweets"] as const;
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCart(loadCart());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveCart(cart);
  }, [cart, loaded]);

  const count = cart.reduce((n, c) => n + c.qty, 0);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Menu</h1>
        <a href="/cart" className="rounded-full bg-[#C2405A] px-4 py-2 text-sm text-white">
          Cart ({count})
        </a>
      </div>
      {categories.map((cat) => (
        <section key={cat} className="mt-8">
          <h2 className="text-xl font-semibold capitalize">{cat}</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {MENU.filter((m) => m.category === cat).map((item) => (
              <div key={item.id} className={`overflow-hidden rounded-2xl border border-[#EADFD2] bg-white shadow-sm ${!item.available ? "opacity-50" : ""}`}>
                <img src={item.image} alt={item.name} className="aspect-square w-full bg-amber-100 object-contain" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-mono text-[#B07A2A]">Rs {item.price}</p>
                    {item.available ? (
                      <button
                        onClick={() => setCart((c) => addToCart(c, item.id))}
                        className="rounded-full bg-[#C2405A] px-3 py-1.5 text-sm text-white hover:bg-[#A8334C]"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        Add
                      </button>
                    ) : (
                      <span className="text-xs text-red-700">sold out today</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}