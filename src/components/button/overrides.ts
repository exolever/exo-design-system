import { html } from '@polymer/lit-element/lit-element.js';
export function overrides(themeVariables ) {
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