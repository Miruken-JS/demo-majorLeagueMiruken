import "./infrastructure/equalHeight.js";
import "./header/headerController.js";
import "./error/errorController.js";
import "./team/setup.js";
import "./player/setup.js";
import "./env/mock/setup.js";

new function() {

    base2.package(this, {
        name:    "mlm",
        imports: "miruken.ng,miruken.mvc,miruken.ioc,miruken.callback",
        exports: "SetupInstaller,SetupRunner"
    });

    eval(this.imports);

    moment.fn.toJSON   = function() { return this.format("L"); };
    moment.fn.toString = function() { return this.format("L"); };

    const SetupInstaller = Installer.extend({
        $inject: ["$urlRouterProvider"],
        constructor($urlRouterProvider) {
            $urlRouterProvider.otherwise("/Teams/showTeams/");
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
                adoptState(state, params){
                    $state.go(state, params, { notify: false });
                }
            });
        }
    });

    Controller.implement({
        get controllerContext() {
            const context = this.context;
            return context && context
                .$recover()         // handle common error scenarios
                .$validAsync(this)
                .$ngApplyAsync();  // ensure $digest loop runs after promise
        },
        next(controller){
            return Promise.resolve(this.context.resolve(controller));
        }
    });

    eval(this.exports);

    angular.element(() => {
        angular.bootstrap(document, ["mlm"]);
    });

};
