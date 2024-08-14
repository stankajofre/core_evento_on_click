// Función para manejar el clic en el botón de iniciar/cerrar sesión
document.getElementById('login-btn').addEventListener('click', function () {
    if (this.textContent === 'Iniciar sesión') {
        this.textContent = 'Cerrar sesión';
    } else {
        this.textContent = 'Iniciar sesión';
    }
});

// Función para manejar el clic en el botón de "Agregar Definición"
document.getElementById('add-definition-btn').addEventListener('click', function () {
    this.style.display = 'none';
});

// Función para manejar los clics en los botones "Me gusta"
document.querySelectorAll('.btn-like').forEach(function (button) {
    button.addEventListener('click', function () {
        // Incrementa el conteo de "me gusta"
        let likeCount = parseInt(this.textContent);
        this.textContent = (likeCount + 1) + ' me gusta';

        // Dispara una alerta con el título de la definición
        let definitionTitle = this.closest('.definition').querySelector('h3').textContent;
        alert('Te gustó la definición: ' + definitionTitle);
    });
});
