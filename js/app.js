//Main variable 
let navBar = document.querySelector("#list");
let mySection = document.querySelectorAll("section");
const scrolBoton = document.querySelector(".boton");



 // make list items equal to the number of sections 
mySection.forEach((section) =>{
    const navList = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu-link">${section.dataset.nav}</a></li>`
    navBar.insertAdjacentHTML("beforeend", navList);
});

// using Element.getBoundingClientRect() instead of Intersection Observer API //
window.onscroll = function() {
	mySection.forEach(function(section) {
	if(section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150){

    section.classList.add("your-active-class");
    }
    else{
            section.classList.remove("your-active-class");
    }
	});
}

//visibility of scroll up button
const botonVisibility = () => {
    if (window.scrollY > 400) {
        scrolBoton.style.visibility = "visible";
    } else {
        scrolBoton.style.visibility = "hidden";
    }
};
//show button when scroll
document.addEventListener("scroll", () => {
    botonVisibility();
});
//when click the button page will scroll up
scrolBoton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

