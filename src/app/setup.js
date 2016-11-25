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
        exports: "SetupInstaller"
    });

    eval(this.imports);

    moment.fn.toJSON   = function() { return this.format("L"); };
    moment.fn.toString = function() { return this.format("L"); };

    const SetupInstaller = Installer.extend({
        $inject: ["$urlRouterProvider", "$stateProvider"],
        constructor($urlRouterProvider, $stateProvider) {
            $stateProvider
                .state(UiRouter.install("mvc"))
                .state("mvc.default-id",
                       UiRouter.route("/{controller}/{action}/{id}"))
                .state("mvc.default",
                       UiRouter.route("/{controller}/{action}"));            
            $urlRouterProvider.otherwise("/teams/showteams");

            Controller.prepare.push(function (handler) {
                return handler.$recover();  // handle common error scenarios
            });
            
            Controller.execute.push(function (handler) {
                return handler.$ngApplyAsync();  // ensure $digest loop runs
            });
        }
    });

    
    angular.element(() => angular.bootstrap(document, ["mlm"]));

    eval(this.exports);
    
};
