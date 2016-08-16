new function(){

	mlm.package(this,{
		name:    "mock",
		imports: "miruken.callback,mlm,mlm.player",
		exports: "PlayerHandlerMock"
	});

	eval(this.imports);

  let _id = 0;
  function nextId() {
    return _id = ++_id;
  }

	const players = [
		new Player({id: nextId(), firstName: "Cori",    lastName: "Drew", number: 2 }),
		new Player({id: nextId(), firstName: "Craig",   lastName: "Neuwirt", birthdate: "07/19/1970", number: 22 }),
		new Player({id: nextId(), firstName: "Michael", lastName: "Dudley",  birthdate: "08/28/1977", number: 7 }),
		new Player({id: nextId(), firstName: "Kevin",   lastName: "Baker",   birthdate: "02/02/1980", number: 3 })
	];

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
