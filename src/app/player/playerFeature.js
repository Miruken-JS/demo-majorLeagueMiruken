new function() {
    mlm.package(this, {
        name:    "player",
        imports: "miruken",
        exports: "PlayerFeature",
    });

    eval(this.imports);

    const PlayerFeature = StrictProtocol.extend({
        createPlayer(player)   {},
        deletePlayer(player)   {},
        editPlayer(player)     {},
        player(id)             {},
        players()              {},
        showChoosePlayer(team) {},
        showCreatePlayer()     {},
        showEditPlayer(team)   {},
        showPlayer(team)       {},
        updatePlayer(player)   {}
    });

    eval(this.exports);
};
