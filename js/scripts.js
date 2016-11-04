$(document).ready(function () {
  $(".btn-success").click(function(event){
event.preventDefault();
    totalPrice();
  });


function Pizza(size, meats, cheese, veggie) {
  this.pizzaSize = size
  this.cheeseNumber = cheese;
  this.meatToppings = meats;
  this.vegToppings = veggie;
}

Pizza.prototype.priceCalc = function() {
  var cost = 0;
  if (this.pizzaSize === "medium") {
    cost = 9;
  } else if (this.pizzaSize === "small") {
    cost = 7;
  } else if (this.pizzaSize === "large") {
    cost = 11;
  } else   {
    cost = 13;
  }
  cost = cost + this.meatToppings*1.25 +this.vegToppings*0.75 + this.cheeseNumber*1.5;
  return cost;
}

  function totalPrice() {
    var size = $(".size input[type=radio]:checked").val();
    var meats = $(".meat-toppings input[type=checkbox]:checked").length;
    var veggie = $(".veg-toppings input[type=checkbox]:checked").length;
    var cheese = $(".cheese input[type=checkbox]:checked").length;


    var orderedPizza = new Pizza(size, meats, cheese, veggie);

    var totalCost = orderedPizza.priceCalc();
    $(".totalcost tr td").append('<p>'+totalCost+'</p>');
  }

});
