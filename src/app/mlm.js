new function() {
    base2.package(this, {
        name:    "mlm",
        ngModule: [
            "ui.router",
            "ngMessages",
            "localytics.directives",
            "mgcrea.ngStrap",
            "mgcrea.ngStrap.helpers.dimensions",
            "mgcrea.ngStrap.tooltip",
            "mgcrea.ngStrap.helpers.dateParser"
        ]
    });
    eval(this.imports);
    eval(this.exports);
};
