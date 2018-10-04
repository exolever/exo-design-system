import { PURPLE, RED, WHITE, GREY, INDIGO } from 'src/assets/colors';
export const PRIMARY = `
  --mdc-theme-primary: ${RED[500]};
  --mdc-theme-on-primary: ${WHITE[900]};
  --mdc-theme-bg: ${RED[500]};
  --mdc-theme-text: ${WHITE[900]};
  --mdc-theme-border-radius: 48px;
  --mdc-theme-bg-hover: ${RED[700]};
  --mdc-theme-text-hover:  ${WHITE[900]};
  --mdc-theme-border-radius-hover: 48px;
  --mdc-theme-bg-disabled: ${GREY['900-024']};
  --mdc-theme-text-disabled:  ${WHITE[900]};
  --mdc-theme-border-radius-disabled: 48px;
`
export const SECONDARY = `
--mdc-theme-primary: ${INDIGO['900-008']};
--mdc-theme-on-primary: ${WHITE[900]};
--mdc-theme-bg: ${INDIGO['900-008']};
--mdc-theme-text: ${RED[500]};
--mdc-theme-border-radius: 48px;
--mdc-theme-bg-hover: ${INDIGO['900-016']};
--mdc-theme-text-hover: ${RED[500]};
--mdc-theme-border-radius-hover: 48px;
--mdc-theme-bg-disabled: ${GREY['900-024']};
--mdc-theme-text-disabled: ${WHITE[900]};
--mdc-theme-border-radius-disabled: 48px;
`

export const TEXT = `
--mdc-theme-primary: transparent;
--mdc-theme-on-primary: ${GREY['900-016']};
--mdc-theme-bg: transparent;
--mdc-theme-text: ${RED[500]};
--mdc-theme-border-radius: 0;
--mdc-theme-bg-hover: ${GREY['900-016']};
--mdc-theme-text-hover: ${RED[700]};
--mdc-theme-border-radius-hover: 0;
--mdc-theme-bg-disabled: transparent;
--mdc-theme-text-disabled: ${GREY['900-032']};
--mdc-theme-border-radius-disabled: 0;
`
export const PROJECT_THEME = {
  'primary': PRIMARY,
  'secondary': SECONDARY,
  'text': TEXT,
}