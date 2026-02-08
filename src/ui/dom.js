/**
 * Tiny helper to create DOM elements declaratively.
 * This is NOT a framework. It's just a convenience function.
 */
export function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);

  // Apply props (attributes + event listeners)
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && typeof value === "function") {
      // onClick -> click
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "className") {
      node.className = value;
    } else if (value === false || value == null) {
      // skip null/undefined/false attributes
    } else {
      node.setAttribute(key, String(value));
    }
  }

  // Append children (strings become text nodes)
  for (const child of children.flat()) {
    if (child == null) continue;
    node.appendChild(
      child instanceof Node ? child : document.createTextNode(String(child))
    );
  }

  return node;
}

/**
 * Replace contents of a container with a new node.
 * This is our "render loop" primitive.
 */
export function mount(container, node) {
  container.replaceChildren(node);
}
