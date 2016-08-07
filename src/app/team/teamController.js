new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.mvc",
    exports: "TeamController"
  });

  eval(this.imports);

  const TeamController = Controller.extend({
    $properties:{
    },
    constructor: function(){
    }
  });

  eval(this.exports);

};
