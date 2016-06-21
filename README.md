# Diwanee-boiler
SCSS only boilerplate for starting new projects

## Installation
- Download the project
- cd into project folder
- run 'npm install'
- run 'bower install'
- run 'gulp' to compile SCSS to CSS

## Development
When working on a new element:
- Checkout to 'elements' branch
- Create a new branch from that with the name of the element as the branch name
- When the element is finished, pull request to the 'element' branch from your branch

## KNOWN ISSUES
- On first start of gulp server, the server starts before the 'app' folder is generated
- Slick Carousel css is missing on first load, to fix this, start gulp and change any .scss file
