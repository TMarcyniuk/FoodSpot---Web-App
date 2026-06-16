function buscar() {

    const texto = document
        .getElementById("homeSearch")
        .value
        .trim();

    if (texto === "") {
        alert("Ingrese una búsqueda.");
        return;
    }

    localStorage.setItem("searchQuery", texto);

    window.location.href = "explorar.html";
}

document
    .getElementById("btnBuscar")
    .addEventListener("click", buscar);

document
    .getElementById("homeSearch")
    .addEventListener("keydown", (e) => {

        if (e.key === "Enter") {
            buscar();
        }

});