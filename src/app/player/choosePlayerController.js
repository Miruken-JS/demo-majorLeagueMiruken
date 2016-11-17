import "../setup.js";
import "../domain/team.js";

new function() {

    base2.mlm.package(this, {
        name:    "player",
        imports: "miruken.mvc,mlm",
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
            this.base();
            const io = this.io;
            return MasterDetail(io).getSelectedDetail(Team).then(team => {
                this.team = team;
                return PlayerFeature(io).players();
            }).then(players => {
                this.players = players.filter(player => player.teamId != this.team.id);
            });
        },

        addPlayer(player) {
            this.player = player;
            this.context.end();
        }
    });

    eval(this.exports);

};

