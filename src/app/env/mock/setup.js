import "./handlerMocks.js";

new function() {

    mlm.package(this, {
        name:    "mock",
        imports: "miruken.ng,miruken.ioc",
        exports: "SetupRunner"
    });

    eval(this.imports);

    const SetupRunner = Runner.extend({
        $inject: ["$envContext"],
        constructor(envContext){
            envContext.addHandlers(new TeamHandlerMock());
            envContext.addHandlers(new PlayerHandlerMock());
        }
    });

    eval(this.exports);

};
