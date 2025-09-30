
// Updates the DD MM YY
let years = document.getElementById("yy").innerHTML;
let months = document.getElementById("mm").innerHTML;
let days = document.getElementById("dd").innerHTML;

// Get Year data from year input box
function getageyear(get){
    get.preventDefault(); 
    let age = document.getElementById("year").value;
    let currentyear = 2025;  // Adding base year
    let realage = currentyear - age; // Find real age 
    document.getElementById("yy").innerHTML = realage;
}

// Get month data from input box
function getagemonth(get){
    get.preventDefault(); //prevent whole page refresh
    let age = document.getElementById("month").value;
    let currentmonth = 12;  // Adding base month
    let realmonth = currentmonth - age; // Find real month 
    document.getElementById("mm").innerHTML = realmonth;
}

// Get date data from input box
function getagedate(get){
    get.preventDefault(); 
    let age = document.getElementById("day").value;
    let currentdate = 31;  // Adding base date
    let realday = currentdate - age; // Find real day 
    document.getElementById("dd").innerHTML = realday;
}

// Attach each functions as a event listener to submit button
document.getElementById("agedata").addEventListener("submit",getageyear,getagemonth);
document.getElementById("agedata").addEventListener("submit",getagemonth);
document.getElementById("agedata").addEventListener("submit",getagedate);