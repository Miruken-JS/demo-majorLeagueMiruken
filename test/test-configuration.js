describe("test setup", () => {
    it("karma and chai are working", () => {
        true.should.be.true;
    });

    describe("babel transpiler", () => {
	    it("handles string templates", () => {
	        const adjective = "cruel";
	        `Goodbye ${adjective} world!`.should.equal("Goodbye cruel world!");
	    });

	    it("expands arrays", () => {
	        const numbers = [1, 2, 3];
	        const letters = ["a", "b", "c"];
	        const combined = [...numbers, ...letters];

	      	combined.length.should.equal(6); 
	    });
    });
});
