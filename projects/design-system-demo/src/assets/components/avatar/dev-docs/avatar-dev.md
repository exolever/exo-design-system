The `Avatar system` provides a flexible system for rendering avatars of different models in the application.

### Avatar System
A `Avatar system` is a piece of UI that rendered an image with some extra info, like name, description, etc.

##### `Avatar system`

| Inputs                      | Description                         | Type                          | 
| --------------------------- | ----------------------------------- | ----------------------------- |
| name                        | Name of `<T>`                       | string                        | 
| description                 | Description of `<T>`                | string                        |
| direction                   | Can be row or column                | ExOAvatarSystemDirectionEnum  |
| truncateName                | Truncate the input name             | boolean                       |
| truncateDescription         | Truncate the input description      | boolean                       |
| connected                   | Show a green indicator near name    | boolean                       |


| ContentChild                | Description                         | Type                          | 
| --------------------------- | ----------------------------------- | ----------------------------- |
|  exo-avatar                 | exo-avatar component                | ExOAvatarComponent            | 

#### Avatar system in practice

Usage:
```html
<exo-avatar-system [name]="user.name" [description]="user.roles" [direction]="column" [truncateDescription]="true" [connected]="true">
  <exo-avatar [src]="user.bigPicture()" alt="User avatar"></exo-avatar>
</exo-avatar-system>
```


### Avatar

A `Avatar` is a piece of UI that rendered an image with the possibility to render certifications, etc.

##### `Avatar`

| Inputs                      | Description                         | Type                          | 
| --------------------------- | ----------------------------------- | ----------------------------- |
|  src                        | Custom src to load                  | string                        | 
|  alt                        | Custom alt attr to image            | string                        |
|  size                       | Size of the image, by default will be sm | SizeAvatarEnum           |
|  tooltip                    | Show a tooltip in the image         | string                        |
|  tooltipPosition            | Position where the tooltip will show | TooltipPosition              |
|  certificates               | Certificates only will work with the standards sizes | Certificate  |

| Enums                       | Values                              | 
| --------------------------- | ----------------------------------- | 
|  CertificateEnum            | Coach = 'X',                        |
|                             | Trainer = 'T',                      |
|                             | Ambassador = 'K',                   |
|                             | AlignTrainer = 'I',                 |
|  SizeAvatarEnum             | xs (24px) |
|                             | sm (48px) Default value |
|                             | lg (96px) |
|                             | xl  (144px)|


#### Avatar in practice

Usage:
```html
<exo-avatar src="https://www.stevensegallery.com/150/150"
            alt="steven seagal"
            tooltip="Steven Seagal"
            size="lg"
            tooltipPosition="left"
            [certificates]="arrayCertificates"
>
</exo-avatar>
```
