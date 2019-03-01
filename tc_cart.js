"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Angelina Stilphen
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var carHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>"; 

for (var i = 0; i < item.length; i++)  {
    var carHTML = "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' /></td>"  
    var carHTML = "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    var cartHTML = 
}

// c. Declare a variable named itemcost equal to the price value multiplied by the quantity value for the current item.