"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Angelina Stilphen
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/

// Called a varible named orderTotal and set the initial value to 0 to calculate a running total of the cost of the order.
var orderTotal = 0;

// Called in the variable named cartHTML that has an initial value set to the text string below. 
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

// Created a for loop that loops through the entries in the item array to track the number of times a block of commands is run.
for (var i = 0; i < item.length; i++) { 

    // Created a variable named cartHTML, then used the += operator and added a string of 
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' /></td>"
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    itemCost = itemPrice[i] * itemQty[i];
    carttHTML +=  "<td>$" + itemCost + "</td>" + "</tr>";
    orderTotal = orderTotal + itemCost;
}
cartHTML += "<tr>" + "<td colspan='4'>Subtotal</td>" + "<td>$" + orderTotal + "</td>" + "</tr>" + "</table>";
document.getElementById("cart").innerHTML = cartHTML;