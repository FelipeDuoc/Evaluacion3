
var app = angular.module("MonteApp");


app.component("formulario", {
	templateUrl: "view/formulario.html",
	controller: function($http, config, $state) {

		if(localStorage.getItem("token")==null) {
			console.log("no est");
			$state.go("login");
			return;
		}

		$http.defaults.headers.common.Authorization = "token " + localStorage.getItem("token");

		var ctl = this;

		ctl.nombre = "";
		ctl.apellido = "";
		ctl.edad = "";
		ctl.token = localStorage.getItem("token");	


		ctl.agregar = function() {
			var url  = config.url +  "clientes";

			var datos = {
				Nombre:ctl.nombre,
				Apellido:ctl.apellido,
				Edad:ctl.edad
			}

			var peticion = $http.post(url, datos);

			peticion.then(function() {
				ctl.mensaje = "Agregado correctamente";
				ctl.added = true;
			});

		}


	}
});

