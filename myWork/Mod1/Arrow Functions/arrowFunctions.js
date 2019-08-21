"use strict"
//Description: this script will use the filter method with an arrow function to display every item less
//than $5.00
//Author:Cate Speakman

let candy = [
    {
        product: "Gummy Worms", 
        price: 5.79
    },
    {
        product: "Plain M&Ms", 
        price: 2.89
    },
    {
        product: "Twizzlers", 
        price: 3.49
    },
    {
        product: "Twix", 
        price: 5.19
    },
    {
        product: "Kit Kat", 
        price: 5.59
    },
    {
        product: "Jolly Ranchers", 
        price: 4.79
    },
    {
        product: "Taffy", 
        price: 6.79
    },
    {
        product: "Starburst", 
        price: 2.99
    },
    {
        product: "Snickers", 
        price: 4.19
    },
    {
        product: "Dum Dum", 
        price: 1.99
    }
];

let someCandy = candy.find( c=> c.product =="Mars")
if (c==null)
{
    console.log ("We don't carry Mars");
}
else{
    console.log("Price:" + c.price);
}