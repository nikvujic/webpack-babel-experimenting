export function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "className") {
      node.className = value;
    } else if (value === false || value == null) {
      // skip null/undefined/false attributes
    } else {
      node.setAttribute(key, String(value));
    }
  }

  for (const child of children.flat()) {
    if (child == null) continue;
    node.appendChild(
      child instanceof Node ? child : document.createTextNode(String(child))
    );
  }

  return node;
}

export function mount(container, node) {
  container.replaceChildren(node);
}
