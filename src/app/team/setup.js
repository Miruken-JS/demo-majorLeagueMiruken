import "./teamHandler.js";
import "./createTeamController.js";
import "./editTeamController.js";
import "./teamController.js";
import "./teamsController.js";

new function() {

    base2.mlm.package(this, {
        name:    "team",
        imports: "miruken,miruken.ng,miruken.ioc,miruken.mvc",
        exports: "SetupInstaller,SetupRunner,TeamRoute,CreateTeamRoute,EditTeamRoute"
    });

    eval(this.imports);

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
        $inject: ["$stateProvider"],
        constructor($stateProvider) {
        $stateProvider
            .state("default", {
                url:          Router.route,
                template:     Router.template,
                controller:   Router
            });
        }
    });

    const SetupRunner = Runner.extend({
        constructor(appContext) {
            $appContext.addHandlers(new TeamHandler());
        }
    });

    eval(this.exports);

};

