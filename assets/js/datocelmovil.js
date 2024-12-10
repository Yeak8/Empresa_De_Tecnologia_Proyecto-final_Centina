jQuery(document).ready(function () {
    // Asegurarse de que el modal esté oculto al cargar la página
    jQuery('#contactModal').hide();

    // Mostrar el modal cuando se hace clic en el botón "Get A Quote"
    jQuery('#getAQuoteButton').click(function (event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado
        if (window.innerWidth <= 991) { // Verificar si estamos en móvil
            jQuery('#contactModal').fadeIn(); // Mostrar el modal
        }
    });

    // Cerrar el modal cuando se hace clic en el botón "X"
    jQuery('.close').click(function () {
        jQuery('#contactModal').fadeOut(); // Ocultar el modal
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    jQuery(window).click(function (event) {
        if (event.target.id === 'contactModal') {
            jQuery('#contactModal').fadeOut(); // Ocultar el modal
        }
    });
});
