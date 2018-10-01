import { document } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { knobToggleAttr, bindEvent } from '../storybook-utils/knobUtils';

const buttonStories = storiesOf('Buttons', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('text', () => {
    const button = document.createElement('exo-button');
    button.setAttribute('Label', text('Button Label', 'Hello world'));
    knobToggleAttr(button, boolean('disabled', false), 'disabled');
    knobToggleAttr(button, boolean('rasied', false), 'raised');
    bindEvent(button, 'click');
    bindEvent(button, 'mouseover');
    return button
});
