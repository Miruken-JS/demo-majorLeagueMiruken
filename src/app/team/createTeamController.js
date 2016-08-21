new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc,miruken.validate",
    exports: "CreateTeamController"
  });

  eval(this.imports);

  const CreateTeamController = Controller.extend({
    $properties:{
      title:      "Create-A-Team",
      buttonText: "Create Team",
      team:       { validate: $nested },
      color:      Color
    },
    constructor() {
      this.team = new Team({
        coach:   {},
        manager: {}
      });
    },

    save() {
      return TeamFeature(this.controllerContext)
        .createTeam(this.team).then(() => TeamFeature(this.context).showTeams());
    },
    selectColor(color) {
      this.team.color = color;
    }

  });

  eval(this.exports);

};

