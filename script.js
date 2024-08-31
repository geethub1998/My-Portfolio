(function()
{window.open('https://yourwebsite.com', '_blank');})();


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
const scriptUrl = 'https://script.google.com/macros/s/AKfycbz_CPmFjHgeBullS-FIynqn1S1-PTXUKdyyjwjv_neBjOFfAh9QF9_Y8laAg4_eXObM/exec'
const form =  document.forms['submit-to-google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptUrl, { method: 'POST',body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
