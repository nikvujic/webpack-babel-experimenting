import "./styles.css";

import { state, setState } from "./app/state.js";
import { renderApp } from "./app/render.js";
import { mount } from "./ui/dom.js";
import { addCard, removeCard, moveCard } from "./app/actions.js";
import { loadState, saveState } from "./services/storage.js";
import { isValidState } from "./app/validate.js";
import { uiState, setSelected, clearSelected } from "./app/uiState.js";

const app = document.getElementById("app");

const loaded = loadState();
if (isValidState(loaded)) {
  setState(loaded);
}
if (!uiState.selected) {
  const firstCol = state.columns.find((c) => c.cards.length > 0);
  if (firstCol) setSelected(firstCol.id, 0);
}

function commit() {
  saveState(state);
  rerender(true);
}

function rerender(shouldRestoreFocus = false) {
  mount(
    app,
    renderApp(state, {
      onAddCard: (columnId, text) => {
        addCard(columnId, text);

        // if nothing selected, select the newly added card
        const col = state.columns.find((c) => c.id === columnId);
        if (col) setSelected(columnId, col.cards.length - 1);

        commit();
      },

      onDeleteCard: (columnId, index) => {
        removeCard(columnId, index);

        // update selection: try to keep selection in same column
        const col = state.columns.find((c) => c.id === columnId);
        if (!col || col.cards.length === 0) {
          clearSelected();
        } else {
          const nextIdx = Math.min(index, col.cards.length - 1);
          setSelected(columnId, nextIdx);
        }

        commit();
      },

      onMoveCard: (columnId, index, delta) => {
        const fromIdx = state.columns.findIndex((c) => c.id === columnId);
        const toIdx = fromIdx + delta;

        if (fromIdx === -1) return;
        if (toIdx < 0 || toIdx >= state.columns.length) return;

        moveCard(columnId, index, delta);

        const toCol = state.columns[toIdx];
        setSelected(toCol.id, toCol.cards.length - 1);

        commit();
      },

      onSelectCard: (columnId, index) => {
        setSelected(columnId, index);
        rerender(true);
      },

      onMoveSelection: (columnId, index, delta) => {
        const col = state.columns.find((c) => c.id === columnId);
        if (!col) return;

        const nextIdx = index + delta;
        if (nextIdx < 0 || nextIdx >= col.cards.length) return;

        setSelected(columnId, nextIdx);
        rerender(true);
      },
    })
  );

  if (shouldRestoreFocus) {
    restoreFocusToSelected();
  }
}

function restoreFocusToSelected() {
  if (!uiState.selected) return;

  const { columnId, index } = uiState.selected;
  const el = app.querySelector(
    `.column[data-col="${CSS.escape(columnId)}"] li.card[data-idx="${index}"]`
  );
  if (el) el.focus();
}

rerender(true);


const user = { profile: { name: "Ana" } };
console.log("Name:", user?.profile?.name ?? "Unknown");
console.log("Includes:", [1, 2, 3].includes(2));