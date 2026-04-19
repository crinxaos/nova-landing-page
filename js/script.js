document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "Message sent successfully (demo mode)";
});