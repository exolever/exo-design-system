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

