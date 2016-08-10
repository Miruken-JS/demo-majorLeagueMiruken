new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc,miruken.validate",
    exports: "CreateTeamController"
  });

  eval(this.imports);

  const CreateTeamController = Controller.extend({
    $properties:{
      title: "Create-A-Team",
      team:  { validate: $nested }
    },
    constructor() {
      this.team = new Team();
    },

    create() {
      return TeamFeature(this.context.$validAsync(this))
        .createTeam(this.team).then(() => {
          TeamFeature(this.context.showAllTeams());
        });
    },

  });

  eval(this.exports);

};
