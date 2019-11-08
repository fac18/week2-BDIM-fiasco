(function() {
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");
  let addTodoButton = document.getElementById("add-todo-button");
  let inputBox = document.querySelector(".input-box");
  let dodoLogo = document.querySelector(".dodologo");
  let dodoContainer = document.querySelector(".dodologo-container");

  var state = [
    { id: -3, description: "Shake tail feathers" },
    { id: -2, description: "Do a funny run" },
    { id: -1, description: "Ask Janet for cactus" }
  ];

  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    // create description span
    let descNode = document.createElement("span");
    descNode.textContent = todo.description;

    // markTodo button
    var markTodoButton = document.createElement("button");
    markTodoButton.textContent = "✓";
    markTodoButton.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    // create delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = "✘";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    // create markTodo button logic when clicked
    if (todo.done == false) {
      markTodoButton.classList.remove("todo-list__mark--completed");
      descNode.classList.remove("todo-list__description--completed");
      deleteButtonNode.classList.remove("todo-list__mark--completed");
      todoNode.classList.remove("todo-list__item--completed");
    }
    if (todo.done == true) {
      markTodoButton.classList.add("todo-list__mark--completed");
      descNode.classList.add("todo-list__description--completed");
      deleteButtonNode.classList.add("todo-list__mark--completed");
      todoNode.classList.add("todo-list__item--completed");
      // dodoLogo.classList.add("dodologo--completed");
      // dodoContainer.classList.add('dodologo-container--completed');
    }

    // append nodes in appropriate order
    todoNode.appendChild(descNode);
    todoNode.appendChild(markTodoButton);
    todoNode.appendChild(deleteButtonNode);

    // CSS Classes
    todoNode.classList.add("todo-list__item");
    descNode.classList.add("todo-list__description");
    deleteButtonNode.classList.add("todo-list__delete");
    markTodoButton.classList.add("todo-list__mark");

    resetInput();
    return todoNode;
  };

  // todo form binding
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var desc = event.target.description.value;
      let newTodo = {
        description: desc
      };
      var newState = todoFunctions.addTodo(state, newTodo);
      update(newState);
    });
  }

  //
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    todoListNode.classList.add("todo-list");
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
  let markBoxes = [...document.querySelectorAll(".todo-list__mark")];
  console.log(markBoxes);
  addEventListener("click", function(event) {
    if (markBoxes.includes(event.target)) {
      event.target.parentNode.classList.add("todo-list__item--completed");
    }
  });

  function resetInput() {
    inputBox.value = "";
  }
})();
