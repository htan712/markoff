(function() {
    function TodoFactory($firebaseArray) {
        var TodoFactory = {};

        var todos = $firebaseArray(firebase.database().ref().child('/todo'));

//      having trouble adding todo properly
        TodoFactory.getAllTodos = function() {
          return todos;
        }
        TodoFactory.createTodo = function(todo, todoList){
            todos.$add(todo);
            todoList = todos;
            return todoList;
        };

        TodoFactory.removeTodo = function(todo) {
            var index = $scope.todos.indexOf(todo);
            $scope.todos.$remove(todo);
        };

        TodoFactory.complete = function(todo) {
            todo.complete = true;
            todos.$save(todo);
        };

        TodoFactory.addFormShow = false;

        TodoFactory.toggleForm = function() {
            TodoFactory.addFormShow = TodoFactory.addFormShow === false ? true : false;
        };

        return TodoFactory;
    };

    angular
        .module('markOff')
        .factory('TodoFactory', ['$firebaseArray', TodoFactory]);
})();
