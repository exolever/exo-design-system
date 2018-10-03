# Exo Design Systems
Design overides for [Material Web Components](https://github.com/material-components/material-components-web-components)
following the ExOLever design guidelines.

# Setup

```
npm install   // installs npm and mwc
npm run start // runs browser.ts at localhost:9000
npm run install:storybook // install storybook npm deps
npm run start:storyboook // starts storybook listening to localhost:9000
```


# Structure

```
mwc - a gitignored clone of exolever/material-web-components
src
 |- components // new custom elements
 |- assets // JSS and values
 |- module.ts //TODO export defaults eg. export {default as Button } 'component/button';
 |_ browser.ts // defines custom element on DOMRegistry
docs
 |- stories
 |     |- 0-intro.stories.ts  // 0 is to place it at the top of the menu
 |     |_ button.stories.ts   // setup button section
 |   .storybook
 |     |- addons.js           // add new panels
 |     |- config.js           // storybook settings
 |_    |_ webpack.config.js   // config for webpack...


```


# Suggested Element Structure

```javascript
import { html } from '@polymer/lit-element/lit-element.js';
// for rendering templates
import { Button } from 'mwc/packages/button';
// the mwc you wish to extend

export class ExoButton extends Button {
  renderStyle(){
    return html`
    ${super.renderStyle()} <!-- Old Styles -->
    <style>
     .mdc-button {
      	/* new overrides */
		/* please follow */
		/* https://material.io/develop/web/docs/theming/ */
      }
    </style>`;
  }
}

customElements.define('exo-button', ExoButton);

```

#