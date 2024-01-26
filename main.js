/* Interacción de la ventana emergente */

const botonCine = document.querySelector(".btn-header3")
console.log(botonCine)

const ventanaEmergente = document.querySelector(".componente-seleccion")
console.log(ventanaEmergente)


botonCine.addEventListener("click", apareceDesapareceVentana)

function apareceDesapareceVentana() {
    ventanaEmergente.classList.toggle("inactive")
}





/*
function apareceDesapareceVentana() {
    ventanaEmergente.classList.toggle("inactive") 
}

*/