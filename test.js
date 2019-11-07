var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

//test5
test('test that function appends newTodo to cloned todo array', function(t) {
  let todos = [ {
    id: 0,
    description: 'comet',
    done: false
  }];
  let newTodo = {description: 'asteroid'};
  let result = [{
    id: 0,
    description: 'comet',
    done: false},
   {
    id: 1,
    description: 'asteroid',
    done: false
   }];
  var actual = logic.addTodo(todos, newTodo);
  var expected = result;
  t.deepEquals(actual, expected, 'newTodo should be appended to cloned todos array');
  t.end();
});

//test 1
test('test that array length has increased by 1', function(t) {
  var todos = [{
    id: 0,
    description: 'comet',
    done: false
  }];
  let k = todos.length;
  console.log("todos length:" + todos.length);
  var newTodo = {};
  var result = logic.addTodo(todos, newTodo);
  var actual = result.length;
  var expected = k + 1;
  console.log("todos length:" + todos.length);
  console.log("result:" + result)
  console.log("actual:" + actual)
  console.log("expected:" + expected)
  t.equals(actual, expected, 'length of returned array should increase by 1');
  t.end();
  });

//test 2 
test('check that appended element is an object', function(t) {
  var todos = [{
    id: 0,
    description: 'comet',
    done: false
  }];
  var newTodo = {};
  var result = logic.addTodo(todos, newTodo);
  var actual = typeof result[result.length-1];
  var expected = 'object';
  console.log("result:" + result)
  console.log("actual:" + actual)
  console.log("expected:" + expected)
  t.equals(actual, expected, 'last element of returned array should be an object');
  t.end();
  });

//test 3
test('test original todos remains unchanged by checking length', function(t) {
  var todos = [{
    id: 0,
    description: 'comet',
    done: false
  }];
  var newTodo = {};
  var origLength = todos.length;
  logic.addTodo(todos, newTodo);
  var newLength = todos.length;
  var actual = newLength;
  var expected = origLength;
  console.log("actual:" + actual);
  console.log("expected:" + expected);
  t.equals(actual, expected, 'original todos length remains unchanged');
  t.end();
  });

//test4
test('check newTodo has an id prop after appending', function(t) {
  var todos = [{
    id: 0,
    description: 'comet',
    done: false
  }];
  var newTodo = {};
  let result = logic.addTodo(todos,newTodo);
  var expected = true;
  var actual = result[result.length-1].hasOwnProperty('id'); // grab id of last object in returned array
  t.equals(actual, expected,'should be true that last object has id prop');
  t.end();
});

//test 6
test('test original todos remains unchanged by checking deep equality', function(t) {
  var todos = [{
    id: 0,
    description: 'comet',
    done: false
  }];
  var newTodo = {};
  let origTodos = todos.map(x => JSON.parse(JSON.stringify(x))); // arrow function deep copy of todos
  logic.addTodo(todos, newTodo);
  var actual = todos;
  var expected = origTodos;
  console.log("actual:" + actual);
  console.log("expected:" + expected);
  t.deepEquals(actual, expected, 'original todos should match todos after invoking function');
  t.end();
  });

// //test 2: original todo unchanged
// test('test original todo remains unchanged', function(t) {
//   let todos = [ {
//     id: 0,
//     description: 'comet',
//     done: false
//   }];
//   let newTodo = {description: 'asteroid'}
//   var actual = todoFunctions.addTodo(todos, newTodo);
//   var expected = 'comet'
//   t.pass();
//   t.end();
// });

// //test3: 