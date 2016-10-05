new function() {

  base2.package(this, {
    name:    "mlm",
    imports: "miruken.ng",
    exports: "ToMoment"
  });

  eval(this.imports);

  const ToMoment = Directive.extend({
    restrict: "A",
    require:  "?ngModel",
    link: function (scope, elm, attrs, modelCtrl) {
        modelCtrl.$parsers.push(function (inputValue) {
            if (!modelCtrl) {
                return;
            }
            if (inputValue == undefined) {
                return "";
            }

            return moment(inputValue, 'MM/dd/yyyy', false);
        });
        modelCtrl.$formatters.push(value => {
          return value && moment.isMoment(value)
            ? value.creationData().input
            : "";
        });
    }
  });

  eval(this.exports);

};
