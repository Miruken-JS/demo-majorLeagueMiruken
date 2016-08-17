new function() {
    mlm.package(this, {
        name:    "team",
        imports: "miruken",
        exports: "TeamFeature",
    });

    eval(this.imports);

    const TeamFeature = StrictProtocol.extend({
        createTeam(team)   {},
        deleteTeam(team)   {},
        editTeam(team)     {},
        teams()            {},
        showTeams()        {},
        showCreateTeam()   {},
        showEditTeam(team) {},
        showTeam(team)     {},
        updateTeam(team)   {}
    });

    eval(this.exports);
};
