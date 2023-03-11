//Initialize display elements.
const todayDisplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");
const elapsedDaysDisplay = document.querySelector(".elapsed-days");

//Get the stored value in localStorage.
let numVisits = Number(window.localStorage.getItem("visits-ls"));

let lastVisit = Number(window.localStorage.getItem("lastvisit-ls"));




//let lastVisit = 1638467069590;
let today1 = Date.now();
let elapsed = today1 - lastVisit;

let days = Math.round((elapsed)/ 86400000);




//determine if this is the first visit or display the number of visits.
if(numVisits != 0) {
    visitDisplay.textContent = numVisits;
    elapsedDaysDisplay.textContent = days;
    
} else {
    visitDisplay.textContent = "This is your first visit";
}

//Increment number of visits.
numVisits ++;

//Store the new number of visits value.
localStorage.setItem("visits-ls", numVisits);

//Store today's date.
localStorage.setItem("lastvisit-ls", Date.now());

//Show today's date.
todayDisplay.textContent=(Date.now());