import "../domain/player.js";

new function() {
    
    base2.mlm.package(this, {
        name:    "player",
        imports: "miruken",
        exports: "PlayerFeature",
    });

    eval(this.imports);

    const PlayerFeature = StrictProtocol.extend(Resolving, {
        createPlayer(player)   {},
        deletePlayer(player)   {},
        editPlayer(player)     {},
        player(id)             {},
        players()              {},
        showChoosePlayer(team) {},
        updatePlayer(player)   {}
    });

    eval(this.exports);
    
};
