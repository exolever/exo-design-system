import { html, property } from '@polymer/lit-element/lit-element.js';
import { Button } from 'mwc/packages/button';
import { PURPLE, RED, WHITE, GREY } from 'src/assets/colors';
import * as colorUtils from 'color';
const defaultTheme = html`
  <style>
    :host {
    --mdc-font-family:  Roboto, sans-serif;
    --mdc-theme-primary: ${PURPLE[500]};
    --mdc-theme-disabled-bg: ${GREY['900-016']};
    --mdc-theme-disabled-text: ${colorUtils(PURPLE[500]).alpha(0.4)};
    --mdc-theme-border-radius: 30px;
    }
  </style>
`

const projectTheme = html`
  <style>
    :host {
    --mdc-font-family:  Roboto, sans-serif;
    --mdc-theme-primary: ${RED[500]};
    --mdc-theme-disabled-bg: ${GREY['900-016']};
    --mdc-theme-disabled-text: ${colorUtils(PURPLE[500]).alpha(0.4)};
    --mdc-theme-border-radius: 30px;
    }
  </style>
`;
const darkTheme = html`
  <style>
    :host {
    --mdc-font-family:  Roboto, sans-serif;
    --mdc-theme-primary: ${PURPLE[500]};
    --mdc-theme-disabled-bg: ${GREY['900-016']};
    --mdc-theme-disabled-text: ${colorUtils(PURPLE[500]).alpha(0.4)};
    --mdc-theme-border-radius: 30px;
    /* UNSUED VARS
    --mdc-ripple-fg-opacity
    --mdc-icon-font
    --mdc-icon-size
    --mdc-theme-on-primary
    --mdc-theme-button-psudeo
    */
    }
  </style>
`

const overrides = html`
<style>
  .mdc-button {
       /* SECONDARY */
      box-shadow: 0px 0px 0px;
      font-family: var(--mdc-font-family);
      }
      .mdc-button:disabled {
        /* DISABLED */
        background-color: var(--mdc-theme-disabled-bg);
        color:  var(--mdc-theme-disabled-text);
      }

      .mdc-button--raised {
        /* PRIMARY BUTTON */
        background-color: var(--mdc-theme-primary);
        border-radius: var(--mdc-theme-border-radius);
      }

      .material-icons {}

      .mdc-button {}

      .mdc-button::before,
      .mdc-button::after {}
      .mdc-button::before {}


      .mdc-button::before,
      .mdc-button::after {}

      .mdc-button::-moz-focus-inner {}
      .mdc-button:active {}
      .mdc-button:hover {}
      .mdc-button:disabled {}
      .mdc-button:not(:disabled) {}
      .mdc-button:not(:disabled) {}

      .mdc-button::before,
      .mdc-button::after {}


      .mdc-button:hover::before {}

      .mdc-button .mdc-button__icon {}

      .mdc-button svg.mdc-button__icon {}

      .mdc-button--raised .mdc-button__icon,
      .mdc-button--unelevated .mdc-button__icon,
      .mdc-button--outlined .mdc-button__icon {}

      .mdc-button--raised,
      .mdc-button--unelevated {}

      .mdc-button--raised:disabled,
      .mdc-button--unelevated:disabled {}

      .mdc-button--raised:not(:disabled),
      .mdc-button--unelevated:not(:disabled) {}

      .mdc-button--raised:not(:disabled),
      .mdc-button--unelevated:not(:disabled) {}

      .mdc-button--raised::before,
      .mdc-button--raised::after,
      .mdc-button--unelevated::before,
      .mdc-button--unelevated::after {}

      .mdc-button--raised:hover::before,
      .mdc-button--unelevated:hover::before {}


      .mdc-button--raised {}

      .mdc-button--raised:hover,
      .mdc-button--raised:focus {}

      .mdc-button--raised:active {}

      .mdc-button--raised:disabled {}

      .mdc-button--outlined {}

      .mdc-button--outlined:disabled {}

      .mdc-button--outlined.mdc-button--dense {}

      .mdc-button--outlined:not(:disabled) {}

      .mdc-button--dense {}
</style>
`;


export class ExoButton extends Button {

  @property()
  theme = 'light';

  renderStyle() {
    const { theme } = this;
    let styles = defaultTheme;
    switch (theme) {
      case 'project':
        styles = projectTheme
        break;
     case 'dark':
        styles = darkTheme
        break;
    }
    return html`
    ${super.renderStyle()}
    ${styles}
    ${overrides}
    `;
  }
}
customElements.define('exo-button', ExoButton);
