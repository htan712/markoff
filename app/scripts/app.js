(function() {
    function config($stateProvider, $locatioProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requreBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }
    
    angular
        .module('markOff', ['ui,router', 'firebase'])
        .config(config);
})();