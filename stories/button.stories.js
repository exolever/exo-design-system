import { document, console } from 'global';
import { storiesOf, addDecorator } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { knobToggleAttr, bindEvent } from '../storybook-utils/knobUtils';
import {html} from '@polymer/lit-element/lit-element.js';
import { Button } from 'material-components-web-components/packages/button';
class CustomButton extends Button {
  _renderStyle(){
    return html`${super._renderStyle()}<style>.mdc-button{border-radius: 30px}</style>`;
  }
}
customElements.define('custom-button', CustomButton);


const buttonStories = storiesOf('Buttons', module);
buttonStories.addDecorator(withKnobs);
buttonStories.add('text', () => {
    const button = document.createElement('custom-button');
    button.setAttribute('Label', text('Button Label', 'Hello world'));
    knobToggleAttr(button, boolean('disabled', false), 'disabled');
    knobToggleAttr(button, boolean('rasied', false), 'raised');
    bindEvent(button, 'click');
    bindEvent(button, 'mouseover');
    return button
});
