new function() {
    mlm.package(this, {
        name:    "player",
        imports: "miruken",
        exports: "PlayerFeature",
    });

    eval(this.imports);

    const PlayerFeature = StrictProtocol.extend({
        createPlayer(player) {},
        deletePlayer(player) {},
        editPlayer(player)   {},
        players()            {},
        showPlayers()        {},
        showCreatePlayer()   {},
        showEditPlayer()     {},
        showPlayer()         {},
        updatePlayer(player) {}
    });

    eval(this.exports);
};
