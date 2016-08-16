new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.mvc,mlm.team",
    exports: "TeamLayoutController"
  });

  eval(this.imports);

  const TeamLayoutController = Controller.extend({
    viewRegionCreated: function(region) {
      return TeamFeature(region.context).showTeams();
    }
  });

  eval(this.exports);

};

