new function(){

	mlm.package(this, {
		name:    "mock",
		imports: "mlm,mlm.team,miruken.callback",
		exports: "TeamHandlerMock"
	});

	eval(this.imports);

  let _id = 0;
  function nextId() {
    return _id = ++_id;
  }

	const teams = [
		new Team({
      id:      nextId(),
      name:    "Dallas",
      coach:   { firstName: "David", lastName: "O'Hara" },
      manager: { firstName: "Ric",   lastName: "DeAnda" },
      roster: [
        { firstName: "Michael", lastName: "Dudley",  number: 7,  birthDate: "08/28/1977" },
        { firstName: "Craig",   lastName: "Neuwirt", number: 22, birthDate: "07/19/1970" }
      ]}),
		new Team({
      id:      nextId(),
      name:    "College Station",
      coach:   { firstName: "Ed",   lastName: "Grannan" },
      manager: { firstName: "Mike", lastName: "Abney" }}),
		new Team({
      id:      nextId(),
      name:    "Houston",
      coach:   { firstName: "Ken",    lastName: "Howard" },
      manager: { firstName: "Devlin", lastName: "Liles" }}),
		new Team({
      id:      nextId(),
      name:    "Columbus",
      coach:   { firstName: "Mark",    lastName: "Kovacevich" },
      manager: { firstName: "Jacquie", lastName: "Bickel" }}),
    new Team({
      id:      nextId(),
      name:    "Minneapolis",
      coach:   { firstName: "Barb",  lastName: "Gurstelle" },
      manager: { firstName:"Leroy" , lastName: "Thydean" }})];

	const TeamHandlerMock = CallbackHandler.extend(TeamFeature, {
		getTeams() {
			return Promise.resolve(teams);
		},
    createTeam(team) {
      team.id = nextId();
      teams.push(team);
      return Promise.resolve();
    },
    deleteTeam(team) {},
    updateTeam(team) {
      let existing = teams.find(item => item.id === team.id);
      if (existing) {
        let result = existing.fromData(team);
      }
      return Promise.resolve(existing);
    }
	});

	eval(this.exports);

};
