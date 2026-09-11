// Cerrar el menú colapsable de Bootstrap al hacer clic en un enlace en dispositivos móviles
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.btn)');
    const menuToggle = document.getElementById('navbarNav');
    
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    bsCollapse.hide();
                }
            });
        });
    }
});// Script base para el proyecto de Hamburguesas
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡El sitio de Hamburguesas ha sido cargado correctamente!');

    const btnBienvenida = document.getElementById('btn-bienvenida');
    if (btnBienvenida) {
        btnBienvenida.addEventListener('click', () => {
            alert('¡Pronto podrás explorar nuestro delicioso menú de hamburguesas premium!');
        });
    }
});