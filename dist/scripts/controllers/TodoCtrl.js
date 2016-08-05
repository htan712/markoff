(function() {
    function TodoCtrl($scope, $firebaseArray) {
                
        /** I'm not exactly sure how to use firebasearray correctly here */
        $scope.todos = $firebaseArray(firebase.database().ref().child('/todo'));
        $scope.addTodos = function(){
            $scope.todos.
            console.log("Add toto");
        };
        
    }
        angular
            .module('markOff')
            .controller('TodoCtrl', ['$scope', '$firebaseArray', TodoCtrl]);
})();