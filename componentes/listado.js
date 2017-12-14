
//llamamos a nuestra aplicacion para trabajar con ella
var app = angular.module('MonteApp', ['ui.router'])

//agregamos nuestro componente de listado
//cada componente esta compuesto por una vista y un controlador

app.component('listado',{
	templateUrl:'view/listado.html', 
	controller:function($http, config) {
		var ctl = this;

		 $http.defaults.headers.common.Authorization = "token 21232F297A57A5A743894A0E4A801FC3";


		 var peticion  = $http.get(config.url + "clientes");

		 peticion.then(function(respuesta) {
		 		ctl.listado = respuesta.data;
		 });

		ctl.mensaje = "hola mundo";

		ctl.mostrarMensaje = function(){
			ctl.mensaje = "Hola gloria";
		}
	}
});