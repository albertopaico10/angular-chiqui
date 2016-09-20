define(['app/app','constant','../factory/data','../factory/SesionControl'], function (app) {
  app.controller("LoginController",
    ["$scope","Data", "$rootScope","SesionControl", '$dialogs',
    function ($scope, Data, $rootScope, SesionControl, $dialogs) {
      $scope.user = "";
    $scope.pass = "";
      $scope.loading = false;

    $scope.login = function(){
      $scope.isInvalidUser = false;
      $scope.isInvalidPassword = false;

      if($scope.isNullOrEmpty($scope.user)){
        $scope.isInvalidUser = true;
      }else{
        if($scope.isNullOrEmpty($scope.pass)){
          $scope.isInvalidPassword = true;
        }else{
          var credentials = {
                    user: m.validatebean.email,
                    password: m.validatebean.password,
                    type_customer: m.validatebean.type_customer
                };
               $scope.loading = true;
                  Data.post('http://localhost:3000/login/validate/', data).
        then(function successCallback(response) {
          console.log("Success: "+response.data.success);
          console.log("Detail: "+response.data.detail);
          console.log("Id User: "+response.data.detail.id);
          console.log("Code: "+response.data.detail.code_response);
          console.log("Messages: "+response.data.detail.messages_response);
          console.log("Description: "+response.data.detail.description);
          console.log("Aditional: "+response.data.detail.additional);
          m.validatebean={};
          if(response.data.success===false){
            m.messages_service=true;
            m.msg="** "+response.data.detail.messages_response;
          }else{
            $window.location.href="../pages/index.html#?name="+
            response.data.detail.description+"&id="+response.data.detail.id;
          }
          m.reset();
        },function errorCallback(response,error){
          console.log("=/");
        });
          /*Data.post('login', credentials).then(function(response){
            if(response.result === 1){
                     Data.get(Constants.URL_SERVICE_GET_USER+"/"+response.data[0].id).then(function(response){
                        $rootScope.userLogged = response.data[0];
                        SesionControl.set("userLogged", JSON.stringify(response.data[0]));
                        location.href = "#/welcome";
                     });
            }else{
                     $scope.loading = false;
              $scope.errorMessage = response.message;
            }
          });*/

        }
      }
    }

      $scope.isNullOrEmpty = function(value) {
      if(angular.isUndefined(value) || value == null || value == ''){
        return true;
      }
      return false;
    };
  }]);

});  
/*
module.controller("loginController",["$scope","$http","$window", function(m,$http,$window){
		m.messages_service=false;
		m.validatebean={};
		m.validateUser=function(){
			m.$broadcast('show-errors-check-validity');
			 if (m.loginForm.$valid) {
			 	
				console.log("Data : "+m.validatebean.password+"**"+m.validatebean.email);
				m.validatebean.type_customer="USER_WEB";
				var data={
						user: m.validatebean.email,
						password: m.validatebean.password,
						type_customer: m.validatebean.type_customer
				}
				console.log("Data : "+data);
				$http.post('http://localhost:3000/login/validate/', data).
				then(function successCallback(response) {
					console.log("Success: "+response.data.success);
					console.log("Detail: "+response.data.detail);
					console.log("Id User: "+response.data.detail.id);
					console.log("Code: "+response.data.detail.code_response);
					console.log("Messages: "+response.data.detail.messages_response);
					console.log("Description: "+response.data.detail.description);
					console.log("Aditional: "+response.data.detail.additional);
					m.validatebean={};
					if(response.data.success===false){
						m.messages_service=true;
						m.msg="** "+response.data.detail.messages_response;
					}else{
						$window.location.href="../pages/index.html#?name="+
						response.data.detail.description+"&id="+response.data.detail.id;
					}
					m.reset();
				},function errorCallback(response,error){
					console.log("=/");
				});
			 }
	}
	m.reset = function() {
		console.log("Listo para limpiar");
    	m.$broadcast('show-errors-reset');
	}

	
}]);

*/

//data.push(m.validatebean);
    //alert("QUE PASOOOOO.... AMIGUITOOOOO");     
    /*$http.get('http://localhost:3000/coordinate/get/18').
        then(function successCallback(response) {
            //$scope.greeting = response.data;
            console.log("Success: "+response.data.success);
            console.log("Detail: "+response.data.detail);
            console.log("Code Response: "+response.data.detail.codeResponse);
            console.log("Latitude: "+response.data.detail.latitude);
            console.log("Longitude: "+response.data.detail.longitude);
            console.log("Title: "+response.data.detail.title);
            console.log("Status: "+response.data.detail.status);
            console.log("Messages Response: "+response.data.detail.messagesResponse);
        },function errorCallback(response) {
        console.log("=/");
        console.log("Error : "+response.data);
    }); */