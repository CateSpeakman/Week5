"use strict"

//Description: this script will will contain a for in loop which will loop through anarray of objects
//that contains employees and will print out the properties of each 
//Author: Cate Speakman

let company = [
    { name: "Dana", salary: "62000" },
    { name: "Brenda", hourlyRate: 16.75, hoursWorked: 40 },
    { name: "Jonathan", hourlyRate: 17, hoursWorked: 35 },
    { name: "Adam", salary: "12000" },
    { name: "Cate", hourlyRate: 10, hoursWorked: 10 }
]

console.log("Employee Name: ");

let employee;
let weeklyPay;
let netPay;

for (let i = 0; i < company.length; i++) {
    employee = company[i];
    for (let key in employee) {
        console.log(`${key}: ${employee[key]}`);
        if (employee.salary) {
            weeklyPay = (employee.salary / 52).toFixed(2);
        }
        else {
            weeklyPay = employee.hourlyRate * employee.hoursWorked;
        }
        netPay = weeklyPay - (weeklyPay * .125) - (weeklyPay * .062) - (weeklyPay * .0145);
        console.log("WeeklyPay: $" + weeklyPay);
        console.log("Net Pay: $" + netPay);
    }//ends for in loop


}//ends for loop 