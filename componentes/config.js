
var app  = angular.module("MonteApp");

app.constant('config', {
    url: "http://localhost:55063/api/"
});

app.config(function($stateProvider, $urlRouterProvider) {

  var homeState = {
      name:"home",
      url:"/",
      component:"home"
  };

    var listadoState = {
    name: 'listado',
    url: '/clientes',
    component: 'listado'
  }

  var formState = {
    name: 'agregar',
    url: '/agregar',
    component: 'formulario'
  }

  var loginState = {
      name: 'login',
      url:'/login',
      component:'login'
  }

  var agregaCondenaState = {
      name: 'agregacondena',
      url:'/condena',
      component:'agregacondena'
  }

    $stateProvider.state(agregaCondenaState);
    $stateProvider.state(homeState);
    $stateProvider.state(formState);
    $stateProvider.state(listadoState);
    $stateProvider.state(loginState);
    
    $urlRouterProvider.when('', '/');
    //$stateProvider.otherwise('home');

});