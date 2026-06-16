import { loadGoogleMaps } from "./loadGoogleMaps.js";

import {
    initGoogleMap,
    buscarDireccion
} from "./googleMaps.js";

const input = document.getElementById("searchInput");

function realizarBusqueda() {

    const texto = input.value.trim();

    if (texto === "") return;

    // Guardamos la búsqueda para reutilizarla
    localStorage.setItem("searchQuery", texto);

    // Centramos el mapa
    buscarDireccion(texto);

}

const busqueda = localStorage.getItem("searchQuery");

// Si venimos desde Inicio, mostramos la búsqueda
if (busqueda) {

    input.value = busqueda;

}

async function iniciar() {

    await loadGoogleMaps();

    initGoogleMap();

    // Si había una búsqueda previa, la mostramos
    if (busqueda) {

        buscarDireccion(busqueda);

    }

}

iniciar();

// Buscar presionando Enter
input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        realizarBusqueda();

    }

});