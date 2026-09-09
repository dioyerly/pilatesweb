// Desplegables genéricos: se usan en Servicios, Planes y Preguntas Frecuentes
document.querySelectorAll('.accordion-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const item = btn.closest('.accordion-item');
        const isOpen = item.classList.contains('open');
        item.classList.toggle('open', !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
    });
});
