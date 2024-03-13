// SELECCIONAR ELEMENTOS

// let contenidoTitulo = "Carlos";

// let titulo = document.querySelector(".menu .inicio");
// console.log(titulo);

// titulo.innerHTML = contenidoTitulo;

// // CONDICIONALES

// let TextoTitulo = titulo.innerText;
// console.log(TextoTitulo);

// if (TextoTitulo == "Nombre") {
//     titulo.innerHTML = "Otro";
// } else {
//     console.log("No se cumple");
// }

// FUNCIONES

// let nombre = "Carlos";
// let ciudad = "Mendoza";
// let gusto = "Cantar";

// let parrafo = document.querySelector(".parrafo2");

// function cambiarTexto (nombre, ciudad,gusto) {
//     let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta ${gusto} y salir a pasear en las noches. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

//     return contenido;
// }

// parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if (nombre.value.length < 4) {
        warnings += `El nombre debe contener más de 4 caracteres`;
        valido = false;
    }

    if (!valido) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado";
    }

    return valido;
}

form.addEventListener("submit",(e) => {
    if (validarFormulario()) {
        validarFormulario.submit(); // Si la validación es exitosa, puedes enviar el formulario
    }else {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
});