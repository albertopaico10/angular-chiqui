define(['app/app','constant'], function (app, ConfigConstant) {
  app.factory("Data", ['$http', '$location',
      function ($http, $q, $location) {

          var serviceBase = Constants.URL_SERVICE_BASE;

          var obj = {};

          obj.get = function (q) {
              return $http.get(serviceBase + q).then(function (results) {
                  return results.data;
              });
          };
          obj.post = function (q, object) {
              return $http.post(serviceBase + q, object).then(function (results) {
                  return results.data;
              });
          };
          return obj;
  }]);
});
