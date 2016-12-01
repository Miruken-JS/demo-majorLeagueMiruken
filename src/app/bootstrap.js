import "./header/index.js";
import "./error/index.js";
import "./team/index.js";
import "./player/index.js";
import "./infrastructure/index.js";
import "./env/mock/index.js";

new function() {

    base2.package(this, {
        name:    "mlm",
        imports: "miruken,miruken.mvc,miruken.ioc,miruken.ng",
        exports: "Bootstrap"
    });

    eval(this.imports);

    const Bootstrap = Installer.extend({
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

    moment.fn.toJSON   = function() { return this.format("L"); };
    moment.fn.toString = function() { return this.format("L"); };

    angular.element(() => angular.bootstrap(document, ["mlm"]));

    eval(this.exports);

};
