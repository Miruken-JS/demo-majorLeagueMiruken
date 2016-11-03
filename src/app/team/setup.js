import "./teamHandler.js";
import "./createTeamController.js";
import "./editTeamController.js";
import "./teamController.js";
import "./teamsController.js";

new function() {

    base2.mlm.package(this, {
        name:    "team",
        imports: "miruken.ng,miruken.ioc,miruken.mvc",
        exports: "SetupInstaller,SetupRunner,TeamsRoute,TeamRoute,CreateTeamRoute,EditTeamRoute"
    });

    eval(this.imports);

    const SetupInstaller = Installer.extend({
        $inject: ["$stateProvider"],
        constructor($stateProvider) {
        $stateProvider
            .state("teams", {
                url:          "/teams",
                templateUrl:  "app/region.html",
                controller:   "TeamsRoute",
                controllerAs: "vm"
            })
            .state("team", {
                url:          "/team/{id}",
                templateUrl:  "app/region.html",
                controller:   "TeamRoute",
                controllerAs: "vm"
            })
            .state("createTeam", {
                url:          "/create/team",
                templateUrl:  "app/region.html",
                controller:   "CreateTeamRoute",
                controllerAs: "vm"
            })
            .state("editTeam", {
                url:          "/edit/team/{id}",
                templateUrl:  "app/region.html",
                controller:   "EditTeamRoute",
                controllerAs: "vm"
            });
        }
    });

    const SetupRunner = Runner.extend({
        $inject: ["$appContext"],
        constructor(appContext) {
            appContext.addHandlers(new TeamHandler());
        }
    });

    const TeamsRoute = Controller.extend({
        viewRegionCreated(region) {
            return TeamFeature(region.context).showTeams();
        }
    });

    const TeamRoute = Controller.extend({
        inject: ["$stateParams"],
        constructor(params){
            this.extend({
                viewRegionCreated(region) {
                    TeamFeature(region.context).team(params.id).then(team => {
                        return TeamFeature(region.context).showTeam(team);
                    });
                }
            });
        }
    });

    const CreateTeamRoute = Controller.extend({
        viewRegionCreated(region) {
            return TeamFeature(region.context).showCreateTeam();
        }
    });

    const EditTeamRoute = Controller.extend({
        inject: ["$stateParams"],
        constructor(params){
            this.extend({
                viewRegionCreated(region) {
                    TeamFeature(region.context).team(params.id).then(team => {
                        return TeamFeature(region.context).showEditTeam(team);
                    });
                }
            });
        }
    });

    eval(this.exports);

};

