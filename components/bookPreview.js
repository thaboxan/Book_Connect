/**
 * HTML element
 *
 * @class
 * @extends HTMLElement
 */
class BookPreview extends HTMLElement {
  /**
   * Returns an array of attribute names to observe for changes.
   *
   * @static
   * @returns {Array<string>} An array of attribute names to observe.
   */
  static get observedAttributes() {
    // These are the attributes that will be monitored for changes.
    return ["author", "id", "image", "title"];
  }

  /**
   * Creates an instance of BookPreview.
   *
   * @constructor
   */
  constructor() {
    super();
    // Attach a shadow DOM tree to this instance in open mode.
    this.attachShadow({ mode: "open" });
  }

  /**
   * Called when an observed attribute has been added, removed, or updated.
   *
   * @param {string} name - The name of the attribute that changed.
   * @param {string|null} oldValue - The old attribute value.
   * @param {string|null} newValue - The new attribute value.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // Only update if the attribute's value has actually changed.
    if (oldValue !== newValue) {
      this.render();
    }
  }

  /**
   * Called when the component is inserted into the DOM.
   */
  connectedCallback() {
    // Initial rendering of the component.
    this.render();
  }

  /**
   * Renders the book preview UI.
   */
  render() {
    // Get attribute values from the element.
    const author = this.getAttribute("author");
    const id = this.getAttribute("id");
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");

    // Set the inner HTML of the shadow root to define the component's structure and styling.
    this.shadowRoot.innerHTML = `     
        <style>
          .preview {
            display: flex;
            align-items: center;
            cursor: pointer;
            border: none;
            background: none;
            padding: 10px;
          }
  
          .preview__image {
            width: 50px;
            height: 75px;
            object-fit: cover;
            margin-right: 10px;
          }
  
          .preview__info {
            display: flex;
            flex-direction: column;
          }
  
          .preview__title {
            font-size: 1rem;
            margin: 0;
          }
  
          .preview__author {
            font-size: 0.875rem;
            color: gray;
          }
        </style>
  
        <button class="preview" data-preview="${id}">
          <img class="preview__image" src="${image}" />
          <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${author}</div>
          </div>
        </button>
      `;
  }
}

// Define the new element so it can be used in the HTML.
customElements.define("book-preview", BookPreview);
