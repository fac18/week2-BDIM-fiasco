![](https://i.imgur.com/8lH9GN4.png)

---

## Team Fiasco

* Beth [@bethanyios](https://github.com/bethanyios)
* Reda [@redahaq](https://github.com/redahaq)
* Pat [@pat-cki](https://github.com/pat-cki)
* Dan [@plasticneuron](https://github.com/plasticneuron)

![](https://i.imgur.com/pB4hK8n.png)

---

## Installation

To run our tests, you'll need to do the following:

1. Clone the [repo](https://github.com/fac18/week2-BDIM-fiasco)
2. `cd` into the directory
3. run `npm install`

This will install _tape_, _tap-spec_, _nodemon_ and _nyc_ as dev-dependencies, since these are listed in our `package.json` file.

You can then run `npm test` to run the tests, or `npm run coverage` to run nyc alongside.

---

### Learning Outcomes

- [x] Use TDD! Follow the 'red, green, refactor' cycle. 
- [x] Make it green then make it clean, kids!
- [x] Become familiar with using the DOM
- [x] Make it pretty!

---

### User stories

As a disorganised person I want to:

- [x] enter tasks so that I don't forget them
- [x] view the tasks I have added in a list so that I can plan my day
- [x] mark tasks as complete so that I can focus on the tasks I have left
- [x] the to-dos to be large enough so that I don't hit the wrong one with my thumb
- [x] once a list item added clear the input 

---

### Let's get stretchy!

As a disorganised person I want to:

- [] edit my to-dos so that I can amend them if the task changes
- [x] click on any part of a to-do to mark it as complete so that it's easier for me to check to-dos off
- [x] a visual indication of which to-do I'm about to interact with so that it's clear what I'm editing (ISH!)
- [ ] SUPER STRETCH: spin dodo when you complete a task

---

## Approaching a challenging week:

We turned to our retrospective notes to improve our ways of working.

- [x] continue mobbing the HTML
- [x] switch up pairs
- [x] leave our comfort zones
- [x] continue asking for and offering help
- [x] ensure we all understand the codebase
- [] make more granular commits (SOME of us!)
- [x] have fun! ✓✓✓✓✓✓✓✓✓

---

### Mobbing addTodo tests and function

As TDD is still a pretty new and unfamiliar concept, we thought mobbing our first logic function together would be a great way to learn. 

![](https://i.imgur.com/fCTf4Rg.jpg)

---

We really loved this approach, and although it took the four of us 3 hours to write 7 lines of code... 

`addTodo: function (todos, newTodo) {
    var allTodos = this.cloneArrayOfObjects(todos);
    newTodo.id = this.generateId(); // generate fresh id for newTodo
    newTodo.done = false;
    allTodos.push(newTodo); // add newTodo to cloned array
    return allTodos;
  },`

---

... we did write 137 lines of test code on the way. 

### addTodo tests :
1. test that function appends newTodo to cloned todo array
2. test that array length has increased by 1
3. check that appended element is an object
4. test original todos remains unchanged by checking length
5. check newTodo has an id prop after appending
6. test original todos remains unchanged by checking deep equality

---

## What a journey!

![What a journey!](https://media.giphy.com/media/mLugfDQ6PcCsg/giphy.gif)

---

### Dividing functions between pairs

Cut to Thursday morning. The scent of freshly brewed coffee perfumes the air. Our heroes enter, and split up for some pair programming!

![](https://i.imgur.com/GQfkHh1.jpg)

---

### Wire frames/design meeting

We paused writing our logic and had a little brainstorm to get an overarching sense of how everything would fit together and how we wanted our Todo app to look.

![](https://i.imgur.com/Abwvlpc.jpg)

---

### Css variables

We used coolors to choose a colour palette, and created these as variables in our root directory. <3

![](https://i.imgur.com/nRZ3UbZ.png)

---

### Mobbing semantic HTML

![](https://media.giphy.com/media/f3cuUScwgD5lv4LGKc/giphy.gif)

---

### Granular ~~commits~~ comets

![](https://media.giphy.com/media/g0jidX9xXJe4jjKJTc/giphy.gif)

Some of us were great at remembering to commit regularly... Beth, Dan, Pat 👏👏👏.

Others, not so much... *cough* Reda *cough*. 

---

### Commit distribution

We did, however, use the 'co-authored-by' commit trick and our commits this week are so much more balanced!

![](https://i.imgur.com/4j1G28O.png)

---

![](https://media.giphy.com/media/LVWQ9iBwkpLmU/giphy.gif)

---

### DOM in pairs & styling in pairs

We paired up again, trying to work on areas where we felt we wanted to improve, or could offer a lot of guidance to someone else.

![](https://media.giphy.com/media/3og0IPMeREHpEV0f60/giphy.gif)

---

## Tracking progress

We raised issues in github from the very beginning to track all our Todos! This was a goal we'd noted last week and we're pleased to say it worked really well for us in keeping everything very visible across the team.

![](https://i.imgur.com/Dz9NyXc.png)


---

## Stretch goals

- Sort functionality:
- We built the function but didn't end up using it
* *  Separating marked todos in another part of the webpage (alive > extinct)
- [x] Adding animated interactions once a task completed 

---

## Things we learnt

- How to write simple failing tests, and use these to construct functions
- DOM!
- Almost every JS array method (map, every, forEach...)
- CSS variables are AMAZING
- "LET's all start CONSTantly use ES6 scoping" - Jan : use const as a default, let if you are sure you need the functionality

By osmosis: 😎 We're pretty much gitflow ninjas now.

---

## Things that went wrong

![](https://media.giphy.com/media/HiXbqSrs6aH04/giphy.gif) 

---

## Things that went wrong

- Forgetting to return something at the end of our functions and wondering why our tests weren't working. This happened more times than we'd care to admit. 
- Our DOM disappeared, taking all our todos!
- Wrapping of todos and input - for a while they were overflowing to the next line
- Weird merge conflicts: eagle-eyes necessary

---

## a11y

We left our accessibility audit til quite late in the day on Thursday; we'd want to ideally check accessibility as we go along.
 
Don't forget about basic stuff: like html lang, link titles and form labels in your index.html.

![](https://i.imgur.com/seWcmMg.png)

---

## Thanks!
![](https://i.imgur.com/Y8aSPpU.png)
![](https://media.giphy.com/media/3oxHQzNhcW6kUFWl3O/giphy.gif)


