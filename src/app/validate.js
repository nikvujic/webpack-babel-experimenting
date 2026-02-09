export function isValidState(x) {
  if (!x || typeof x !== "object") return false;
  if (!Array.isArray(x.columns)) return false;

  for (const col of x.columns) {
    if (!col || typeof col !== "object") return false;
    if (typeof col.id !== "string") return false;
    if (typeof col.title !== "string") return false;
    if (!Array.isArray(col.cards)) return false;
    if (!col.cards.every((c) => typeof c === "string")) return false;
  }
  return true;
}
