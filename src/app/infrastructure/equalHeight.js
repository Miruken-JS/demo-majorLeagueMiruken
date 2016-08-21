new function() {

  base2.package(this, {
    name:    "mlm",
    imports: "miruken.ng",
    exports: "EqualHeight"
  });

  eval(this.imports);

  const EqualHeight = Directive.extend({
    restrict: "A",
    require:  "?ngModel",
    link(scope, elm, attrs, modelCtrl) {
      elm.css("opacity", "0");
      setTimeout(() => {
        $(".js-equal-height").matchHeight();
        elm.css("opacity", "");
      }, 0);
    }
  });

  eval(this.exports);

};
