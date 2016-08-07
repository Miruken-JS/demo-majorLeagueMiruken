new function(){

	mlm.package(this,{
		name:    "team",
		imports: "miruken.callback",
		exports: "TeamHandlerMock"
	});

	eval(this.imports);

	const TeamHandlerMock = CallbackHandler.extend(TeamFeature, {
		getTeams(){},
        createTeam(team){},
        deleteTeam(team){},
        updateTeam(team){}
	});

	eval(this.exports);
};