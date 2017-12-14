

var app = angular.module('MonteApp');


app.component('login',  {
    templateUrl: "view/login.html",
    controller: function($http, config, $state, $timeout) {

        var ctl = this;

        ctl.userName = "";
        ctl.pass = "";
        var token = "";
        ctl.login = true;

        ctl.login = function() {
            var datosLogin = {
                UserName: ctl.userName,
                Password: ctl.pass
            };
            var peticion = $http.post(config.url + "login", datosLogin);

            peticion.then(function(respuesta) {
                localStorage.setItem("token", respuesta.data.Token);
                $timeout(function() {
                   
                    $state.go('home');
                    console.log("hoo");
                },0);
                
                
            });
            
        };

    }
});
