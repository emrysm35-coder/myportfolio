
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close the menu after clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

