function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
        // Here, you can implement form submission logic like sending to a server
        document.getElementById("contactForm").reset();
    }
}
