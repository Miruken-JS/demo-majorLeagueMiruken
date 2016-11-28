import "./playerFeature.js";

new function() {

    mlm.package(this, {
        name:    "player",
        imports: "mlm,miruken.mvc",
        exports: "ChoosePlayerController"
    });

    eval(this.imports);

    const ChoosePlayerController = Controller.extend({
        $properties:{
            players: [],
            player:  null,
            team:    null
        },

        initialize() {
            const io = this.io;
            return MasterDetail(io)
                .getSelectedDetail(Team).then(team => {
                    this.team = team;
                    return PlayerFeature(io).players();
                }).then(players => {
                    this.players = players.filter(p => p.teamId != this.team.id);
                });
        },

        choosePlayer() {
            ViewRegion(this.io.modal({
                title: "Select Your Players",
                buttons: [
                    { text: "Ok",
                      css: "btn-sm btn-primary" },
                    "Cancel" ]
            })).show("app/player/choosePlayer");
        },
        
        addPlayer(player) {
            this.player = player;
            this.endContext();
        }
    });

    eval(this.exports);

};

