import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { action, withActions } from '@storybook/addon-actions';

storiesOf('Welcome', module)
  .add('heading', () => '<h1>Hello World</h1>')