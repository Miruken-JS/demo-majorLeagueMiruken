new function(){

	mlm.package(this,{
		name:    "team",
		imports: "mlm,miruken.callback",
		exports: "TeamHandlerMock"
	});

	eval(this.imports);

	const teams = [
		new Team({name: "Accountants", coach: "Ric Deanda"}),
		new Team({name: "Leaders",     coach: "Curtis Hite", manager: "David O'Hara" }),
		new Team({name: "Marketeers",  coach: "Diana"}),
		new Team({name: "Recruiters",  coach: "Gabby Garza-Ramos"})
	];

	let $q;

	const TeamHandlerMock = CallbackHandler.extend(TeamFeature, {
		constructor(q) {
			$q = q;
		},
		getTeams(){
			return $q.resolve(teams);
		},
        createTeam(team){
        	teams.push(team);
        	return $q.resolve();
        },
        deleteTeam(team){},
        updateTeam(team){}
	});

	eval(this.exports);
};