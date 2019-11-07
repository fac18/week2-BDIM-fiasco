// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");
  let addTodoButton = document.getElementById("add-todo-button");

  var state = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    // you will need to use addEventListener - can't think what this refers to! (ignoring)

    // add span holding description
    let descNode = document.createElement("span");
    descNode.textContent = todo.description;
    todoNode.appendChild(descNode);
    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markTodoButton = document.createElement("button");
    markTodoButton.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markTodoButton);

    // add classes for css
    todoNode.class = "todo-list__item";
    descNode.class = 'todo-list__description';
    deleteButtonNode.class = "todo-list__delete";
    markTodoButton.class = "todo-list__mark";

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var desc = event.target.description.value;
      let newTodo = {description: desc};
      var newState = todoFunctions.addTodo(state,newTodo);
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    todoListNode.class = 'todo-list';
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
