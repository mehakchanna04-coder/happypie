import { MENU } from "@/lib/menu";

export default function Home() {
  const featured = MENU.filter((m) => m.available).slice(0, 3);
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-4xl font-bold">HappyPie</h1>
      <p className="mt-2 max-w-xl text-lg text-gray-600">
        Coffee, cookies, pastries, cakes and sweets — baked fresh, ordered in a minute.
      </p>
      <a href="/menu" className="mt-6 inline-block rounded bg-amber-700 px-5 py-2.5 font-medium text-white">
        See the menu
      </a>
      <h2 className="mt-12 text-2xl font-semibold">Today&apos;s favourites</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {featured.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg border bg-white">
            <img src={item.image} alt={item.name} className="aspect-square w-full bg-amber-100 object-contain" />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="mt-2 font-mono text-amber-800">Rs {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}