// PROTOTYPE to create pizza with size and topping properties and a method to calculate cost
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
    // Create and instance
        var pizza = Object.create(MakePizza);
    // When buttons are clicked, change object properties and html

        $('#large_size').click(function(event) {
            // use the substring to strip the extra cost off the input value to keep property clean
            pizza.size = $('#large_size').val().substring(4);
            $('.size_attribute').text(pizza.size);
            $('#pizza_pic').attr('height', '200', 'width', '200');

///// HEY DIANE, i can't figure out how to not have to repeat this line
///// in all my events without just making another event. Any thoughts?
            $('.cost_attribute').text(pizza.calculateCost());
/////
        });
        $('#medium_size').click(function(event) {
            pizza.size = $('#medium_size').val().substring(4);
            $('.size_attribute').text(pizza.size);
            $('#pizza_pic').attr('height', '180', 'width', '180');
            $('.cost_attribute').text(pizza.calculateCost());
        });
        $('#small_size').click(function(event) {
            pizza.size = $('#small_size').val().substring(3);
            $('.size_attribute').text(pizza.size);
            $('#pizza_pic').attr('height', '160', 'width', '160');
            $('.cost_attribute').text(pizza.calculateCost());
        });
        $('#plain_topping').click(function(event) {
            pizza.topping = $('#plain_topping').val();
            $('.topping_attribute').text(pizza.topping);
            $('#pizza_pic').attr('src', 'images/plain.png');
            $('.cost_attribute').text(pizza.calculateCost());
        });
        $('#cheese_topping').click(function(event) {
            pizza.topping = $('#cheese_topping').val().substring(4);
            $('.topping_attribute').text(pizza.topping);
            $('#pizza_pic').attr('src', 'images/cheese.png');
            $('.cost_attribute').text(pizza.calculateCost());
        });
        $('#pepperoni_topping').click(function(event) {
            pizza.topping = $('#pepperoni_topping').val().substring(4);
            $('.topping_attribute').text(pizza.topping);
            $('#pizza_pic').attr('src', 'images/pepperoni.png');
            $('.cost_attribute').text(pizza.calculateCost());
        });
    // When button is clicked, order current version of the pizza object
        $('#order_pizza').click(function(event) {
            event.preventDefault();
            $('#order_form').hide();
            $('#order_complete').show();
        });
});
