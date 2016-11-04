// UI Logic

$(document).ready(function () {
  $(".btn-success").click(function(event){
 event.preventDefault();
    totalPrice();
});

function totalPrice() {
  var orderedPizza={};
    $(".totalcost tr td p").remove();
  var size = $(".size input[type=radio]:checked").val();
  var meats = $(".meat-toppings input[type=checkbox]:checked").length;
  var veggie = $(".veg-toppings input[type=checkbox]:checked").length;
  var cheese = $(".cheese input[type=checkbox]:checked").length;


  var orderedPizza = new Pizza(size, meats, cheese, veggie);

  var totalCost = orderedPizza.addtoPrice();
  $(".totalcost tr td").append('<p>'+totalCost+'</p>');
}


// Business Logic

function Pizza(size, meats, cheese, veggie) {
  this.pizzaSize = size
  this.cheeseNumber = cheese;
  this.meatToppings = meats;
  this.vegToppings = veggie;

}

Pizza.prototype.addtoPrice = function() {
  var cost = 7;
  if (this.pizzaSize === "medium") {
    cost += 2;
  } else if (this.pizzaSize === "small") {
    cost += 0;
  } else if (this.pizzaSize === "large") {
    cost += 4;
  } else if (this.pizzaSize === "extra large")  {
    cost += 6;
  }
  cost = cost + this.meatToppings*(2) +this.vegToppings*(0.75) + this.cheeseNumber*(1.5);
  return cost;
}


});
