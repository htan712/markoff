(function() {
    function TodoCtrl($scope, $firebaseArray) {
                
        /** I'm not exactly sure how to use firebasearray correctly here */
        $scope.todos = $firebaseArray(firebase.database().ref().child('/todo'));
        $scope.addTodo = function(){
            $scope.todos.$add({
                task: $scope.task,
                importance: $scope.importance
            })
        }
        $scope.removeTodo = function(todo) { 
            var index = $scope.todos.indexOf(todo);
            $scope.todos.$remove(todo);
        }
        
    }
        angular
            .module('markOff')
            .controller('TodoCtrl', ['$scope', '$firebaseArray', TodoCtrl]);
})();