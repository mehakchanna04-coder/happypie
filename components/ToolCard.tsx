"use client";
import type { MenuItem } from "@/lib/menu";

export function ToolCard({ part }: { part: any }) {
  const base = "my-2 rounded-lg border p-3 text-sm transition-opacity duration-200";

  if (part.state === "input-streaming") {
    return <div className={`${base} border-dashed border-stone-400 bg-white/60 text-stone-500`}>
      <span className="animate-pulse">Checking the menu…</span>
    </div>;
  }
  if (part.state === "input-available") {
    return <div className={`${base} border-stone-800 bg-white text-stone-800`}>
      Looking up <span className="font-semibold">{part.input?.query}</span>…
      <span className="ml-2 inline-block animate-pulse">●</span>
    </div>;
  }
  if (part.state === "output-error") {
    return <div className={`${base} border-red-700 bg-red-50 text-red-800`} role="alert">
      <p className="font-semibold">Not on the menu</p>
      <p className="mt-1">{part.errorText ?? "Couldn't find that item."}</p>
    </div>;
  }
  if (part.state === "output-available") {
    const item = part.output as MenuItem;
    return <div className={`${base} border-amber-700 bg-amber-50`}>
      <div className="flex items-center justify-between">
        <p className="font-bold text-stone-900">{item.name}</p>
        <span className="font-mono text-amber-800">Rs {item.price}</span>
      </div>
      <p className="mt-1 text-stone-600">{item.description}</p>
      <p className="mt-1 text-xs">
        {item.available
          ? <span className="text-green-700">Available today</span>
          : <span className="text-red-700">Sold out today</span>}
        <span className="ml-2 capitalize text-stone-500">· {item.category}</span>
      </p>
    </div>;
  }
  return null;
}