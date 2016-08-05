(function() {
    function TodoCtrl($scope, $firebaseArray) {
        var task = new Firebase('https://markoff-9194b.firebaseio.com/');
        
        $scope.todos = $firebaseArray(task);
        $scope.addTodo = function(){
            console.log("Add toto");
        };
        
    };
        angular
            .module('markOff')
            .controller('TodoCtrl', ['$scope', '$firebaseArray', TodoCtrl]);
})();