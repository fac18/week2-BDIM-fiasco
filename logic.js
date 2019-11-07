// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function () {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function (todos) {
    return todos.map(function (todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },


  addTodo: function (todos, newTodo) {
    var allTodos = this.cloneArrayOfObjects(todos);
    newTodo.id = this.generateId(); // generate fresh id for newTodo
    newTodo.done = false;
    allTodos.push(newTodo); // add newTodo to cloned array
    console.log("allTodos:" + JSON.stringify(allTodos));
    return allTodos;
  },

  deleteTodo: function (todos, idToDelete) {
    let allTodos = this.cloneArrayOfObjects(todos);
    return allTodos.filter(x => x.id != idToDelete);
  },

  markTodo: function (todos, idToMark) {
    var allTodos = this.cloneArrayOfObjects(todos);
    allTodos.forEach(obj => {
      if (obj.id == idToMark) {
        obj.done = !obj.done;
      }
    })
    return allTodos;
  },

  sortTodos: function (todos, sortFunction) {
    let allTodos = this.cloneArrayOfObjects(todos);
    allTodos.sort(sortFunction); // sorts todos clone *in place* according to sortFunction comparison test
    return allTodos;
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
