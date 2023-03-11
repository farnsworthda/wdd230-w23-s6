/*This is the date info*/
//Initialize display elements.
let dayIs = document.querySelector(".day");
let dateIs = document.querySelector(".date");
let timeIs = document.querySelector(".time");


//Get day.
const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
}

const weekday = ["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, "];
const d = new Date();
let todayDay= weekday[d.getDay()];

//Get date.
let todayDate = new Date().toLocaleDateString("en-UK", options);

//Get time.
let todayTime = "";
if (d.getMinutes() < 10) {
    todayTime = d.getHours() + ":0" + d.getMinutes();
} else {
    todayTime = d.getHours() + ":" + d.getMinutes();
}

let dateAndTime = todayDate + " " + todayTime;


//Show values.
dayIs.textContent = todayDay;

dateIs.textContent = todayDate;

timeIs.textContent = todayTime;


/*This is the hamburger button info*/
function toggleMenu(x) {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("container").classList.toggle("open");

    x.classList.toggle("change");
}


/*This is the copyright line */
const copyrightYear = document.querySelector("#copyright");
copyrightYear.textContent = `© ${new Date().getFullYear()} .:|:. Margo Aston .:|:. California`;

/*This is the update line*/
var lastUpdated = `Last modified: ${document.lastModified}`;
document.getElementById("update-date").innerText=lastUpdated;

 /*Add a banner to the page on Mondays and Tuesdays*/
if (d.getDay() == 1 || d.getDay() == 2) {

    const container = document.querySelector('header'); /*select the element that will contain the new element*/
    const banner = document.createElement('div'); /*create the new element to be added*/
    banner.innerText = "🤝 Come join us for the chamber meet and greet, Wed, 7:00pm."; /*create the content and put it in the new element*/
    container.appendChild(banner); /*add the new element to the document*/

    /*change the style of the new element*/
    banner.style.color = '#f7f7f7'; 
    banner.style.backgroundColor = '#3a508e';
    banner.style.gridColumn = '1 / span 4';
    banner.style.gridRow = '1 / span 1';
    banner.style.textAlign = 'center';

}


