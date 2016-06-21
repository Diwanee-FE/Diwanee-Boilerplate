# Diwanee-boiler
SCSS only boilerplate for starting new projects

## Installation
**Open your terminal and type the following:**
<br />
<br />
`git clone git@github.com:Diwanee-FE/Diwanee-Boilerplate.git`
<br />
`cd Diwanee-Boilerplate`
<br />
`npm install`
<br />
`bower install`
<br />
`gulp`


## Development
When working on a new element:

`git checkout elements`
<br />
`git checkout -b nameOfElement`
<br />
<br />
<br />
When development on the specific element is done:
- Go to the Diwanee Boilerplate repository at https://github.com/Diwanee-FE/Diwanee-Boilerplate
- Create Pull request with the **elements** branch as the **base** and your **nameOfElement** branch as the **compare**


## KNOWN ISSUES
- On first start of gulp server, the server starts before the 'app' folder is generated
- Slick Carousel css is missing on first load, to fix this, start gulp and change any .scss file
