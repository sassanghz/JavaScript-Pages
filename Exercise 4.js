document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get item prices and quantities
        const item1Name = document.getElementById("item1").innerHTML;
        const item1Price = parseFloat(document.getElementById("price1").innerHTML);
        const quantity1 = parseInt(document.getElementById("quantity1").value);

        const item2Name = document.getElementById("item2").innerHTML;
        const item2Price = parseFloat(document.getElementById("price2").innerHTML);
        const quantity2 = parseInt(document.getElementById("quantity2").value);

        const item3Name = document.getElementById("item3").innerHTML;
        const item3Price = parseFloat(document.getElementById("price3").innerHTML);
        const quantity3 = parseInt(document.getElementById("quantity3").value);
        
        // Check if any fields are empty or contain non-integer values
        if (isNaN(quantity1) || isNaN(item2Price) || isNaN(quantity2)) {
            alert("Please enter valid prices and quantities for all items.");
            return;
        }

        // Calculate total cost
        const totalCost = (item1Price * quantity1) + (item2Price * quantity2) + (item3Price * quantity3);

        // Display total cost on the page
        const totalCostElement = document.getElementById("totalCost");
        totalCostElement.textContent = "Final Total: $" + totalCost.toFixed(2);

        document.getElementById("reciept1").textContent = item1Name;
        document.getElementById("finalQuantity1").textContent = ("Total Quantity: " + quantity1);
        document.getElementById("finalPrice1").textContent = ("Item Price: " + item1Price);
        document.getElementById("finalTotal1").textContent = ("Total for this item: " + (item1Price * quantity1))
        
        document.getElementById("reciept2").textContent = item2Name;
        document.getElementById("finalQuantity2").textContent = ("Total Quantity: " + quantity2);
        document.getElementById("finalPrice2").textContent = ("Item Price: " + item2Price);
        document.getElementById("finalTotal2").textContent = ("Total for this item: " + (item2Price * quantity2))

        document.getElementById("reciept3").textContent = item3Name;
        document.getElementById("finalQuantity3").textContent = ("Total Quantity: " + quantity3);
        document.getElementById("finalPrice3").textContent = ("Item Price: " + item3Price);
        document.getElementById("finalTotal3").textContent = ("Total for this item: " + (item3Price * quantity3))
    });
});
