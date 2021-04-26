$(document).ready(function () {
    // event handlers always go here
    $("#tabs a").on("click", showTab);
    $("button").on("click", calculate);
    $("input#small").on("change",calculate);
    $("input#medium").on("change",calculate);
    $("input#large").on("change",calculate);
    $("input#sausage").on("change",calculate);
    $("input#pepperoni").on("change",calculate);
    $("input#ham").on("change",calculate);
    $("input#Mushrooms").on("change",calculate);
    $("input#Onions").on("change",calculate);
    $("input#Peppers").on("change",calculate);
    $("input#thin").on("change",calculate);
    $("input#pan").on("change",calculate);
    $("input#gluten").on("change",calculate);
    $("input#fname").on("change",calculate);
    $("input#lname").on("change",calculate);
    $("input#address").on("change",calculate);
    $("input#phone").on("change",calculate);
    $('#save_value').on("click",placedOrder);
});

// This function is required by Bootstrap to show/hide the selected tab
function showTab(event) {
    event.preventDefault();
    $(this).tab("show");
}
// This function sends an alert to the user that the order has been placed
function placedOrder(){
    let placedOrder =   "Thank You! Your order has been placed!";
    alert(placedOrder); 
}

function calculate()
{
    //Gather all input for customer//
    let phone = $("#phone").val();
    let address = $("#address").val();
    let fName =  $("#fname").val();
    let lName =  $("#lname").val();

    //Gater all input for pizza //
    let sizeVal = $('input[name="size"]:checked').data("value");
    let crustVal = $('input[name="crust"]:checked').data("value");
    var selMeat = $('input[name="meat"]:checked').map(function(_, el) {
        return $(el).data("value");
    }).get();
    var selVeg = $('input[name="veg"]:checked').map(function(_, el) {
        return $(el).data("value");
    }).get();
    let meatboxes = $('input[name="meat"]:checked').length;
    let vegboxes = $('input[name="veg"]:checked').length;
    let size = $("input[name=size]:checked").data("price");
    
    //Math//
    let meat = (meatboxes * 1.5);
    let veg = vegboxes;
    let total = +size + +meat + +veg;
    let totalTax = total * 0.051
    let grandTotal = totalTax + total + 2 

    // OUTPUT!//
    $("span#total").text("Total = " +total.toFixed(2));
    $("span#totalTax").text("Total Tax = " +totalTax.toFixed(2));
    $("span#grandTotal").text("Grand Total (this includes a $2 delivery fee) = " +grandTotal.toFixed(2));
    $("span#pizzaInfo").text(`One ${sizeVal} ${selMeat}  pizza on ${crustVal} crust with ${selVeg} `);
    $("span#name").text(`${fName} ${lName} ${address} ${phone}`);
    $("span#address").text(`${address}`);
    $("span#fname").text(`${fName}`);
    $(".output1").show();
    $(".output2").show();
 
}