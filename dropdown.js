let featuresButton=document.getElementById("featuresButton");
let featuresContainer=document.querySelector("#features");
let featuresArrow=document.getElementById("arrowDownFeatures");

let companyButton=document.getElementById("companyButton");
let companyContainer=document.querySelector("#company");
let companyArrow=document.getElementById("arrowDownCompany");

let mobileMenuContainer=document.getElementById("mobileMenuContainer");
let mobileMenuButton=document.querySelector(".menuIconContainer");

let closeMenuButton=document.querySelector(".closeMenu");

let filter=document.getElementById("filter");


featuresButton.addEventListener("click", renderFeatures);
companyButton.addEventListener("click", renderCompany);

document.addEventListener("click",inactiveFeaturesMenu);
document.addEventListener("click",inactiveCompanyMenu);

mobileMenuButton.addEventListener("click", renderMobileMenu);
closeMenuButton.addEventListener("click", renderMobileMenu);


function renderFeatures() {
    
    featuresContainer.classList.toggle("featuresContainer")
    featuresContainer.innerText=""

    todoList=document.createElement("div");
    todoListIcon=document.createElement("span");
    todoListIcon.setAttribute("id","todoListIcon");
    todoListText=document.createElement("div")
    todoListText.innerText="Todo List"
    todoList.appendChild(todoListIcon);
    todoList.appendChild(todoListText);

    calendar=document.createElement("div");
    calendarIcon=document.createElement("span");
    calendarIcon.setAttribute("id","calendarIcon");
    calendarText=document.createElement("div")
    calendarText.innerText="Calendar"
    calendar.appendChild(calendarIcon);
    calendar.appendChild(calendarText);

    reminders=document.createElement("div");
    remindersIcon=document.createElement("span");
    remindersIcon.setAttribute("id","remindersIcon");
    remindersText=document.createElement("div");
    remindersText.innerText="Reminders";
    reminders.appendChild(remindersIcon);
    reminders.appendChild(remindersText);

    planning=document.createElement("div");
    planningIcon=document.createElement("span");
    planningIcon.setAttribute("id","planningIcon");
    planningText=document.createElement("div");
    planningText.innerText="Planning";
    planning.appendChild(planningIcon);
    planning.appendChild(planningText);

    featuresContainer.appendChild(todoList);
    featuresContainer.appendChild(calendar);
    featuresContainer.appendChild(reminders);
    featuresContainer.appendChild(planning);

    featuresArrow.classList.toggle("arrowUp")

}


function renderCompany() {
    
    companyContainer.classList.toggle("companyContainer");
    companyContainer.innerText="";

    historia=document.createElement("div");
    historiaText=document.createElement("div");
    historia.appendChild(historiaText);
    historiaText.innerText="History";

    ourTeam=document.createElement("div");
    ourTeamText=document.createElement("div");
    ourTeam.appendChild(ourTeamText);
    ourTeamText.innerText="Our Team";

    blog=document.createElement("div");
    blogText=document.createElement("div");
    blog.appendChild(blogText);
    blogText.innerText="Blog";

    companyContainer.appendChild(historia);
    companyContainer.appendChild(ourTeam);
    companyContainer.appendChild(blog);

    companyArrow.classList.toggle("arrowUp")

}



function inactiveFeaturesMenu(evento) {
    if (evento.target!=featuresButton & evento.target!=featuresArrow) {
        featuresContainer.classList.remove("featuresContainer");
        featuresArrow.classList.remove("arrowUp");
    }
}

function inactiveCompanyMenu(evento2) {
    if (evento2.target!=companyButton & evento2.target!=companyArrow) {
        companyContainer.classList.remove("companyContainer");
        companyArrow.classList.remove("arrowUp");
    }
}


function renderMobileMenu() {
    mobileMenuContainer.classList.toggle("mobileMenu");
    filter.classList.toggle("filterContainer");
}