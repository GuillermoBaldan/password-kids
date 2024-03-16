// Esperar 3 segundos (3000 milisegundos) antes de redirigir
setTimeout(function() {
    // Redirigir a la página "bienvenido.html"
    window.location.href = "bienvenido.html";
    // Obtener el valor de la cookie "denegado"
let denegadoCookie = getCookie("denegado");

// Verificar el valor de la cookie y redirigir según corresponda
if (denegadoCookie === "denegado") {
    // Si la cookie "denegado" tiene el valor "denegado", redirigir a la página "denegado.html"
    window.location.href = "denegado.html";
} else if (denegadoCookie === "autorizado") {
    // Si la cookie "denegado" tiene el valor "autorizado", redirigir a la página "bienvenido.html"
    window.location.href = "bienvenido.html";
}



}, 3000);

// Función para leer el valor de una cookie por su nombre
function getCookie(name) {
    let nameEQ = name + "=";
    let cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

