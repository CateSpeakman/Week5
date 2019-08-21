"use strict";
//Description: This script will dynamically populate a table on a page upon the page loading.
//Author: Cate Speakman



$(function(){

let data = [
    {sport: "Football", bestTeam: "Dallas Cowboys"},
    {sport: "Baseball", bestTeam: "Texas Rangers"},
    {sport: "Basketball", bestTeam: "Dallas Mavericks"},
    {sport: "Hockey", bestTeam: "Dallas Stars"},
    {sport: "Soccer", bestTeam: "FCDallas"},
]





for (let i=0; i< data.length; i++)
{
    let sport = data[i].sport;
    let team = data[i].bestTeam;

    let htmlString =`
    <tr>
    <td>${sport}</td>
    <td>${team}</td>
    </tr>
    `;

    $(htmlString).appendTo($("#teams"));

}//ends for loop
});//ends load function