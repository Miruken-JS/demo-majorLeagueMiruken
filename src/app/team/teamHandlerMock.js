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
      manager: { firstName: "Ric",   lastName: "DeAnda" },
      roster: [
        { firstName: "Michael", lastName: "Dudley",  number: 7,  birthDate: "08/28/1977" },
        { firstName: "Craig",   lastName: "Neuwirt", number: 22, birthDate: "07/19/1970" }
      ]}),
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

	const TeamHandlerMock = CallbackHandler.extend(TeamFeature, {
		getTeams(){
			return Promise.resolve(teams);
		},
    createTeam(team){
      teams.push(team);
      return Promise.resolve();
    },
    deleteTeam(team) {},
    updateTeam(team) {
      var a = teams;
      return Promise.resolve();
    }
	});

	eval(this.exports);
};
