import { html, property } from '@polymer/lit-element/lit-element.js';
import { Button } from 'mwc/packages/button';
import { ECOSYSTEM_THEME } from 'src/components/button/theme/ecosystem';
import { DARK_THEME } from 'src/components/button/theme/dark';
import { PROJECT_THEME } from 'src/components/button/theme/project';
import { overrides } from 'src/components/button/overrides';


const THEMES = {
  'ecosystem': ECOSYSTEM_THEME,
  'dark': DARK_THEME,
  'project': PROJECT_THEME
}

export class ExoButton extends Button {

  @property()
  theme = 'ecosystem';
  @property()
  emphasis = 'primary';

  renderStyle() {
    const { theme, emphasis } = this;
    const themeVariables = THEMES[theme][emphasis];
    return html`
    ${super.renderStyle()}
    ${overrides(themeVariables)}
    `;
  }
}
customElements.define('exo-button', ExoButton);
