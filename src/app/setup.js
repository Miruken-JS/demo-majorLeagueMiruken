new function() {

  base2.package(this, {
    name:    "mlm",
    imports: "miruken.ng,miruken.mvc,miruken.ioc",
    exports: "SetupInstaller,SetupRunner,DATE_FORMATS",
    ngModule: [
        "ui.router",
        "ngMessages",
        "localytics.directives"
    ]
  });

  eval(this.imports);
  const DATE_FORMATS = ["M/D/YYYY", "M/D/YY", "M-D-YYYY", "M-D-YY"];
  moment.fn.toJSON   = function() { return this.format("L"); };
  moment.fn.toString = function() { return this.format("L"); };

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
      const context = this.context;
      return context && context
          .$recover()         // handle common error scenarios
          .$validAsync(this)
          .$ngApplyAsync();  // ensure $digest loop runs after promise
    }
  });

  eval(this.exports);

};
