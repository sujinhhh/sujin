![waving](https://capsule-render.vercel.app/api?type=waving&height=200&text=My%20Web%20Page&fontAlign=30&fontAlignY=40&color=gradient)
<p align='center'> My Personal Website </p>
<p align='center'>
  <a href="https://github.com/kyechan99/capsule-render/labels/Idea">
    <img src="https://img.shields.io/badge/Go%20to%20my%20Website-%23F7DF1E?&style=for-the-badge&&logoColor=white"/>
  </a>

</p>

## Types
- [wave](#wave)
- [egg](#egg)
- [shark](#shark)
- [slice](#slice)
- [rect](#rect)
- [rounded](#rounded)
- [cylinder](#cylinder)
- [waving](#waving)

Any of Idea -> [Idea-Issue](https://github.com/kyechan99/capsule-render/labels/Idea) or [PR](https://github.com/kyechan99/capsule-render/pulls)

# How to Use
```
https://capsule-render.vercel.app/api?
```
Just write query parameter end of this url. Like this

Markdown:
```
![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90)
```

HTML:
```
<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=capsule%20render&fontSize=90" />
```

## Type
Type data makes to change Background Image.
- [wave](#wave) : default
- [egg](#egg)
- [shark](#shark)
- [slice](#slice)
- [rect](#rect)
- [soft](#soft)
- [rounded](#rounded)
- [cylinder](#cylinder)
- [waving](#waving)

Write `&type= ` on the URL
```
![header](https://capsule-render.vercel.app/api?type=slice)
```

## Color
Change Background Image!
- `&color=auto` : Proven random color. List are [here](https://github.com/kyechan99/capsule-render/blob/master/src/pallete.json)
- `&color=timeAuto` : Proven random color, but is decided by time.
- `&color=random` : Really random color. I don't know what colors are showing.
- `&color=gradient` : Proven random gradient. List are [here](https://github.com/kyechan99/capsule-render/blob/master/src/gradient.json)
- `&color=timeGradient` : Proven random gradient, but is decided by time.
- `&color=_hexcode` : default(#B897FF)

If you use `auto` mode. no need to change `fontColor`. 
`auto` also change fontColor auto.

```
![header](https://capsule-render.vercel.app/api?color=auto)
```
> If you use static color. Do not write '#'

> When use `timeAuto` and `timeGradient`?
>
> Used section `header` and `footer` at the same time. 

## Section
Section data makes reverse Background Image.
- `&section=header` : (default)
- `&section=footer`

Write `&section= ` on the URL
```
![footer](https://capsule-render.vercel.app/api?section=footer)
```

## Reversal
Reverse the image left and right. (Color at the same time)
- `&reversal=false` : (default)
- `&reversal=true`

```
![reversal](https://capsule-render.vercel.app/api?type=slice&reversal=true&color=gradient)
```

## Height
Change Image Size. Default value is 200.

Write `&height= ` on the URL
```
![header](https://capsule-render.vercel.app/api?height=400)
```
> Do not write `px`

## Text
Input text over the Image.

Write Something `&text= `.

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!)
```

> You can't use some Special Characters. Like '#', '&', '/' ... 
>
> It makes confused API

## Text Background
Background of Text.

Write `&textBg=true` to active.

> If you want to increase background-size, 
add `%20` between text values.
This is because background-size depends on the length of the english-text. (%20 means spacing)

```
![header](https://capsule-render.vercel.app/api?type=rounded&color=gradient&text=%20asdf%20&height=300&fontSize=100&textBg=true)
```

## Text Animation
Make the text dynamic.

Write `&animation= `, if you want to use.

- `fadeIn` : fadeIn 1.2s
- `scaleIn` : scaleIn .8s
- `blink` : blink .6s
- `blinking` : blinking 1.6s
- `twinkling` : twinkling 4s

```
![header](https://capsule-render.vercel.app/api?text=capsule_render&animation=fadeIn)
```

## FontColor
Change text color. Default value is 000000
Value should be Hex code with erased '#'

Write `&fontColor= ` behind **Text** query

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontColor=d6ace6)
```

## FontSize
Change text font size. Default value is 80.

Write `&fontSize= ` behind **Text** query

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=40)
```

> Do not write `px`

## FontAlign
Change text horizontal-align (x). write number **between 0~100**

`&fontAlign= ` : Default value is 50. center of image

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlign=70)
```

## FontAlignY
Change text vertical-align (y). write number **between 0~100**

`&fontAlignY= ` : Default value is 50. center of image

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontAlignY=20)
```

## Rotate
Usage `&rotate= `, to rotate text.

You can also use negative number.

> Recommend number arrange. ☞ `0 ~ 360`, `0 ~ -360`. 

```
![header](https://capsule-render.vercel.app/api?text=Hello%World!&fontSize=20&rotate=-30)
```




<hr/>

# Things that helped contribute

- SVG Path Easy Maker [Codepen](https://codepen.io/kyechan99/pen/yLeQVBa)
- SVG Path draw [mavo.io](https://mavo.io/demos/svgpath/)


![footer](https://capsule-render.vercel.app/api?type=wave&color=auto&height=200&section=footer&text=Now%20Use%20me!&fontSize=90)
