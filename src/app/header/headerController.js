new function() {

    base2.mlm.package(this, {
        name:    "header",
        imports: "miruken,miruken.mvc",
        exports: "HeaderController"
    });

    eval(this.imports);

    const TEAMS   = "teams";
    const PLAYERS = "players";

    const HeaderController = Controller.extend({
        $inject: ["$state"],
        constructor($state){
            this.extend({
                goToTeams() {
                    $state.current.name === TEAMS
                        ? $state.reload()
                        : $state.go(TEAMS);
                },
                goToPlayers() {
                    $state.current.name === PLAYERS
                        ? $state.reload()
                        : $state.go(PLAYERS);
                }
            });
        },
    });

    eval(this.exports);

};
