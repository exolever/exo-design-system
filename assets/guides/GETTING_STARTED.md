# Getting started

#### Step 1: Install peerDependencies (if you haven't in your project)
Our system design have as peerDependencies @angular/cdk, @angular/common, @angular/core, @angular/material.
So the **first step** is install dependencies:

**NPM**
```
npm install --save @angular/cdk@^7.0.0 @angular/common@^7.0.0 @angular/core@^7.0.0 @angular/material@^7.0.0 
```

**Yarn** 
```
yarn add @angular/cdk@^7.0.0 @angular/common@^7.0.0 @angular/core@^7.0.0 @angular/material@^7.0.0 
```

#### Step 2: Install the design-system.

**NPM**
```
npm install --save @openexo/design-system
```

**Yarn**
```
yarn add @openexo/design-system
```

#### Step 3: Apply theme

Go to your styles.scss and import theming from @openexo.
```
@import '~@openexo/design-system/theming';
```

#### Step 4: Use some module in your app

If you want use some module in your project (For example, exoButtonLoading directive), go to your module and import the ExOButtonModule.

```
import { ExoButtonModule } from '@openexo/design-system';

@NgModule({
  imports: [
    ExoButtonModule,
  ],
})
```

and use in your views as
```
<button
  mat-raised-button
  exoButtonLoading
  [isLoading]="boolean"
  color="primary"
>
  Example button
</button>
```
