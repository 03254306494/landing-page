document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;

        if (name && email && message) {
            alert("Thank you, " + name + "! Your message has been sent successfully.");
            form.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});
