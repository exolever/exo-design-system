# Exo Design Systems
Design overides for [Material Web Components](https://github.com/material-components/material-components-web-components)
following the ExOLever design guidelines.

![example](readme-assets/example.png)



# Structure

```
src
 |- components // new custom elements
 |- assets // JSS and values
 |_ registry.ts
 
stories
 |- 0-intro.stories.ts  // 0 is to place it at the top of the menu
 |_ button.stories.ts   // setup button section
 
.storybook
 |- addons.js           // add new panels
 |- config.js           // storybook settings
 |_ webpack.config.js   // config for webpack...
 

```



# Suggested Element Structure

```javascript
import { html } from '@polymer/lit-element/lit-element.js';
// for rendering templates
import { Button } from 'material-components-web-components/packages/button';
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

