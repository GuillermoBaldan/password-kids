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
        // Si la contraseña es válida, redirigir a la página bienvenido.html
        window.location.href = "bienvenido.html";
    } else {
        // Si la contraseña no es válida, mostrar un mensaje de error (puedes modificar esto según tus necesidades)
        alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }
});
