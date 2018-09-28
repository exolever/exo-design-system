import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import '@material/mwc-button';

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('mwc-button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => action('clicked')());
    return button;
  });
