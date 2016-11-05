import "./infrastructure/equalHeight.js";
import "./header/headerController.js";
import "./error/errorController.js";
import "./team/setup.js";
import "./player/setup.js";
import "./env/mock/setup.js";

new function() {

    base2.package(this, {
        name:    "mlm",
        imports: "miruken,miruken.ng,miruken.mvc,miruken.ioc,miruken.callback",
        exports: "SetupInstaller,SetupRunner"
    });

    eval(this.imports);

    moment.fn.toJSON   = function() { return this.format("L"); };
    moment.fn.toString = function() { return this.format("L"); };

    const Router = Base.extend({
        constructor($scope, params){
            const _this = this;
            $scope.loaded = function() {
                delete $scope.loaded;
                const context = this.context,
                      { controller, action = "index" } = params;
                _this.executeController(controller, action, params, context);
            };
        },
        executeController(controller, action, params, context) {
            return this.resolveController(controller, context)
                .then(ctrl => {
                    if (!ctrl) { return; }
                    const method = ctrl[action];
                    if (!$isFunction(method)) { return Promise.reject(`${action} does not exist on Controller`); }
                    return method.call(ctrl, params); 
                });
        },
        resolveController(controller, context){
            return Promise.resolve(context.resolve(this.inferControllerName(controller)))
                .then(ctrl => {
                   return (ctrl)
                       ? ctrl
                       : Promise.resolve(context.resolve(controller));
                })
                .then(ctrl => {
                    return (ctrl) 
                        ? ctrl
                        : Promise.reject(`${controller} Controller could not be resolved`);
                });
        },
        inferControllerName(controller) {
            return controller.endsWith("Controller")
                ? controller
                : `${controller}Controller`;
        }
    }, {
        $inject:  ["$scope", "$stateParams"],
        route:    "/{controller}/{action}/{id}",
        template: "<div region>{{ ::loaded() }}</div>"
    });

    const SetupInstaller = Installer.extend({
        $inject: ["$urlRouterProvider", "$stateProvider"],
        constructor($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise("/Teams/showTeams/");

            $stateProvider
                .state("default", {
                    url:          Router.route,
                    template:     Router.template,
                    controller:   Router
                });
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
