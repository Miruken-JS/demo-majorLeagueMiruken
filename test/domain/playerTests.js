describe("player", () => {
	
	eval(mlm.domain.namespace);

	it("can create a player", () => {
		const player = new Player();
		player.should.not.be.nothing;
	});

	it("has a fullName", () => {
		const player = new Player({
			firstName: "Scott",
			lastName : "Sterling"
		});

		player.fullName.should.equal("Scott Sterling");
	});
});