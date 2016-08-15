new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "TeamController"
  });

  eval(this.imports);

  const TeamController = Controller.extend({
    $properties:{
      team: { map: Team }
    },
    initialize() {
      this.base();
      return MasterDetail(this.context).getSelectedDetail(Team).then(team => this.team = team );
    },

    edit() {
      TeamFeature(this.context).showEditTeam();
    }
  });

  eval(this.exports);

};
