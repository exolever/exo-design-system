import { html } from '@polymer/lit-element/lit-element.js';
import { Button } from 'material-components-web-components/packages/button';
import { PURPLE, WHITE, GREY } from 'src/assets/colors';
import * as colorUtils from 'color';
export class ExoButton extends Button {
  renderStyle(){
    console.log(super.renderStyle().strings[0])
    return html`
    ${super.renderStyle()}
    <style>
     .mdc-button {
       /* SECONDARY */
      --mdc-theme-primary: ${PURPLE[500]};
      box-shadow: 0px 0px 0px;
      font-family: Roboto, sans-serif;
      }
      .mdc-button:disabled {
        /* DISABLED */
        background-color: ${GREY['900-016']};
        color: ${colorUtils(PURPLE[500]).alpha(0.4)};
      }

      .mdc-button--raised {
        /* PRIMARY BUTTON */
        background-color: var(--mdc-theme-primary, ${PURPLE[500]});
        border-radius: 30px
      }
    </style>`;
  }
}
customElements.define('exo-button', ExoButton);
