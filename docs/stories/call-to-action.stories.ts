import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
const html = require('nanohtml');

function toggle(check, attr) {
    return check ? attr : '';
}

const themeOptions = {
    'ecosystem': 'ecosystem',
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
        theme: select('theme', themeOptions, 'ecosystem'),
        label: text('Label text', 'Hello World'),
        icon: text('Icon', 'star'),
        disabled: toggle(boolean('disabled', false), 'disabled'),
        emphasis: select('emphasis', emphasisOptions, 'primary'),
        onclick: action('click'),
        onmouseover: action('mouseover'),
    }

    return html`
    <div>
    <header>
      <small>exo-button</small>
      <h1>Primary Button</h1>
    </header>
    <div class="card ${toggles.theme}">
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
     <div class="card ${toggles.theme}">
        <exo-button
            theme="${toggles.theme}"
            emphasis="${toggles.emphasis}"
            label="${toggles.label}"
            icon="${toggles.icon}"
            ${toggles.disabled}
            onclick="${toggles.onclick}"
            onmouseover="${toggles.onmouseover}"
       /></exo-button>
     </div>
    </div>
    `;
});

