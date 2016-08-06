new function() {

  base2.Package(this, {
    name:    'mlm',
    imports: 'miruken.ng,miruken.ioc',
    exports: 'SetupInstaller,SetupRunner',
    ngModule: [
        'ui.router'
    ]
  });

  eval(this.imports);

  const SetupInstaller = Installer.extend({
    $inject: ['$urlRouterProvider'],
    constructor: function($urlRouterProvider){
      $urlRouterProvider.otherwise('/');
    }
  });

  const SetupRunner = Runner.extend({
    $inject: ['$rootScope', '$state'],
    constructor: function ($rootScope, $state) {
      // Requiring $state in a run forces the  ui-router to
      // register a listener for '$locationChangeSuccess'
      // before it is raised by the  angular.bootstrap function.
      // Also adding it to the $rootScope for convenience
      $rootScope.$state = $state;
    }
  });

  eval(this.exports);

};
