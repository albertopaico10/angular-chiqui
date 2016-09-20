define(['app/app'], function (app) {
  app.factory("SesionControl", function(){
      return {
      	//obtenemos una sesión //getter
          get : function(key) {
              return sessionStorage.getItem(key)
          },
          //creamos una sesión //setter
          set : function(key, val) {
              return sessionStorage.setItem(key, val)
          },
          //limpiamos una sesión
          unset : function(key) {
              return sessionStorage.removeItem(key)
          }
      }
  });
});
