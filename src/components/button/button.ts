import { html, property } from '@polymer/lit-element/lit-element.js';
import { Button } from 'mwc/packages/button';
import { PURPLE, RED, WHITE, GREY } from 'src/assets/colors';
import * as colorUtils from 'color';
import { ECO_THEME } from 'src/components/button/theme/eco';
import { DARK_THEME } from 'src/components/button/theme/dark';
import { PROJECT_THEME } from 'src/components/button/theme/project';

function overrides(themeVariables ) {
  return html`
<style>
    .mdc-button:not(:disabled),
    .mdc-button--raised,
    .mdc-button {
      ${themeVariables}
      box-shadow: 0px 0px 0px;
      background-color: var(--mdc-theme-bg);
      color: var(--mdc-theme-text);
      border-radius: var(--mdc-theme-border-radius);
      padding: 0 16px 0 16px;
    }
    .mdc-button:not(:disabled):hover,
    .mdc-button:hover,
    .mdc-button--raised:hover {
      box-shadow: 0px 0px 0px;
      background-color: var(--mdc-theme-bg-hover);
      color: var(--mdc-theme-text-hover);
      border-radius: var(--mdc-theme-border-radius-hover);
    }

    .mdc-button--raised:disabled,
    .mdc-button:disabled {
      box-shadow: 0px 0px 0px;
      background-color: var(--mdc-theme-bg-disabled);
      color: var(--mdc-theme-text-disabled);
      border-radius: var(--mdc-theme-border-radius-disabled);
    }
    .material-icons {
      font-family: var(--mdc-icon-font, "Material Icons");
      font-size: var(--mdc-icon-size, 24px);
    }
 </style>
`;
  }

const THEMES = {
  'eco': ECO_THEME,
  'dark': DARK_THEME,
  'project': PROJECT_THEME
}

export class ExoButton extends Button {

  @property()
  theme = 'eco';
  @property()
  emphasis = 'primary';

  renderStyle() {
    const { theme, emphasis } = this;
    const themeVariables = THEMES[theme][emphasis];
    console.log(theme, emphasis, themeVariables)
    return html`
    ${super.renderStyle()}
    ${overrides(themeVariables)}
    `;
  }
}
customElements.define('exo-button', ExoButton);
