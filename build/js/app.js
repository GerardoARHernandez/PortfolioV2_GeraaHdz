document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    if (document.querySelector('#titulo')) {
        cambiarTexto();
    }
    mostrarOcultarMenu();
    seleccionar();
    scrollNav();
}

let textoIndex = 0; // Declarar e inicializar textoIndex fuera de la función cambiarTexto
function cambiarTexto(){
    setInterval(textos, 800);
}

function textos() {
    const textos = ['Desarrollador Web', 'Programador', 'Ingeniero en Comunicaciones y Electrónica'];
    const elemento = document.querySelector('#titulo');

    if (!elemento) {
        console.error('El elemento con ID "titulo" no existe en el DOM');
        return; // Salimos de la función si no se encuentra el elemento
    }

    elemento.style.opacity = 0;

    setTimeout(function() {
        elemento.innerHTML = textos[textoIndex];
        elemento.style.opacity = 1;
        textoIndex = (textoIndex + 1) % textos.length;
    }, 800);
}

// let menuVisible = false;
//Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.querySelector("#nav");
    
    if(nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    } else {
        nav.classList.add("responsive");
    }
}

function seleccionar() {
    const enlaces = document.querySelectorAll('#nav a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            document.querySelector("#nav").classList.remove("responsive");
        });
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.responsive a');
    const subir = document.querySelector('#arriba');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.getAttribute('href'));
            seccion.scrollIntoView({ behavior: "smooth" });
        });
    });

    if (subir) {
        subir.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
}
