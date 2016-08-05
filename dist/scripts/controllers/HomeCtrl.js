(function() {
    function HomeCtrl() {
        this.welcome = "Welcome to MarkItOff";    
    }
    angular
        .module('markOff')
        .controller('HomeCtrl', HomeCtrl);
})();