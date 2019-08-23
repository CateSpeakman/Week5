"use strict";

//Description: This script will dynamically generate a single page application that will interact with the
//user based on thier selections within the presented choices.
//Author: Cate Speakman

$(function () {

    //this function will call the JSON file and populate the table based on the call to 
    //restful API

    $("#viewCategoriesBtn").on("click", getCategories);
    $("#categoryDropdownBtn").hide();
    //$("#productCard").hide();

});//ends ready function

function getCategories() {

    //this function will populate the categories on the click of the view categories button and display 
    //the button for Select a category

    let objs;

    $("#viewCategoriesBtn").prop("disabled", true);
    $("#categoryDropdownBtn").show();

    $.getJSON("/api/categories", function (categories) {

        objs = categories;
        console.log(objs);


        for (let i = 0; i < objs.length; i++) {
            $("#categoryList").append($("<a />")      
                .attr("class", "dropdown-item")
                .text(objs[i].Category)
                .attr("href", "#")
                .on('click', function (e) {
                    //alert("I was clicked");
                    e.preventDefault();
                    $("#categoryName").text(objs[i].Category);
                    getProductList(objs[i].Value);
                }))//ends onclick

        }//ends for loop within getCategories

    });//ends getJSON function within getCategories
}//ends getCategories function


function getProductList(category) //feel like category.Value isnt going to come in
{
    $("#productsList").empty();
    $("productCardContainer").hide();//this will make sure the product cards are not visible until a product is selected
    $("productCard").hide();

    let objs;

    $.getJSON(`/api/products/bycategory/${category}`, function (products) {
        objs = products;
        for(let i=0; i<objs.length; i++){
            $("#productsList").append($("<li />")
                .text(objs[i].ProductName)
                .attr("class", "list-group-item list-group-item-action")
                .on("click", (e) => {
                    e.preventDefault();
                    $("#productsContainer").show();
                    getProduct(objs[i].ProductID);
                }))//ends arrow function
        }//ends for loop
         //this will make the section for the products display visible
 
    })//ends getJSON function within getProductList

}//ends getProducts function

function getProduct(product)//feel like product.ProductID isnt coing to come in
{
    //this will show the card for the product that was selected from the list


    $.getJSON("/api/products/" + product, function (product) {
    

        $("#cardTitle").html("Product ID: " + product.ProductID);
        $("#cardText1").html(product.ProductName);
        $("#cardText2").html("$" + Number(product.UnitPrice).toFixed(2));
        $("#productCard").show();
    })//ends getJSON function within getProduct

}//ends getProduct function