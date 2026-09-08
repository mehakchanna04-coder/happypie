import { MENU } from "@/lib/menu";

export default function MenuPage() {
  const categories = ["coffee", "cookies", "pastries", "cakes", "sweets"] as const;
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Menu</h1>
      {categories.map((cat) => (
        <section key={cat} className="mt-8">
          <h2 className="text-xl font-semibold capitalize">{cat}</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {MENU.filter((m) => m.category === cat).map((item) => (
              <div key={item.id} className={`rounded-lg border bg-white p-4 ${!item.available ? "opacity-50" : ""}`}>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="mt-2 font-mono text-amber-800">
                  Rs {item.price} {!item.available && <span className="text-xs text-red-700">— sold out today</span>}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}