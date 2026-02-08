import { el } from "../ui/dom.js";

/**
 * Pure render: given state, return a DOM tree.
 * No side effects here besides building nodes.
 */
export function renderApp(state) {
  return el(
    "div",
    { className: "app" },
    el("h1", {}, "Mini Kanban"),
    el(
      "div",
      { className: "board" },
      state.columns.map((col) =>
        el(
          "section",
          { className: "column", "data-col": col.id },
          el("h2", {}, col.title),
          el(
            "ul",
            { className: "cards" },
            col.cards.map((text) => el("li", { className: "card" }, text))
          )
        )
      )
    )
  );
}