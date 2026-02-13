export const uiState = {
  selected: null, // { columnId: string, index: number }
};

export function setSelected(columnId, index) {
  uiState.selected = { columnId, index };
}

export function clearSelected() {
  uiState.selected = null;
}
