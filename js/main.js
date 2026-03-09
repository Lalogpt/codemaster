document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#main-header');
    const contactForm = document.querySelector('#contact-form');

    // 1. Efecto de Scroll para el Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Validación y Envío de Formulario
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const cliente = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            mensaje: formData.get('mensaje')
        };

        // Validación de Seguridad
        if (cliente.nombre.length < 3) {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (!cliente.email.includes('@')) {
            alert("El correo electrónico no es válido.");
            return;
        }

        console.log("Consulta de CodeMaster recibida:", cliente);
        alert(`¡Gracias ${cliente.nombre}! Tu mensaje ha sido enviado.`);
        contactForm.reset();
    });
});