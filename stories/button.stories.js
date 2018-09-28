import { document, console } from 'global';
import { storiesOf, addDecorator } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';
import { knobToggleAttr, bindEvent } from '../storybook-utils/knobUtils';
import '@material/mwc-button';


const buttonStories = storiesOf('Buttons', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('text', () => {
    const button = document.createElement('mwc-button');
    button.setAttribute('Label', text('Button Label', 'Hello world'));
    knobToggleAttr(button, boolean('disabled', false), 'disabled');
    knobToggleAttr(button, boolean('rasied', false), 'raised');
    bindEvent(button, 'click');
    bindEvent(button, 'mouseover');
    return button
});
