(function() {
    function TodoService($firebaseArray) {
        var TodoService = {};
        
        var todos = $firebaseArray(firebase.database().ref().child('/todo'));

        TodoService.addTodo = function(){
            todos.$add(todo)
            todo.complete = false;
        }

        TodoService.removeTodo = function(todo) { 
            var index = $scope.todos.indexOf(todo);
            $scope.todos.$remove(todo);
        }

        TodoService.complete = function(todo) {
            todo.complete = true;
            todos.$save(todo);
        }
        
        var addFormShow = false;

        TodoService.showTodoForm = function() {
            addFormShow = true;
        }

        TodoService.hide = function() {
            addFormShow = false;
        }
        
        return TodoService;
    };
    
    angular
        .module('markOff')
        .factory('TodoService', ['$firebaseArray', TodoService])   
})();