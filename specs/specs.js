describe("MakePizza", function() {
    it("Makes a pizza with a size of Large", function() {
        var testPizza = Object.create(MakePizza);
        expect(testPizza.size).to.equal("Large");
    });
    it("Makes a pizza with a topping of cheese", function() {
        var testPizza = Object.create(MakePizza);
        testPizza.topping = "Cheese";
        expect(testPizza.topping).to.equal("Cheese");
    });
    describe("calculateCost", function() {
        it("Takes a pizza with a topping of Cheese and size of Large and calculates a price of $15", function() {
            var testPizza = Object.create(MakePizza);
            testPizza.topping = "Cheese";
            expect(testPizza.calculateCost()).to.equal(15);
        });
        it("Takes a pizza with a topping of Pepperoini and size of Large and calculates a price of $16", function() {
            var testPizza = Object.create(MakePizza);
            testPizza.topping = "Pepperoni";
            expect(testPizza.calculateCost()).to.equal(16);
        });
        it("Takes a pizza with a topping of Pepperoini and size of Medium and calculates a price of $14", function() {
            var testPizza = Object.create(MakePizza);
            testPizza.size = "Medium";
            testPizza.topping = "Pepperoni";
            expect(testPizza.calculateCost()).to.equal(14);
        });
        it("Takes a pizza with a topping of Pepperoini and size of Small and calculates a price of $12", function() {
            var testPizza = Object.create(MakePizza);
            testPizza.size = "Small";
            testPizza.topping = "Pepperoni";
            expect(testPizza.calculateCost()).to.equal(12);
        });
    });
});
