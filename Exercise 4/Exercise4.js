document.getElementById('calculateBtn').addEventListener('click', function() {
   
    var quantity1 = parseInt(document.getElementById('q1').value);
    var price1 = parseFloat(document.getElementById('alignment').rows[1].cells[2].innerText.substring(1)); 
    var quantity2 = parseInt(document.getElementById('q2').value);
    var price2 = parseFloat(document.getElementById('alignment').rows[2].cells[2].innerText.substring(1));  
    var quantity3 = parseInt(document.getElementById('q3').value);
    var price3 = parseFloat(document.getElementById('alignment').rows[3].cells[2].innerText.substring(1));

    var total = quantity1 * price1 + quantity2 * price2 + quantity3 * price3;

    var item1Display = "Basic Web Programming (Quantity = " + quantity1 + "): $" + price1.toFixed(2);
    var item2Display = "Intro to PHP (Quantity = " + quantity2 + "): $" + price2.toFixed(2);
    var item3Display = "Advanced JQuery (Quantity = " + quantity3 + "): $" + price3.toFixed(2);

    var totalDisplay = "Final Total: $" + total.toFixed(2);

    document.getElementById('item1Display').innerText = item1Display;
    document.getElementById('item2Display').innerText = item2Display;
    document.getElementById('item3Display').innerText = item3Display;

    document.getElementById('totalDisplay').innerText = totalDisplay;
});
