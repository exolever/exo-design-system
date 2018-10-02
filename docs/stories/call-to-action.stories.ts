import { document } from 'global';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { knobToggleAttr, bindEvent } from '../.storybook/knobUtils';
const html = require('nanohtml');

function toggle(check, attr) {
    return check ? attr : '';
}

const buttonStories = storiesOf('Calls to Action', module);
buttonStories.addDecorator(withKnobs);

buttonStories.add('Primary Button', () => {
    // Side toggles
    const toggles = {
        theme: text('Theme', 'light'),
        label: text('Label text', 'Hello World'),
        icon: text('Icon', 'star'),
        disabled: toggle(boolean('disabled', false), 'disabled'),
        raised: toggle(boolean('raised', true), 'raised'),
        onclick: action('click'),
        onmouseover: action('mouseover'),
    }
    return html`
    <div>
        <style>
            header {

            margin: 32px 0 24px 0;
            }
        h1 {
            margin: 0;
            font-size: 32px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #46464b;
            clear: both;
            width: 100%;
            display:block;
        }
        small {
            font-size: 14px;
            font-weight: 500;
            font-style: normal;
            text-transform: uppercase;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: center;
            clear: both;
            width: 100%;
            display:block;
            color: #6f23ff;
        }
        .card {
            text-align: center;
            padding: 48px 15px;
            margin: 15px;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 2px 8px 0 #00000051;
        }
        </style>
    <header>
      <small>mat-raised-button</small>
      <h1>Primary Button</h1>
    </header>
    <div class="card">
       <exo-button
        theme="${toggles.theme}"
        label="${toggles.label}"
        ${toggles.disabled}
        ${toggles.raised}
        onclick="${toggles.onclick}"
        onmouseover="${toggles.onmouseover}"
       /></exo-button>
     </div>
     <header>
       <small>mat-raised-button</small>
       <h1>Primary Button with icon</h1>
     </header>
     <div class="card">
       <exo-button
        theme="${toggles.theme}"
        label="${toggles.label}"
        icon="${toggles.icon}"
        ${toggles.disabled}
        ${toggles.raised}
        onclick="${toggles.onclick}"
        onmouseover="${toggles.onmouseover}"
       />
        </exo-button>
     </div>
    </div>
    `;
});

