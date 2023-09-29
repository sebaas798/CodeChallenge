document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita el envío normal del formulario

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fecha = document.getElementById("fecha").value;

        const data = {
            nombre,
            apellido,
            fecha
        };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            console.log("Respuesta del servidor:", responseData);
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
