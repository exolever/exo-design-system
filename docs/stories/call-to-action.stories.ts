import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
const html = require('nanohtml');

function toggle(check, attr) {
    return check ? attr : '';
}

const themeOptions = {
    'eco': 'eco',
    'dark': 'dark',
    'project': 'project'
}
const emphasisOptions = {
    'primary': 'primary',
    'secondary': 'secondary',
    'text': 'text'
}

const buttonStories = storiesOf('Calls to Action', module);
buttonStories.addDecorator(withKnobs);

buttonStories.add('Primary Button', () => {
    // Side toggles
    const toggles = {
        theme: select('theme', themeOptions, 'eco'),
        label: text('Label text', 'Hello World'),
        icon: text('Icon', 'star'),
        disabled: toggle(boolean('disabled', false), 'disabled'),
        emphasis: select('emphasis', emphasisOptions, 'primary'),
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
      <small>exo-button</small>
      <h1>Primary Button</h1>
    </header>
    <div class="card">
       <exo-button
        theme="${toggles.theme}"
        emphasis="${toggles.emphasis}"
        label="${toggles.label}"
        ${toggles.disabled}
        onclick="${toggles.onclick}"
        onmouseover="${toggles.onmouseover}"
       /></exo-button>
     </div>
     <header>
       <small>exo-button</small>
       <h1>Primary Button with icon</h1>
     </header>
     <div class="card">
       <exo-button
        theme="${toggles.theme}"
        emphasis="${toggles.emphasis}"
        label="${toggles.label}"
        icon="${toggles.icon}"
        ${toggles.disabled}
        onclick="${toggles.onclick}"
        onmouseover="${toggles.onmouseover}"
       />
        </exo-button>
     </div>
    </div>
    `;
});

