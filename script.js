<<<<<<< HEAD
// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// ================= FORM VALIDATION =================

const serviceForm = document.getElementById("serviceForm");
const formMessage = document.getElementById("formMessage");

serviceForm.addEventListener("submit", function (event) {

    const mobile =
        document.getElementById("mobile").value.trim();

    // Check 10 digit mobile number

    if (!/^[0-9]{10}$/.test(mobile)) {

        event.preventDefault();

        formMessage.textContent =
            "Please enter a valid 10 digit mobile number.";

        formMessage.style.color = "red";

        return;
    }

    formMessage.textContent =
        "Submitting your service request...";

    formMessage.style.color = "#1479e8";

=======
// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// ================= FORM VALIDATION =================

const serviceForm = document.getElementById("serviceForm");
const formMessage = document.getElementById("formMessage");

serviceForm.addEventListener("submit", function (event) {

    const mobile =
        document.getElementById("mobile").value.trim();

    // Check 10 digit mobile number

    if (!/^[0-9]{10}$/.test(mobile)) {

        event.preventDefault();

        formMessage.textContent =
            "Please enter a valid 10 digit mobile number.";

        formMessage.style.color = "red";

        return;
    }

    formMessage.textContent =
        "Submitting your service request...";

    formMessage.style.color = "#1479e8";

>>>>>>> c3189ed913d9740048b780991a226b6c9c68e831
});