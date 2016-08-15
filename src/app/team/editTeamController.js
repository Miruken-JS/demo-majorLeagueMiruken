new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "EditTeamController"
  });

  eval(this.imports);

  const EditTeamController = Controller.extend({
    $properties:{
      title:      "Edit Team",
      buttonText: "Save",
      team:       { map: Team }
    },
    initialize(){
      return MasterDetail(this.controllerContext).getSelectedDetail(Team).then(team => this.team = team);
    },

    save() {
      TeamFeature(this.context).createTeam(this.team).then(() => {
          TeamFeature(this.context).showTeams();
      });
    }
  });

  eval(this.exports);

};
