import { initialState } from "./app/state.js";
import { renderApp } from "./app/render.js";
import { mount } from "./ui/dom.js";

const app = document.getElementById("app");

// A simple "render once" for now
mount(app, renderApp(initialState));

console.log("App booted with", initialState);