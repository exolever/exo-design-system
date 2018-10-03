import { PURPLE, RED, WHITE, GREY } from 'src/assets/colors';
export const PRIMARY = `
  --mdc-theme-primary: ${PURPLE[500]};
  --mdc-theme-on-primary: ${WHITE[900]};
  --mdc-theme-bg: ${PURPLE[500]};
  --mdc-theme-text: ${WHITE[900]};
  --mdc-theme-border-radius: 48px;
  --mdc-theme-bg-hover: ${PURPLE[700]};
  --mdc-theme-text-hover:  ${WHITE[900]};
  --mdc-theme-border-radius-hover: 48px;
  --mdc-theme-bg-disabled: ${GREY['900-024']};
  --mdc-theme-text-disabled:  ${WHITE[900]};
  --mdc-theme-border-radius-disabled: 48px;
`
export const SECONDARY = `
--mdc-theme-primary: ${PURPLE[500]};
--mdc-theme-on-primary: ${WHITE[900]};
--mdc-theme-bg: ${PURPLE[500]};
--mdc-theme-border-radius: ${PURPLE[700]};
--mdc-theme-bg-hover: ${PURPLE[500]};
--mdc-theme-text-hover: ${PURPLE[500]};
--mdc-theme-border-radius-hover: ${PURPLE[500]};
--mdc-theme-bg-disabled: ${PURPLE[500]};
--mdc-theme-text-disabled: ${PURPLE[500]};
--mdc-theme-border-radius-disabled: ${PURPLE[500]};
`

export const TEXT = `
--mdc-theme-primary: ${PURPLE[500]};
--mdc-theme-on-primary: ${WHITE[900]};
--mdc-theme-bg: ${PURPLE[500]};
--mdc-theme-border-radius: ${PURPLE[700]};
--mdc-theme-bg-hover: ${PURPLE[500]};
--mdc-theme-text-hover: ${PURPLE[500]};
--mdc-theme-border-radius-hover: ${PURPLE[500]};
--mdc-theme-bg-disabled: ${PURPLE[500]};
--mdc-theme-text-disabled: ${PURPLE[500]};
--mdc-theme-border-radius-disabled: ${PURPLE[500]};
`
export const ECO_THEME = {
  'primary': PRIMARY,
  'secondary': SECONDARY,
  'text': TEXT,
}