import { html, property } from '@polymer/lit-element/lit-element.js';
import { Button } from 'mwc/packages/button';
import { PURPLE, RED, WHITE, GREY } from 'src/assets/colors';
import * as colorUtils from 'color';
const defaultTheme = html`
  <style>
    :host {
    /* mat-raised-button */
    --primary-default: ${PURPLE[500]};
    --primary-hover: ${PURPLE[700]};
    --primary-text: ${WHITE[500]};

    /* mat-button */
    --mdc-theme-primary: ${PURPLE[500]};
    --mdc-theme-disabled-bg: ${GREY['900-016']};
    --mdc-theme-disabled-text: ${GREY['500']};
    --mdc-theme-hover-bg: ${PURPLE[500]};
    --mdc-theme-hover-text: ${PURPLE[500]};
    --mdc-theme-border-radius: 30px;
    --
    }
  </style>
`;

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
    --mdc-theme-disabled-bg: ${GREY['900-024']};
    --mdc-theme-disabled-text: ${WHITE[900]};
    --mdc-theme-border-radius: 30px;
    --mdc-theme-button-psudeo: ${WHITE['900']};
    }
  </style>
`

const overrides = html`
<style>
      .mdc-button {
        box-shadow: 0px 0px 0px;
      }
      .mdc-button:disabled {
        background-color: var(--mdc-theme-disabled-bg);
        color:  var(--mdc-theme-disabled-text);
      }

      /* TODO - Change to attr */
      /* PRIMARY */
      .mdc-button--raised {
        background-color: var(--primary-default);
        color: var(--primary-text);
        border-radius: var(--mdc-theme-border-radius);
      }
      .mdc-button--raised:hover {
        background-color: var(--primary-hover);
        color: var(--primary-text);
        border-radius: var(--mdc-theme-border-radius);
        /* box-shadow: 0px 0px 0px; */
      }
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
