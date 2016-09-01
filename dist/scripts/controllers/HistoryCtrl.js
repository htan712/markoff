(function() {
    function HistoryCtrl($scope, $firebaseArray) {
        $scope.todos = $firebaseArray(firebase.database().ref().child('/todo'));
        
        $scope.removeTodo = function(todo) { 
            var index = $scope.todos.indexOf(todo);
            $scope.todos.$remove(todo);
        }
        
        $scope.incomplete = function(todo) {
            todo.complete = false;
            todo.status = 'active';
            $scope.todos.$save(todo);
        }
        
        $scope.isComplete = function(todo) {
            if(todo.complete) {
                return {"text-decoration": "line-through"}
            } else {
                return {"text-decoration": "none"}  
            }
        }
        $scope.currentUser;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                $scope.currentUser = firebase.auth().currentUser.email;
                console.log(firebase.auth().currentUser.email + " has signed In");
            } else {
                console.log("User not signed in: Calling from authstatechanged");
            }
        });
        
    }
    
        angular
            .module('markOff')
            .controller('HistoryCtrl', ['$scope', '$firebaseArray', HistoryCtrl]);
})();

            