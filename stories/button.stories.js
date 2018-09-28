import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import '@material/mwc-button';
const button = document.createElement('mwc-button');
    button.type = 'button';
    button.innerText = text('text', 'Hello Storybook');
    button.addEventListener('click', e => action('clicked')(e));

const buttonStories = storiesOf('Buttons', module);
// buttonStories.addDecorator(withKnobs);
console.log(buttonStories.addDecorator)
buttonStories.add('text', () => button);
