# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Acknowledgements](#acknowledgements)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshots
<img src="./public/screenshots/screenshot-theme1.png" width="400" title="Theme 1 Screenshot" />
<img src="./public/screenshots/screenshot-theme2.png" width="400" title="Theme 2 Screenshot" />
<img src="./public/screenshots/screenshot-theme3.png" width="400" title="Theme 3 Screenshot" />

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Sass
- Mobile-first workflow
- [React](https://reactjs.org/) - React framework
- Test-Drive Development (TDD)

### What I learned

CSS Flexbox and Grid.  This project provided a great opportunity to practice 
picture-perfect web design, SCSS and advanced layout techniques with CSS.  I learned about 'prefers-color-scheme' and a few methods to get and react to changes.  This is was also a great opportunity to build out a complex class using TDD.  This also provided good practice into paying close attention to the build output in order to tidy up Sass and React build warnings for a polished final product.

### Continued development

More exercise with SCSS, CSS Flexbox/Grid and React.  Additionally, this is a very simple calculator and even with having strong unit tests, there are remaining edge-cases
that leave room for improvement.

# Acknowlegements
- [Implementing a service as a single in React js](https://www.youtube.com/watch?v=HPflyT2ni20)
  - provided a quick solution to turn a testable Calculator class into a React-friendly CalculatorService, singleton object with no loss in functionality and only very minor changes in the TDD tests and within the class/service itself
- [Build A Calculator With JavaScript Tutorial](https://www.youtube.com/watch?v=j59qQ7YWLxw)
  - useful tips to iron out a few commmon pitfalls of implementing this very same type of application...no copy-paste here
- [Stack Overflow: How do I detect dark mode using JavaScript?](https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript)