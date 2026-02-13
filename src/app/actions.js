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

export function moveCard(columnId, index, delta) {
  const fromIdx = state.columns.findIndex((c) => c.id === columnId);
  if (fromIdx === -1) return;

  const toIdx = fromIdx + delta;
  if (toIdx < 0 || toIdx >= state.columns.length) return;

  const fromCol = state.columns[fromIdx];
  const toCol = state.columns[toIdx];

  if (index < 0 || index >= fromCol.cards.length) return;

  const [card] = fromCol.cards.splice(index, 1);
  toCol.cards.push(card);
}