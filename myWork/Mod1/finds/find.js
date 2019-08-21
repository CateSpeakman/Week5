"use strict"
//Description:This script will search an array for a matching course id using the ES6 find method.
//Author: Cate Speakman

let data = [
    {
        "CourseId": "19SUM100",
        "Title": "Introduction to HTML/CSS/Git",
        "Location": "Classroom 7",
        "StartDate": "07/08/19",
        "Fee": "100.00"
    },
    {
        "CourseId": "19SUM200",
        "Title": "Introduction to JavaScript",
        "Location": "Classroom 7",
        "StartDate": "07/22/19",
        "Fee": "350.00"
    },
    {
        "CourseId": "19SUM300",
        "Title": "Introduction to Node.JS and Express",
        "Location": "Classroom 7",
        "StartDate": "09/09/19",
        "Fee": "50.00"
    },
    {
        "CourseId": "19SUM400",
        "Title": "Introduction to SQL and Databases",
        "Location": "Classroom 7",
        "StartDate": "09/16/19",
        "Fee": "50.00"
    },
    {
        "CourseId": "19SUM500",
        "Title": "Introduction to Angular",
        "Location": "Classroom 7",
        "StartDate": "09/23/19",
        "Fee": "50.00"
    }
];

function findCourseID(value, index, array) {
    if (value.CourseId == "19SUM200")
     {
      
        return true;
    }
    else {
        return false;
    }
}

let match = data.find(findCourseID);
console.log(match);
console.log(match.Title);

match = data.find(c => c.CourseId=="19SUM200");
console.log(match);
console.log(match.Title);