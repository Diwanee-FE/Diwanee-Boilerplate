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
If you're too lazy to read this or you're in a time crunch, heres a simple explenation.
<br />
BEM stands for *Block Element Modifier*. So, you have a Block, that can be something like a *Main Menu*. An element of that block which is a *Menu Item*. And finally, you have a variation of the *Menu Item* or rather, a modified version of it.
<br />
So by using this logic, you would have somehing like this:
* **Block:** .mainMenu
* **Element:** .mainMenu__item
* **Modifier:** .mainMenu__item--different

### 3.2 - Camel case names:
You might have noticed in the previous sub-section that class *.mainMenu* was used.
<br />
Why do I point this out?
<br />
When using the **BEM** methodology, if youre not using [camelCase](https://en.wikipedia.org/wiki/CamelCase), you might get something like this, **.main-menu__item-inner-wrapper--small**, which is just a mess to look at or read.


## v 0.2.0 Bower Components
Since we want to keep boilerplate as light as it can be, we decided to put all the components in the library which can be installed via **Bower**.


## 4 - Packages
<hr>

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
