const navbar = document.querySelector(".navbar");
const products = document.querySelectorAll(".new-product1, .new-product2, .new-product3, .new-product4");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight * 0.5) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function revealProducts(){
    const trigger = window.innerHeight * 0.85;
    products.forEach(product => {
        const top = product.getBoundingClientRect().top;
        if(top < trigger){
            product.classList.add("show");
        } else {
            product.classList.remove("show");
        }
    });
}
window.addEventListener("scroll", revealProducts);

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
})
