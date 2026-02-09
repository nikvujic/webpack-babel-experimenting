import "./styles.css";

import { state, setState } from "./app/state.js";
import { renderApp } from "./app/render.js";
import { mount } from "./ui/dom.js";
import { addCard, removeCard } from "./app/actions.js";
import { loadState, saveState} from "./services/storage.js";
import { isValidState } from "./app/validate.js";

const app = document.getElementById("app");

const loaded = loadState();
if (isValidState(loaded)) {
  setState(loaded);
}

function commit() {
  saveState(state);
  rerender();
}

function rerender() {
  mount(
    app,
    renderApp(state, {
      onAddCard: (columnId, text) => {
        addCard(columnId, text);
        commit();
      },
      onDeleteCard: (columnId, index) => {
        removeCard(columnId, index);
        commit();
      }
    })
  );
}

rerender();

console.log("App running");


const user = { profile: { name: "Ana" } };
console.log("Name:", user?.profile?.name ?? "Unknown");
console.log("Includes:", [1, 2, 3].includes(2));