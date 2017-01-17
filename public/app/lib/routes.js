commerceApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    
    $routeProvider

    .when('/', {
        templateUrl: 'app/pages/home.html',
        controller: 'mainController'
    })
    .when('/login', {
        templateUrl: 'app/pages/login.html',
        controller: 'mainController'
    })
    .when('/register', {
        templateUrl: 'app/pages/register.html',
        controller: 'mainController'
    })
    .when('/register-taken', {
        templateUrl: 'app/pages/register.html',
        controller: 'mainController',
        tellUser : 'That username is already taken'
    })
    .when('/profile', {
        templateUrl: 'app/pages/profile.html',
        controller: 'profileController'
    })
    .when('/cart', {
        templateUrl : 'app/pages/cart.html',
        controller: 'productController'
    })
    .when('/details/:id', {
        templateUrl : 'app/pages/details.html',
        controller: 'detailsController'
    })
	.when('/add-product', {
        templateUrl: 'app/pages/add-product.html',
        controller: 'mainController'
    })
    .when('/:all*', {
        templateUrl: 'app/pages/home.html',
        controller: 'mainController'
    });
}]);
