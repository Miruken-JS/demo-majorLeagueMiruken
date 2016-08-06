new function() {

  mlm.package(this, {
    name:    'about',
    imports: 'miruken.mvc',
    exports: 'AboutController'
  });

  eval(this.imports);

  var AboutController = Controller.extend({
    $properties:{
    },
    constructor: function(){
    }
  });

  eval(this.exports);

};
