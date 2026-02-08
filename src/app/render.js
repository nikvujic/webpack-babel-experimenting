import { el } from "../ui/dom.js";

/**
 * Pure render: given state, return a DOM tree.
 * No side effects here besides building nodes.
 */
export function renderApp(state, handlers) {
  return el(
    "div",
    { className: "app" },
    el("h1", {}, "Mini Kanban"),
    el(
      "div",
      { className: "board" },
      state.columns.map((col) => renderColumn(col, handlers))
    )
  );
}

function renderColumn(col, handlers) {
  return el(
    "section",
    { className: "column", "data-col": col.id },
    el("h2", {}, col.title),

    el(
      "form",
      {
        className: "add-card",
        onSubmit: (e) => {
          e.preventDefault();

          const input = e.currentTarget.elements.namedItem("text");
          const value = input && "value" in input ? input.value : "";

          handlers.onAddCard(col.id, value);

          if (input && "value" in input) input.value = "";
        },
      },
      el("input", {
        name: "text",
        placeholder: "Add a card…",
        autocomplete: "off",
      }),
      el("button", { type: "submit" }, "Add")
    ),

    el(
      "ul",
      {
        className: "cards",
        onClick: (e) => {
          const deleteBtn = e.target.closest('button[data-action="delete"]');
          if (!deleteBtn) return;

          const idxStr = deleteBtn.getAttribute("data-idx");
          const idx = idxStr ? Number(idxStr) : NaN;
          if (Number.isNaN(idx)) return;

          handlers.onDeleteCard(col.id, idx);
        }
      },
      col.cards.map((text, idx) =>
        el(
          "li",
          { className: "card", "data-idx": String(idx) },
          el("span", { className: "card-text "}, text),
          el(
            "button",
            {
              tyle: "button",
              className: "card-delete",
              "aria-label": "Delete card",
              "data-action": "delete",
              "data-idx": String(idx)
            },
            "Delete"
          )
        )
      )
    )
  );
}