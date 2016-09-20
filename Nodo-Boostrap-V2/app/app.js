define(['angularAMD', 'angular-route','ui.bootstrap','bootstrap', 'constant','dialogs', 'ngTable'],
   function (angularAMD) {
      'use strict';
		var $routeProviderReference;
		var app = angular.module("webapp", ['ngRoute','ui.bootstrap','dialogs', 'ngTable']);

		app.config(function ($routeProvider) {
			 $routeProviderReference = $routeProvider;
		});

		app.run(['$rootScope', '$http', '$route',
			function($rootScope, $http, $route) {
            $http.get('http://localhost:3000/json/get').
            then(function successCallback(response) {
            	console.log("Entre"+response.data);
               angular.forEach(response.data, function (route) {
                  console.log(route);
                  $routeProviderReference.when( route.url_opc,
							angularAMD.route({ templateUrl: route.templateurl_opc,
												controller: route.controller_opc,
												controllerUrl :route.controllerurl_opc }));
		    	});
              console.log("Termino");
		    $routeProviderReference.otherwise({ redirectTo: '/' });
          	$route.reload();
          	console.log("Termino de verdad");
       		});
		}]);

		return angularAMD.bootstrap(app);
});