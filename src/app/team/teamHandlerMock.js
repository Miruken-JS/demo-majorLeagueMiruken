new function(){

	mlm.package(this,{
		name:    "team",
		imports: "mlm,miruken.callback",
		exports: "TeamHandlerMock"
	});

	eval(this.imports);

	const teams = [
		new Team({name: "Dallas",          coach: "David O'hara",    manager: "Ric DeAnda"}),
		new Team({name: "College Station", coach: "Ed Grannan",      manager: "Mike Abney" }),
		new Team({name: "Houston",         coach: "Ken Howard",      manager: "Devlin Liles"}),
		new Team({name: "Columbus",        coach: "Mark Kovacevich", manager: "Jackie Bickle"}),
    new Team({name: "Minneapolis",     coach: "Barb Gurstelle",  manager: ""})
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
