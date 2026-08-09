document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnMensaje');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', () => {
        if (mensaje.classList.contains('oculto')) {
            mensaje.classList.remove('oculto');
            boton.textContent = 'Ocultar mensaje';
        } else {
            mensaje.classList.add('oculto');
            boton.textContent = 'Haz clic aquí';
        }
    });
});
