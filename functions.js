function init(){
    // :D
    console.log("Hi. Please hire me xD:")

    // To initialize Gumshoe (scrollspy)
    var spy = new Gumshoe('#my-awesome-nav a', {
        offset: 200
    });

    // To close the gap at the very beginning of page
    var element = document.querySelector("#S1");
    // smooth scroll to element and align it at the center
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});

    // To scroll the page when navbar buttons are clicked
    const NavLinks = document.getElementsByClassName("nav-item");
    for(let i = 0; i<NavLinks.length; i++){
        NavLinks[i].addEventListener("click", () => {
            for(let j = 0; j<NavLinks.length; j++){
                NavLinks[j].classList.remove("active");
            }
            NavLinks[i].classList.add("active");
        });
    }
}
init();
