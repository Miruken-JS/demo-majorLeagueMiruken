new function() {

  mlm.package(this, {
    name:    'home',
    imports: 'miruken.mvc',
    exports: 'HomeController'
  });

  eval(this.imports);

  var HomeController = Controller.extend({
    $properties:{
      message: 'Hello, Miruken!'
    },
    constructor: function(){

    }
  });

  eval(this.exports);

};
