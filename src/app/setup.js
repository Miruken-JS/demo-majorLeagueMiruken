new function() {

  base2.package(this, {
    name:    "mlm",
    imports: "miruken.ng,miruken.mvc,miruken.ioc",
    exports: "SetupInstaller,SetupRunner",
    ngModule: [
        "ui.router"
    ]
  });

  eval(this.imports);

  const SetupInstaller = Installer.extend({
    $inject: ["$urlRouterProvider"],
    constructor($urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
    }
  });

  const SetupRunner = Runner.extend({
    $inject: ["$rootScope", "$state"],
    constructor($rootScope, $state) {
      // Requiring $state in a run forces the  ui-router to
      // register a listener for "$locationChangeSuccess"
      // before it is raised by the  angular.bootstrap function.
      // Also adding it to the $rootScope for convenience
      $rootScope.$state = $state;
    }
  });

  Controller.implement({
    get controllerContext() {
      return this.context;
    }
  });

  eval(this.exports);

};
