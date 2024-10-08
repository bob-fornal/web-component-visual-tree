class VisualTreeElement extends HTMLElement {
  static observedAttributes = ['parent', 'children'];

  constructor() {
    super();
  }
}

customElements.define('visual-tree', VisualTreeElement)
