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
      elm.css("visibility", "hidden");
      setTimeout(() => {
        const children = $(".js-equal-height").children();
        const heights = children.map(function() {
              return $(this).height();
        });
        const maxHeight = Math.max.apply(null, heights);
        children.height(maxHeight);
        elm.css("visibility", "visible");
      }, 0);
    }
  });

  eval(this.exports);

};
