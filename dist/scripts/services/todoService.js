(function() {
    function TodoFact($firebaseArray) {
        var TodoFact = {};
        
        var todos = $firebaseArray(firebase.database().ref().child('/todo'));

        TodoFact.addTodo = function(){
            todos.$add(todo);
            todo.complete = false;
        };

        TodoFact.removeTodo = function(todo) { 
            var index = $scope.todos.indexOf(todo);
            $scope.todos.$remove(todo);
        };

        TodoFact.complete = function(todo) {
            todo.complete = true;
            todos.$save(todo);
        };
        
        TodoFact.addFormShow = true;

        TodoFact.toggleForm = function() {
            TodoFact.addFormShow = TodoFact.addFormShow === false ? true : false;
        };
        
        return TodoFact;
    };
    
    angular
        .module('markOff')
        .factory('TodoFact', ['$firebaseArray', TodoFact]);   
})();