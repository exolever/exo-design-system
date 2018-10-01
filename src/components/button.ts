import { html } from '@polymer/lit-element/lit-element.js';
import { Button } from 'material-components-web-components/packages/button';
import { PURPLE } from '../assets/colors';

export class ExoButton extends Button {
  renderStyle(){
    return html`
    ${super.renderStyle()}
    <style>
      .mdc-button {
        border-radius: 30px
      }
    </style>`;
  }
}
customElements.define('exo-button', ExoButton);
// --mdc-theme-primary: ${PURPLE[500]};
