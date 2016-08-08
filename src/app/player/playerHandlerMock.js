new function(){

	mlm.package(this,{
		name:    "player",
		imports: "mlm,miruken.callback",
		exports: "PlayerHandlerMock"
	});

	eval(this.imports);

	const players = [
		new Player({firstName: "Craig"}),
		new Player({firstName: "Michael"}),
		new Player({firstName: "Cori"}),
		new Player({firstName: "Kevin"})
	];

	let $q;

	const PlayerHandlerMock = CallbackHandler.extend(PlayerFeature, {
		constructor(q) {
			$q = q;
		},
		getPlayers(){
			return $q.resolve(players);
		},
        createPlayer(player){
        	players.push(player);
        	return $q.resolve();
        },
        deletePlayer(player){},
        updatePlayer(player){}
	});

	eval(this.exports);
};