The purpose of this repo is to figure out how to animate a svg line with a scroll event in React. I could not find a module that provided the animation feature that I wanted: Draw a line with when a user scrolls the page. There are plenty of animations that apply to elements that can be triggered by event listeners, but none that will draw or undraw the line with the scrolling of the mouse in React. The first two links below provide this with DOM manipulation, however, I took the liberty of implementing their code into a React application.

Granted, this drawing is boring and the zombie ipsum is visibly distracting, but this took me some time to migrate to React and figure out what values to store in state and how to re-render appropriately. I plan on adding to this and creating a more exciting image to draw, but for now this is it.

[I used Chris Coyier's Codepen](https://codepen.io/chriscoyier/pen/YXgWam?editors=0111)

[As well as Jake Archibald's post](https://jakearchibald.com/2013/animated-line-drawing-svg/)

as references for the scroll animation

[For the svg drawing I followed Ilya Zayats article for a dynamically generated svg graph for an example to apply the animation to.](https://www.smashingmagazine.com/2015/12/generating-svg-with-react/)

To run you must have React:
1. `npm install -g create-react-app`

Clone the repo
1. `npm install`
2. `npm start`
