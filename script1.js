const searchIcon = document.querySelector(".search-icon");
const searchIcon = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");



searchIcon.addEventListener("click", () => {
   searchForm.classList.add("active");
   cartItemsContainer.classList.remove("active");
   navbar.classList.remove("active");
});

menuIcon.addEventListener("click", () => {
   navbar.classList.add("active");
   searchForm.classList.remove("active");
   cartItemsContainer.classList.remove("active");
});


const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
   cartItemsContainer.classList.add("active");
   searchForm.classList.remove("active");
   navbar.classList.remove("active");

});
// JavaScript for scroll effect
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = #555;
  } else {
    document.getElementById("navbar").style.backgroundColor = #333;
  }
}

// JavaScript for hover effect
var navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(function(navLink) {
  navLink.addEventListener('mouseover', function() {
    this.style.color = red; // Change to your desired hover color
  });

  navLink.addEventListener('mouseout', function() {
    this.style.color = white; // Change to your default color
  });
});
