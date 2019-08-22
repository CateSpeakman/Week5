"use strict"
//Description: this script will sort an array filled with candy by price.  It will then extract the cheapest
//3 candies and display them.
//Author: Cate Speakman

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



// function comparePrices(candy1, candy2) {


//         if (candy1.price > candy2.price) {
//             return 1;
//         }
//         return -1;
//     }//ends compare function


let result = candy.sort((candy1, candy2) => {
    if (candy1.price > candy2.price) {
        return 1;
    }
    return -1;
});

let [x, y, z] = result;

console.log(x);
console.log(y);
console.log(z);
