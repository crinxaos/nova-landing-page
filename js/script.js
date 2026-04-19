const form = document.querySelector("#contact form");
const status = document.getElementById("form-status");
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // 🔄 Activar loading
    button.disabled = true;
    button.innerText = "Sending...";

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerText = "Message sent successfully 🤘";
            status.style.display = "block";
            form.reset();
        } else {
            status.innerText = "Oops... something went wrong 💀";
            status.style.display = "block";
        }
    } catch (error) {
        status.innerText = "Network error 💀";
        status.style.display = "block";
    }

    // 🔁 Restaurar botón
    button.disabled = false;
    button.innerText = "Send";
});