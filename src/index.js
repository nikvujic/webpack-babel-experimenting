import "./styles.css";

import { state } from "./app/state.js";
import { renderApp } from "./app/render.js";
import { mount } from "./ui/dom.js";
import { addCard } from "./app/actions.js";

const app = document.getElementById("app");

function rerender() {
  mount(
    app,
    renderApp(state, {
      onAddCard: (columnId, text) => {
        addCard(columnId, text);
        rerender();
      },
    })
  );
}

rerender();
console.log("App running");