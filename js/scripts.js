var MakePizza = {
    size: "Large",
    topping: "Plain",
    calculateCost: function() {
        var cost = 0;
        if (this.size === "Large"){
            cost += 13;
        } else if (this.size === "Medium") {
            cost += 11;
        } else {
            cost += 9;
        }
        if (this.topping === "Cheese") {
            cost += 2;
        } else if (this.topping === "Pepperoni") {
            cost += 3;
        }
        return cost;
    }
};

$(function() {

    var pizza = Object.create(MakePizza);

    // $('form#newPizza').submit(function(event) {
    //     var size
    // });
});
