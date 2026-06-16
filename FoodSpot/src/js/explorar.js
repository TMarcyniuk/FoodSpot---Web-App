import { loadGoogleMaps } from "./loadGoogleMaps.js";

import {
    initGoogleMap,
    buscarDireccion
}
from "./googleMaps.js";

const input = document.getElementById("searchInput");

function realizarBusqueda() {

    const texto = input.value.trim();

    if (texto === "") return;

    localStorage.setItem("searchQuery", texto);

    buscarDireccion(texto);

}

const busqueda = localStorage.getItem("searchQuery");

if(busqueda){

    input.value = busqueda;

}

async function iniciar(){

    await loadGoogleMaps();

    initGoogleMap();

    if(busqueda){

        buscarDireccion(busqueda);

    }

}

iniciar();

input.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        realizarBusqueda();

    }

});