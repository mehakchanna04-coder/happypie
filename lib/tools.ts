import { tool } from "ai";
import { z } from "zod";
import { MENU } from "./menu";

// Tool contract (README):
// getMenuItem — input { query: string }, returns the matching menu item
// { id, name, category, price, description, available } or throws if no match.
export const getMenuItem = tool({
  description:
    "Look up a HappyPie menu item by name or keyword (e.g. 'latte', 'chocolate cake', 'gulab jamun'). Returns real price and availability. Always use this before stating any price.",
  inputSchema: z.object({
    query: z.string().describe("Item name or keyword to search the menu for"),
  }),
  execute: async ({ query }) => {
    const q = query.toLowerCase();
    const item = MENU.find(
      (m) => m.name.toLowerCase().includes(q) || m.id.includes(q) || m.category.includes(q)
    );
    if (!item) {
      throw new Error(`"${query}" is not on the HappyPie menu.`);
    }
    return item;
  },
});