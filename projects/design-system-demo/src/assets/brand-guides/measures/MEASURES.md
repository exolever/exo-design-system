# Space and Component Measures

## Space Measures (Padding/Margin)

| Variable | Size |
| :---: | :---: |
| xxxs | 4dp |
| xxs | 8dp |
| xs | 16dp |
| sm | 24dp |
| lg | 48dp |
| xl | 72dp |

### How to use

In **CSS** file:
```
padding: map-get($spaceMeasures, 'xs');
margin: map-get($spaceMeasures, 'lg');
```

In **HTML** file **(Work in progress)**:
```
<p class="pad-lg">Padding 48dp</p>
<p class="margin-left-xs">Margin-left 16dp</p>
```

## Component Measures (Width/Height)

| Variable | Size |
| :---: | :---: |
| 0.3x | 16dp |
| 0.5x | 24dp |
| 1x | 48dp |
| 1.5x | 72dp |
| 2x | 96dp |
| 3x | 144dp |
| 4x | 192dp |
| 6x | 288dp |
| 8x | 384dp |
| 18x | 864dp |
| 20x | 960dp |
| 24x | 1152dp |

### How to use

In **CSS** file:
```
width: map-get($componentMeasure, '4x');
height: map-get($componentMeasure, '0.5x');
```

As alternative you can use calc function:

```
width: calc(2 * #{map-get($componentMeasure, '1x')});
height: calc(6 * #{map-get($componentMeasure, '1x')});
```

This will generate a width 2x(96dp) and a height of 6x(288dp)

In **HTML** file **(Work in progress)**:
```
<p class="height-1x">Paragraph with height: 48dp</p>
<p class="width-05x">Paragraph with width: 24dp</p>
```
