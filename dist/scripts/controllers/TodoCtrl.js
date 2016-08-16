(function() {
    function TodoCtrl(TodoFact) {

        this.todoFact = TodoFact;
        /** I'm not exactly sure how to use firebasearray correctly here */
//        $scope.todos = $firebaseArray(firebase.database().ref().child('/todo'));
//        
//        $scope.addTodo = function(){
//            $scope.todos.$add($scope.todo)
//            $scope.todo.complete = false;
//        }
//        
//        $scope.removeTodo = function(todo) { 
//            var index = $scope.todos.indexOf(todo);
//            $scope.todos.$remove(todo);
//        }
//        
//        $scope.complete = function(todo) {
//            todo.complete = true;
//            $scope.todos.$save(todo);
//        }
//        
//        $scope.showTodoForm = function() {
//            $scope.addFormShow = true;
//        }
//
//        $scope.hide = function() {
//            $scope.addFormShow = false;
//        }
    }
        angular
            .module('markOff')
            .controller('TodoCtrl', ['TodoFact', TodoCtrl]);
})();