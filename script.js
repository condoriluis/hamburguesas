// Script base para el proyecto de Hamburguesas
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡El sitio de Hamburguesas ha sido cargado correctamente!');

    const btnBienvenida = document.getElementById('btn-bienvenida');
    if (btnBienvenida) {
        btnBienvenida.addEventListener('click', () => {
            alert('¡Pronto podrás explorar nuestro delicioso menú de hamburguesas premium!');
        });
    }
});