document.addEventListener('DOMContentLoaded', () => {
    // RSVP Form Submission
    const form = document.getElementById('rsvp-form');
    const msg = document.getElementById('rsvp-msg');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            msg.textContent = '¡Gracias por confirmar! Nos vemos en la boda 💜';
            form.reset();
        });
    }

    // Animación extra: destello en el título al hacer hover
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('mouseenter', () => {
            header.style.textShadow = '0 0 16px #e7bfa7, 0 0 8px #a786df';
        });
        header.addEventListener('mouseleave', () => {
            header.style.textShadow = '';
        });
    }
});
