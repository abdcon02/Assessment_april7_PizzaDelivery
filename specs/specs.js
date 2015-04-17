describe("MakePizza", function() {

    it("Makes a pizza with a size of Large", function() {
        var testPizza = Object.create(MakePizza);
        expect(testPizza.size).to.equal("Large");
    });
    // describe("calculateCost", function() {
    //
    // })
});
