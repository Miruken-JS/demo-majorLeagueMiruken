import "./infrastructure/systemTap.js";
import "./infrastructure/systemYuml.js";
import "./infrastructure/equalHeight.js";
import "./header/headerController.js";
import "./error/errorController.js";
import "./team/setup.js";
import "./player/setup.js";
import "./env/mock/setup.js";

new function() {

    base2.package(this, {
        name:    "mlm",
        imports: "miruken,miruken.ng,miruken.mvc,miruken.ioc,miruken.callback,miruken.error",
        exports: "SetupInstaller,SetupRunner"
    });

    eval(this.imports);

    moment.fn.toJSON   = function() { return this.format("L"); };
    moment.fn.toString = function() { return this.format("L"); };

    const SetupInstaller = Installer.extend({
        $inject: ["$urlRouterProvider", "$stateProvider"],
        constructor($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise("/Teams/showTeams/");

            $stateProvider
                .state("default-id",
                       UiRouter.route("/{controller}/{action}/{id}"))
                .state("default",
                       UiRouter.route("/{controller}/{action}"));
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

            CallbackHandler.implement({
                adoptState(state, params) {
                    $state.go(state, params, { notify: false });
                }
            });
        }
    });

    Controller.globalFilters.push(function (handler) {
        return handler
            .$recover()         // handle common error scenarios
            .$validAsync(this)  // validate the controller
            .$ngApplyAsync();   // ensure $digest loop runs after promise
    });

    eval(this.exports);

    angular.element(() => {
        angular.bootstrap(document, ["mlm"]);
    });

};
