/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 */
import { LitElement, html, customElement, property } from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('note-card')
export class NoteCard extends LitElement {
  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'foo';

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    console.log('rendering');
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`
      <p>${this.foo}</p>
    `;
  }
}
