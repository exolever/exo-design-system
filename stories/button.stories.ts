import { document } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { knobToggleAttr, bindEvent } from '../.storybook/knobUtils';
const storyFrame = document.createElement('div');
storyFrame.innerHTML = `
    <div class="Frame">
        <div id="with-text">
        <h1>Primary button</h1>
    </div>
`

//TODO create component frame base
const buttonStories = storiesOf('Buttons', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('with text', () => {
    const button = document.createElement('exo-button');
    button.setAttribute('Label', text('Button Label', 'Hello world'));
    knobToggleAttr(button, boolean('disabled', false), 'disabled');
    knobToggleAttr(button, boolean('rasied', true), 'raised');
    bindEvent(button, 'click');
    bindEvent(button, 'mouseover');
    return button
});
buttonStories.add('with icon', () => {
    const button = document.createElement('exo-button');
    button.innerHTML = `<i class="material-icons">favorite</i>`;
    button.setAttribute('Label', text('Button Label', 'Favorites'));
    knobToggleAttr(button, boolean('disabled', false), 'disabled');
    knobToggleAttr(button, boolean('rasied', true), 'raised');
    bindEvent(button, 'click');
    bindEvent(button, 'mouseover');
    return button
});

