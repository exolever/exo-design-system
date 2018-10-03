import { PURPLE, RED, WHITE, GREY } from 'src/assets/colors';
export const PRIMARY = `
  --mdc-theme-primary: ${PURPLE[500]};
  --mdc-theme-on-primary: ${WHITE[900]};
  --mdc-theme-bg: ${PURPLE[500]};
  --mdc-theme-border-radius: 30px;
  --mdc-theme-bg-hover: ${PURPLE[500]};
  --mdc-theme-text-hover: ${PURPLE[500]};
  --mdc-theme-border-radius-hover: ${PURPLE[500]};
  --mdc-theme-bg-disabled: ${PURPLE[500]};
  --mdc-theme-text-disabled: ${PURPLE[500]};
  --mdc-theme-border-radius-disabled: ${PURPLE[500]};
`
export const SECONDARY = `
--mdc-theme-primary: ${PURPLE[500]};
--mdc-theme-on-primary: ${WHITE[900]};
--mdc-theme-bg: ${PURPLE[500]};
--mdc-theme-border-radius: 30px;
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
--mdc-theme-border-radius: 30px;
--mdc-theme-bg-hover: ${PURPLE[500]};
--mdc-theme-text-hover: ${PURPLE[500]};
--mdc-theme-border-radius-hover: ${PURPLE[500]};
--mdc-theme-bg-disabled: ${PURPLE[500]};
--mdc-theme-text-disabled: ${PURPLE[500]};
--mdc-theme-border-radius-disabled: ${PURPLE[500]};
`
export const DARK_THEME = {
  'primary': PRIMARY,
  'secondary': SECONDARY,
  'text': TEXT,
}