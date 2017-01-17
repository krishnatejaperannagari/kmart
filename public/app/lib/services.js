// SERVICES
// The service we use to share data between controllers
commerceApp.service('shareService',['$location', '$http', '$log', function($location, $http, $log) {
    // shared variables
    // Should header log out? (will be fixed when we transfer functions to shared)
    this.didLogout = false;
    // product database
    this.items;
    // shipping total
    this.totalShipping;
    // cart tax total
    this.carttax;
    // category/department
    this.cat;
    // selected item
    this.currentItem;
    // subcategory 
    this.subcat;
    
    // shared functions
    
    // navigation functions
    // navigate to profile page
    this.toProfile = function(){
        $location.path('/profile');
    };
    //navigate to add product page
    this.toAddProduct = function(){
        $location.path('/add-product');
    };
    // navigate to login page
    this.toLogin = function(){
        $location.path('/login');
    };
    // navigate to registration page
    this.toRegister = function(){
        $location.path('/register');
    };
    // commerce functions
    // view product details 
    this.details = function(product){
        //use the product id as the route parameter in /details/:id
        $location.path('/details/' + product._id);
    };
        // view shopping cart
    this.toCart = function(){
        $location.path('/cart');
    };
    
    // view our ecommerce homepage (in this case the default route)
    this.goShopping = function(){
        $location.path('/');
    };    
    // auth routes
    
    // log the user out, set displayLogin to true, redirect to home page
    this.logout = function(){
        $http.get('/logout');
        $location.path('/');
    };
}]);
