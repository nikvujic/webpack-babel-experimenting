import { state } from "./state.js";

export function addCard(columnId, text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  const col = state.columns.find((c) => c.id === columnId);
  if (!col) return;

  col.cards.push(trimmed);
}

export function removeCard(columnId, index) {
  const col = state.columns.find((c) => c.id === columnId);
  if (!col) return;

  if (index < 0 || index >= col.cards.length) return;

  col.cards.splice(index, 1);
}