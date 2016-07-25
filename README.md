<img src="http://www.diwanee-serbia.com/assets/img/diwanee-logo-header.png">
<hr>
# Diwanee Boilerplate
*SCSS and JS boilerplate for starting new projects*

So you got a new project, but the thought of having to figure out how to structure your SCSS files, name your classes and make that pesky slider from scratch is giving you headaches?
<br />
**Have no fear!**
<br />
This is where this Boilerplate comes in handy.
<br />
All you have to do is follow these easy steps and all your earthly worries will be gone forever!
<br />
**But wait, there's more!**
<br />
If you have an idea for a new commonly used element, you can contribute to the effort.

## 1 - INSTALLATION
**Open your terminal and type the following:**
<br />
<br />
Step 1: `git clone git@github.com:Diwanee-FE/Diwanee-Boilerplate.git`
<br />
Step 2: `cd Diwanee-Boilerplate`
<br />
Step 3: *Copy the files/folders you need or want into your project folder*



## 2 - DEVELOPMENT
To start development, you need to install the required NPM and Bower components.
<br />
To do so, follow these simple steps

<br />
Step 1: *Open your terminal and type the following*
<br />
Step 2: `git checkout elements`
<br />
Step 3: `npm install`
<br />
Step 4: `bower install`
<br />
Step 5: `gulp`
<br />
Step 6: *Open your browser*
<br />
Step 7: Go to - `localhost:1337`

### 2.1 -  When working on a new element:
Step 1: `git checkout -b nameOfElement`
<br />
Step 2: *Make awesome code*

### 2.2 - When development on the specific element is done:
- Create Pull request with the **elements** branch as the **base** and your **nameOfElement** branch as the **compare**

## 3 - USAGE
This section is just a friendly suggestion that may help you write better class names which in turn might help you understand at a glance what each class actually is. Not to mention it will make other developers who read your code, not hate you as much.

### 3.1 - BEM class names:
When naming your classes, consider using the [BEM](http://getbem.com/) methodology.
<br />
If you're too lazy to read this or you're in a time crunch, heres a simple explanation.
<br />
BEM stands for *Block Element Modifier*. So, you have a Block, that can be something like a *Main Menu*. An element of that block which is a *Menu Item*. And finally, you have a variation of the *Menu Item* or rather, a modified version of it.
<br />
So by using this logic, you would have somehing like this:
* **Block:** .mainMenu
* **Element:** .mainMenu__item
* **Modifier:** .mainMenu__item--red

```
<nav class="mainMenu">
    <ul>
        <li class="mainMenu__item"> Menu Item 1 </li>
        <li class="mainMenu__item"> Menu Item 2 </li>
        <li class="mainMenu__item--red"> Menu Item 3 </li>
    </ul>
</nav>
```

How do you code this in SCSS ?
<br />
* In your **mainMenu.scss** or similar
<br />

```
.mainMenu {
    display: inline-block;

    ul {
        padding: 0;
        list-style: none;
    }

    &__item {
        display: inline-block;

        color: #000;

        &--red {
            color: #F00;
        }
    }
}
```

### 3.2 - Camel case names:
You might have noticed in the previous sub-section that class *.mainMenu* was used.
<br />
Why do I point this out?
<br />
When using the **BEM** methodology, if youre not using [camelCase](https://en.wikipedia.org/wiki/CamelCase), you might get something like this, **.main-menu__item-inner-wrapper--small**, which is just a mess to look at or read.

### 3.3 - Font size, REM, EM and VW
**Pay close attention to this part!**
<br />
If you're wondering what REM, EM or VW are, you can read up an awesome explanation of REM / EM, [here](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/).
<br />
As for the VW unit, the basic principle is over [yonder](https://css-tricks.com/viewport-sized-typography/)
<br />
<br />
Now for the usage of those units in combination with this *boilerplate*.
<br />
<br />
The *baseFontSize* is, by default, set to 10. Which in turn, sets the `<html>` font size to `10px`.
```
html {
    $fontSizePX: $baseFontSize + 'px';
    font-size: #{$fontSizePX};
}
```
And the output:
```
html {
    font-size: 10px;
}
```
<br />
What does that mean?
<br />
It means that you can now use with ease the *rem* unit. So if for instance you have to set a font size to 25px to an element, you would do the following:
```
.element {
    font-size: 2.5rem;
}
```
Which would output:
```
.element {
    font-size: 25px;
}
```
<br />
Now lets say you finished your coding of the site on the *desktop* resolutions and you want to set a simple, responsive font-size for the *tablet* and *mobile* resolutions. How would you go about doing that?
<br />
It's actually really simple, but you might get confused how to set the <html> font size at first.
<br />
<br />
For this example, lets say you have a PSD design for **768px** width and **640px** width.
<br />
For the **768px** design you would do the following:
```
html {
    font-size: 1.30208vw;
}
```
And what does that actually compute to in the browser?
<br />
On viewport width of 768px, you would get:
```
html {
    font-size: 10px;
}
```
How did we get this? Using a shamefully simple formula.
<br />
**A = 10** (font size we want)
<br />
**B = 768** (resolution we are looking at in the desing)
<br />
**X = (A / B) * 100**
<br />
<br />
The same principle is used for the **mobile** resolution of **640px**
<br />
```
html {
    font-size: 1.5625vw;
}
```
<br />
<br />
<br />
If you're asking yourself why would you do something like this? Its actually a really powerful solution for responsive web development. You can find a lot better explanations on [CSS-Tricks](https://css-tricks.com) for instance or [Sitepoint](https://www.sitepoint.com).

## v 0.2.0 Bower Components
Since we want to keep boilerplate as light as it can be, we decided to put all the components in the library which can be installed via **Bower**.


## 4 - Packages
### Recommended packages that will make your life easier ###

<br>
### Optional packages that will make your project awesome ###

* [Animate.css](https://github.com/daneden/animate.css)     
`bower install animate.css --save-dev`
<br>
* [Hover.css](https://github.com/IanLunn/Hover)     
`bower install Hover --save-dev`
<br>
* [ScrollReveal.js](https://github.com/jlmakes/scrollreveal.js/tree/master)     
`bower install scrollreveal --save-dev`

***Click on links for documentation***

<hr>
