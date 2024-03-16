document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

    // Obtener el valor del campo de contraseña
    var password = document.getElementById("passwordInput").value;

    // Lista de códigos válidos
    var codigosValidos = [
        "573892", "214765", "896431", "348927", "659812",
        "125478", "739246", "486901", "302184", "567321",
        "981234", "745896", "639587", "802346", "174935",
        "563210", "429681", "876543", "219874", "758392",
        "631209", "987654", "543278", "406281", "318764",
        "982345", "694827", "135790", "864210", "279346",
        "548967", "176592", "324875", "890123", "457321",
        "607832", "382946", "921678", "503216", "746129"
    ];

    // Comprobar si la contraseña ingresada está en la lista de códigos válidos
    if (codigosValidos.includes(password)) {
        // Redirigir a animation.html si la contraseña es válida
        document.cookie = "denegado=autorizado";
        window.location.href = "animation.html";
    } else {
        // Crear una cookie llamada "denegado" con valor "denegado"
        document.cookie = "denegado=denegado";
        // Redirigir a animation.html en cualquier caso
        window.location.href = "animation.html";
    }
});
