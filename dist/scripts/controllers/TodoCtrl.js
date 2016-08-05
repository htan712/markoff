(function() {
    function TodoCtrl($scope, $firebaseArray) {
                
        /** I'm not exactly sure how to use firebasearray correctly here */
//        var ref = new Firebase("markoff-9194b.firebaseapp.com/todo");
        $scope.todos = $firebaseArray(firebase.database().ref().child("/todo"));;
        $scope.addTodos = function(){
            $scope.todos.$add({
                task: $scope.newTodos
            });
        };
        
    }
        angular
            .module('markOff')
            .controller('TodoCtrl', ['$scope', '$firebaseArray', TodoCtrl]);
})();