document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    // Add dynamic behavior here if needed
});
function sendEmail(event) {
    event.preventDefault(); // Stop the form from submitting the normal way

    const name = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(`From: ${name} <${userEmail}>\n\n${message}`);

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
}