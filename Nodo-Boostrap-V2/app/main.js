require.config({
	baseUrl: "",
	// alias libraries paths.  Must set 'angular'
  	paths: {
     'angular': 'app/js/angular.min',
     'angular-route': 'app/js/angular-route.min',
     'angular-ui-router': 'app/js/angular-ui-router',
     'angularAMD': 'app/js/angularAMD.min',
     'ngload': 'app/js/ngload',
     'angular-resource': 'app/js/angular-resource',
    // External Js files
     'jquery' : 'plugins/jQuery/jquery-2.2.3.min',
     'bootstrap' : 'bootstrap/js/bootstrap.min',
     'metismenu' : 'plugins/metisMenu/metisMenu.min',
     'util' : 'app/js/util',
     'validator' : 'plugins/validator/validator',
     'sb-admin' : 'plugins/ab-admin/js/sb-admin-2',
     'constant' : 'app/common/constant/configConstant',
     'dialogs' : 'app/js/dialogs.min',
    //'dialogs' : 'http://m-e-conroy.github.io/angular-dialog-service/javascripts/dialogs.v2.min',
     'ui.bootstrap' : 'app/js/ui-bootstrap.min',
     'sanitize' : 'app/js/angular-sanitize.min',
     'ngTable' : 'app/js/ng-table.min',
     'jdatatable' : 'app/js/datatables.min',
     'dataTables' : 'app/js/angular-datatables',

    //'ui.bootstrap' : 'http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.6.0'
	},

	// Add angular modules that does not support AMD out of the box, put it in a shim
	shim: {
     'angular-route': [ 'angular' ],
     'angularAMD': [ 'angular' ],
     'ngload': [ 'angularAMD' ],
     'angular-resource': [ 'angular' ],
     'bootstrap':['jquery','angular'],
     
     'angular-ui-router': [ 'angular' ],
     'constant' : ['angular', 'angularAMD'],
     'ui.bootstrap' : ['angular','jquery'],
     'sanitize' : ['angular'],
     'dialogs' : ['angular','ui.bootstrap', 'sanitize'],
     'ngTable' : ['angular', 'angularAMD', 'sanitize', 'jquery'],
     'ngload' : ['angularAMD'],
	 'jdatatable' : ['jquery'],
     'dataTables' : ['angular', 'angularAMD', 'jquery','jdatatable']     
	},
	// kick start application
  	deps: ['app/app']
});