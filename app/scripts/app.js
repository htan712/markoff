(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
        $stateProvider
            .state('todo', {
                url: '/todo',
                controller: 'TodoCtrl as todo',
                templateUrl: '/templates/todo.html'
            })
        $stateProvider
            .state('history', {
                url: '/history',
                controller: 'HistoryCtrl as history',
                templateUrl: '/templates/history.html'
            })
    }
    
    angular
        .module('markOff', ['firebase', 'ui.router'])
        .config(config);
})();