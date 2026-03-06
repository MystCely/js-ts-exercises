import type {Item} from "./types";
import {initialItems} from "./data";

export let items: Item[] = [...initialItems];

export function toggleBought(id: number): void {
    items = items.map((item) => item.id === id ? {...item, bought: !item.bought} : item);
}

export function removeItem(id: number): void {
    items = items.filter((item) => item.id !== id);
}
