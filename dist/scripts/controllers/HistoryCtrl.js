(function() {
    function HistoryCtrl($scope, $firebaseArray) {
        $scope.todos = $firebaseArray(firebase.database().ref().child('/todo'));
        
        $scope.removeTodo = function(todo) { 
            var index = $scope.todos.indexOf(todo);
            $scope.todos.$remove(todo);
        }
        
        $scope.incomplete = function(todo) {
            todo.complete = false;
            $scope.todos.$save(todo);
        }
        
    }
    
        angular
            .module('markOff')
            .controller('HistoryCtrl', ['$scope', '$firebaseArray', HistoryCtrl]);
})();

            