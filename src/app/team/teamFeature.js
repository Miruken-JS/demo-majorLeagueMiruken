new function() {
    mlm.package(this, {
        name:    "team",
        imports: "miruken",
        exports: "TeamFeature",
    });

    eval(this.imports);

    const TeamFeature = StrictProtocol.extend({
        createTeam(team) {},
        deleteTeam(team) {},
        editTeam(team)   {},
        getTeams()       {},
        showAllTeams()   {},
        showCreateTeam() {},
        showEditTeam()   {},
        showTeam()       {},
        updateTeam(team) {}
    });

    eval(this.exports);
};
