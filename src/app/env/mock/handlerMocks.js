new function(){

	mlm.package(this, {
		name:    "mock",
		imports: "mlm,mlm.team,mlm.player,miruken.callback",
		exports: "TeamHandlerMock,PlayerHandlerMock"
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

	const players = [
		new Player({ id: nextId(), teamId: 1, firstName: "Cori",    lastName: "Drew", number: 2 }),
		new Player({ id: nextId(), teamId: 1, firstName: "Craig",   lastName: "Neuwirt", birthdate: "07/19/1970", number: 22 }),
		new Player({ id: nextId(), teamId: 1, firstName: "Michael", lastName: "Dudley",  birthdate: "08/28/1977", number: 7 }),
		new Player({ id: nextId(), teamId: 1, firstName: "Kevin",   lastName: "Baker",   birthdate: "02/02/1980", number: 3 })
	];

	const TeamHandlerMock = CallbackHandler.extend(TeamFeature, {
		teams() {
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

	const PlayerHandlerMock = CallbackHandler.extend(PlayerFeature, {
		players() {
			return Promise.resolve(players);
		},
    createPlayer(player) {
      player.id = nextId();
      players.push(player);
      return Promise.resolve();
    },
    deletePlayer(player) {

    },
    updatePlayer(player) {
      let existing = players.find(item => item.id === player.id);
      if (existing) {
        let result = existing.fromData(player);
      }
      return Promise.resolve(existing);
    }
	});

	eval(this.exports);

};
