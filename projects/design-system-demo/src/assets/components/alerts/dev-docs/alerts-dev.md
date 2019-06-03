The `Alerts` provides contextual feedback messages.

##### `Alerts`

| Inputs                      | Description                         | Type                          | 
| --------------------------- | ----------------------------------- | ----------------------------- |
|  typeAlert                  | Type of alert to show. By default is info type| TypeAlertEnum                        | 
|  message                    | Message to show           | string                        |
|  isClosable                       | Indicates if the alert can be closed. By default is false | boolean           |
|  closeButtonText                | Text for the button close appears in small resolutions        | string                        |
|  actionButtonText                | Text for the button with action  | string              |

| Outputs                      | Description                         | Type 
| --------------------------- | ----------------------------------- | ----------------------------- |
| sendAction                  | Send EventEmitter when user clicks on the button | EventEmitter              

| Enums                       | Values                              | 
| --------------------------- | ----------------------------------- | 
|  TypeAlertEnum              | info = 'info',                        |
|                             | success = 'success',                      |
|                             | warning = 'warning',                   |
|                             | danger = 'danger',                 |



#### Alerts in practice

Usage:
```html
<exo-alert
    message="Warning Message is used to alert the user that he must be carefull and that it is important to read it"
    typeAlert="warning"
    [isCloseable]="true"
    closeButtonText="Close"
  ></exo-alert>
```
