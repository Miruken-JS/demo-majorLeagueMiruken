describe("test setup", () => {
    it("karma and chai are working", () => {
        true.should.be.true;
    });

    it("babel transpiler is configured", () => {
        const adjective = "cruel";
        `Goodbye ${adjective} world!`.should.equal("Goodbye cruel world!");
    });
});
