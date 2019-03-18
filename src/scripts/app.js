var modules = [
    'ngRoute', 'ngResource',
    'ngAria', 'ngSanitize'
];

var portfolioApp = angular.module('portfolio', modules);

portfolioApp.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

portfolioApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when(
            '/',
            {
                templateUrl: 'main.html',
                controller: 'commonController'
            }
        )
        .otherwise({redirectTo: '/'});
}]);

angular.element(function() {
    angular.bootstrap(document, ['portfolio']);
});
