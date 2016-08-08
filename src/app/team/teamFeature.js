new function() {
    mlm.package(this, {
        name:    "team",
        imports: "miruken",
        exports: "TeamFeature",
    });

    eval(this.imports);

    const TeamFeature = StrictProtocol.extend({
        getTeams()       {},
        createTeam(team) {},
        deleteTeam(team) {},
        showAllTeams()   {},
        showCreateTeam() {},
        showTeam()       {},
        updateTeam(team) {}
    });

    eval(this.exports);
};
