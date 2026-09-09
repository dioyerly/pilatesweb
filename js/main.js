// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function () {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Visor interno de certificaciones
const certificateLinks = Array.from(document.querySelectorAll('#certificados a.cert-image-link, #certificados a.cert-document'));
const certificateViewer = document.createElement('div');
certificateViewer.className = 'certificate-viewer';
certificateViewer.setAttribute('hidden', '');
certificateViewer.innerHTML = `
    <div class="certificate-viewer-backdrop" data-cert-action="close"></div>
    <div class="certificate-viewer-panel" role="dialog" aria-modal="true" aria-label="Vista previa del certificado">
        <button class="certificate-viewer-close" type="button" data-cert-action="close" aria-label="Cerrar">&times;</button>
        <button class="certificate-viewer-prev" type="button" data-cert-action="prev" aria-label="Certificado anterior">&#8249;</button>
        <img class="certificate-viewer-image" src="" alt="">
        <button class="certificate-viewer-next" type="button" data-cert-action="next" aria-label="Siguiente certificado">&#8250;</button>
        <div class="certificate-viewer-caption"></div>
    </div>
`;
document.body.appendChild(certificateViewer);

let activeCertificate = 0;
let touchStartX = 0;

function showCertificate(index) {
    activeCertificate = (index + certificateLinks.length) % certificateLinks.length;
    const link = certificateLinks[activeCertificate];
    const image = link.querySelector('img');
    const card = link.closest('.cert-card');
    const title = card.querySelector('.cert-title');
    const entity = card.querySelector('.cert-entity');
    const viewerImage = certificateViewer.querySelector('.certificate-viewer-image');
    const caption = certificateViewer.querySelector('.certificate-viewer-caption');

    viewerImage.src = image.src;
    viewerImage.alt = image.alt;
    caption.innerHTML = `<strong>${title.textContent}</strong><span>${entity.textContent}</span>`;
}

function openCertificate(index) {
    showCertificate(index);
    certificateViewer.removeAttribute('hidden');
    document.body.classList.add('certificate-viewer-open');
}

function closeCertificate() {
    certificateViewer.setAttribute('hidden', '');
    document.body.classList.remove('certificate-viewer-open');
}

certificateLinks.forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault();
        openCertificate(index);
    });
});

certificateViewer.addEventListener('click', event => {
    const action = event.target.dataset.certAction;
    if (action === 'close') closeCertificate();
    if (action === 'prev') showCertificate(activeCertificate - 1);
    if (action === 'next') showCertificate(activeCertificate + 1);
});

certificateViewer.addEventListener('touchstart', event => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

certificateViewer.addEventListener('touchend', event => {
    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showCertificate(activeCertificate + (distance < 0 ? 1 : -1));
}, { passive: true });

document.addEventListener('keydown', event => {
    if (certificateViewer.hasAttribute('hidden')) return;
    if (event.key === 'Escape') closeCertificate();
    if (event.key === 'ArrowLeft') showCertificate(activeCertificate - 1);
    if (event.key === 'ArrowRight') showCertificate(activeCertificate + 1);
});
