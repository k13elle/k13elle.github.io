var portfolio = angular.module('portfolio', ['ngRoute']);

portfolio.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}]);

portfolio.config(['$routeProvider', function ($routeProvider) {
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
