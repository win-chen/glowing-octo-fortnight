import { LitElement, html, customElement, property } from 'lit-element';

@customElement('test-app') 
export class App extends LitElement {
	render() {
		return html`
			<div>
			hello
			</div>
		`;
	}
}