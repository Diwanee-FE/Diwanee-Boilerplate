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

### 2.1 -  When working on a new element:
Step 1: `git checkout -b nameOfElement`
<br />
Step 2: *Make awesome code*

### 2.2 - When development on the specific element is done:
- Create Pull request with the **elements** branch as the **base** and your **nameOfElement** branch as the **compare**


## 3 - KNOWN ISSUES
- On first start of gulp server, the server starts before the 'app' folder is generated
- Slick Carousel css is missing on first load, to fix this, start gulp and change any .scss file
