new function() {

  mlm.package(this, {
    name:    'home',
    imports: 'miruken.ioc',
    exports: 'HomeInstaller'
  });

  eval(this.imports);

  var HomeInstaller = Installer.extend({
    $inject: ['$stateProvider'],
    constructor: function($stateProvider){
      $stateProvider
        .state('home', {
            url:          '/',
            templateUrl:  'app/home/home.html',
            controller:   'HomeController',
            controllerAs: 'vm'
        });
    }
  });

  eval(this.exports);

};
