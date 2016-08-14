new function(){

	mlm.package(this,{
		name:    "team",
		imports: "mlm,miruken.callback",
		exports: "TeamHandlerMock"
	});

	eval(this.imports);

	const teams = [
		new Team({
      name:    "Dallas",
      coach:   { firstName: "David", lastName: "O'Hara" },
      manager: { firstName: "Ric",   lastName: "DeAnda" }}),
		new Team({
      name:    "College Station",
      coach:   { firstName: "Ed",   lastName: "Grannan" },
      manager: { firstName: "Mike", lastName: "Abney" }}),
		new Team({
      name:    "Houston",
      coach:   { firstName: "Ken",    lastName: "Howard" },
      manager: { firstName: "Devlin", lastName: "Liles" }}),
		new Team({
      name:    "Columbus",
      coach:   { firstName: "Mark",    lastName: "Kovacevich" },
      manager: { firstName: "Jacquie", lastName: "Bickel" }}),
    new Team({
      name:    "Minneapolis",
      coach:   { firstName: "Barb",  lastName: "Gurstelle" },
      manager: { firstName:"Leroy" , lastName: "Thydean" }})];

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
