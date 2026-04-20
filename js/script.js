const form = document.querySelector("#contact form");
const status = document.getElementById("form-status");

const button = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const loader = document.getElementById("btn-loader");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // 🔄 Activar loading
    button.disabled = true;
    btnText.innerText = "Sending...";
    loader.classList.remove("hidden");

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
            status.classList.add("show");
            form.reset();
        } else {
            status.innerText = "Oops... something went wrong 💀";
            status.classList.add("show");
        }
    } catch (error) {
        status.innerText = "Network error 💀";
        status.classList.add("show");
    }

    // 🔁 Restaurar botón
    button.disabled = false;
    btnText.innerText = "Send";
    loader.classList.add("show");   // mostrar
    loader.classList.remove("show"); // ocultar
});