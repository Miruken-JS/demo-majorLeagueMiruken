new function(){

	mlm.package(this,{
		name:    "player",
		imports: "mlm,miruken.callback",
		exports: "PlayerHandlerMock"
	});

	eval(this.imports);

	const players = [
		new Player({firstName: "Craig",   lastName: "Neuwirt", birthdate: "07/07/1970", number: 0 }),
		new Player({firstName: "Michael", lastName: "Dudley",  birthdate: "08/28/1977", number: 7 }),
		new Player({firstName: "Cori",    lastName: "Drew",    birthdate: "01/01/1995", number: 2 }),
		new Player({firstName: "Kevin",   lastName: "Baker",   birthdate: "02/02/1980", number: 3 })
	];

	const PlayerHandlerMock = CallbackHandler.extend(PlayerFeature, {
		players() {
			return Promise.resolve(players);
		},
    createPlayer(player) {
      players.push(player);
      return Promise.resolve();
    },
    deletePlayer(player) {

    },
    updatePlayer(player) {

    }
	});

	eval(this.exports);
};
