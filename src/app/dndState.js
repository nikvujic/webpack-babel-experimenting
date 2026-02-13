export const dndState = {
  dragging: null, // { columnId, index }
  overColumnId: null,
};

export function startDrag(columnId, index) {
  dndState.dragging = { columnId, index };
}

export function endDrag() {
  dndState.dragging = null;
  dndState.overColumnId = null;
}

export function setOverColumn(columnId) {
  dndState.overColumnId = columnId;
}
