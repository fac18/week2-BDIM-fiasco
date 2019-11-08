# Week 2: BDIM Fiasco

## Authors

* Beth [@bethanyios](https://github.com/bethanyios)
* Reda [@redahaq](https://github.com/redahaq)
* Pat [@pat-cki](https://github.com/pat-cki)
* Dan [@plasticneuron](https://github.com/plasticneuron)

## Installation

To run our tests, you'll need to do the following:

1. Clone the [repo](https://github.com/fac18/week2-BDIM-fiasco)
2. `cd` into the directory
3. run `npm install`

This will install _tape_, _tap-spec_, _nodemon_ and _nyc_ as dev-dependencies, since these are listed in our `package.json` file.

You can then run `npm test` to run the tests, or `npm run coverage` to run nyc alongside.

## Process

This week was quite different to the last, although we were still in the same team! After reading the project readme, we had a little peek back at our retrospective notes, to see how we hoped to approach future projects. Some of these things were:

- continue mobbing
- leave our comfort zones
- continue asking for and offering help
- ensure we all understand the codebase, even the stuff we haven't written

### Mobbing first tests

As TDD is still a pretty new and unfamiliar concept, we thought mobbing our first logic function together would be a great way to learn. 

We really loved this approach, and even though it took the four of us 3 hours to write about 7 lines of code... 

`addTodo: function (todos, newTodo) {
    var allTodos = this.cloneArrayOfObjects(todos);
    newTodo.id = this.generateId(); // generate fresh id for newTodo
    newTodo.done = false;
    allTodos.push(newTodo); // add newTodo to cloned array
    return allTodos;
  },`

... we did write 137 lines of test on the way there. 

What a journey!

![What a journey!](https://media.giphy.com/media/mLugfDQ6PcCsg/giphy.gif)

### Dividing functions between pairs



### Continued specific testing/functions per pair

### Wire frames/design meeting

### Css variables

### Mobbing HTMl semantic

### Granular commits

### Dom in pairs

### Styling in pairs

## Tracking progress

### User stories

So our user is some very disorganised person, who wants to be able to:

- [] enter tasks into a web page in order to remember them
- [] 

## Stretch goals

## Things we learnt

## Things that went wrong

## Auditing

## Presentation
