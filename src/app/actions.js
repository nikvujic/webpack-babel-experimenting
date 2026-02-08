import { state } from "./state.js";

export function addCard(columnId, text) {
  const trimmed = text.trim();
  if (!trimmed) return;

  const col = state.columns.find((c) => c.id === columnId);
  if (!col) return;

  col.cards.push(trimmed);
}
