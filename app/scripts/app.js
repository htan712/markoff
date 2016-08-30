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
                controller: 'HomeCtrl as homeCtrl',
                templateUrl: '/templates/home.html'
            })
        $stateProvider
            .state('todo', {
                url: '/todo',
                controller: 'TodoCtrl as todoCtrl',
                templateUrl: '/templates/todo.html',
            })
        $stateProvider
            .state('history', {
                url: '/history',
                controller: 'HistoryCtrl as history',
                templateUrl: '/templates/history.html',
            })
    }

    angular
        .module('markOff', ['firebase', 'ui.router'])
        .config(config);
})();
