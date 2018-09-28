import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import '@material/mwc-button';

storiesOf('Welcome', module)
  .add('heading', () => '<h1>Hello World</h1>')