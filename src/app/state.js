export let state = {
  columns: [
    { id: "todo", title: "Todo", cards: ["Learn bundlers", "Build Kanban"] },
    { id: "doing", title: "Doing", cards: ["Write modules"] },
    { id: "done", title: "Done", cards: [] },
  ],
};

export function setState(nextState) {
  state = nextState;
}