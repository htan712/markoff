(function() {
    function HomeCtrl($scope, $firebaseArray) {
        this.welcome = "Welcome to MarkOff";
    }
    
    angular
        .module('markOff')
        .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
})();