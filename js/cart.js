// Catálogo de planes y servicios que se pueden agregar a la consulta
const CATALOG = {
    'plan-principiante': { nameKey: 'catalog.plan_principiante', typeKey: 'catalog.type_plan', icon: '🌱' },
    'plan-intermedio': { nameKey: 'catalog.plan_intermedio', typeKey: 'catalog.type_plan', icon: '💪' },
    'plan-avanzado': { nameKey: 'catalog.plan_avanzado', typeKey: 'catalog.type_plan', icon: '⭐' },
    'servicio-pilates': { nameKey: 'catalog.servicio_pilates', typeKey: 'catalog.type_servicio', icon: '🧘‍♀️' },
    'servicio-nutricion': { nameKey: 'catalog.servicio_nutricion', typeKey: 'catalog.type_servicio', icon: '🥗' },
    'plan-combinado': { nameKey: 'catalog.plan_combinado', typeKey: 'catalog.type_servicio', icon: '✨' },
    'clase-prueba': { nameKey: 'catalog.clase_prueba', typeKey: 'catalog.type_consulta', icon: '🎁' },
};

const WHATSAPP_NUMBER = '393891131525';
const STORAGE_KEY = 'ara-trainer-consulta';

const cartFab = document.getElementById('cart-fab');
const cartCount = document.getElementById('cart-count');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const cartCloseBtn = document.getElementById('cart-close');
const cartItemsEl = document.getElementById('cart-items');
const cartEmptyEl = document.getElementById('cart-empty');
const cartNote = document.getElementById('cart-note');
const cartPresencial = document.getElementById('cart-presencial');
const cartWhatsappBtn = document.getElementById('cart-whatsapp');
const cartPdfBtn = document.getElementById('cart-pdf');

function loadCart() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveCart(items) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
        // localStorage no disponible (modo privado, etc.) - la consulta no persiste al recargar
    }
}

let cartItems = loadCart();

function isInCart(id) {
    return cartItems.includes(id);
}

function toggleItem(id) {
    cartItems = isInCart(id)
        ? cartItems.filter(i => i !== id)
        : [...cartItems, id];
    saveCart(cartItems);
    renderAll();
}

function removeItem(id) {
    cartItems = cartItems.filter(i => i !== id);
    saveCart(cartItems);
    renderAll();
}

function renderButtons() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        const id = btn.dataset.itemId;
        if (isInCart(id)) {
            btn.textContent = t('cart.added_button');
            btn.classList.add('btn-added');
        } else {
            btn.textContent = t('cart.add_button');
            btn.classList.remove('btn-added');
        }
    });
}

function renderCartList() {
    cartItemsEl.innerHTML = '';

    if (cartItems.length === 0) {
        cartEmptyEl.style.display = 'block';
        cartItemsEl.style.display = 'none';
        return;
    }

    cartEmptyEl.style.display = 'none';
    cartItemsEl.style.display = 'block';

    cartItems.forEach(id => {
        const item = CATALOG[id];
        if (!item) return;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <span class="cart-item-icon">${item.icon}</span>
            <div class="cart-item-info">
                <span class="cart-item-name">${t(item.nameKey)}</span>
                <span class="cart-item-type">${t(item.typeKey)}</span>
            </div>
            <button class="cart-item-remove" data-remove-id="${id}" aria-label="Quitar">&times;</button>
        `;
        cartItemsEl.appendChild(row);
    });

    cartItemsEl.querySelectorAll('[data-remove-id]').forEach(btn => {
        btn.addEventListener('click', () => removeItem(btn.dataset.removeId));
    });
}

function renderBadge() {
    cartCount.textContent = cartItems.length;
    cartCount.style.display = cartItems.length > 0 ? 'flex' : 'none';
}

function renderAll() {
    renderButtons();
    renderCartList();
    renderBadge();
}

window.refreshCartUI = renderAll;

function openDrawer() {
    cartOverlay.classList.add('active');
    cartDrawer.classList.add('active');
}

function closeDrawer() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
}

function buildSummaryLines() {
    return cartItems
        .map(id => CATALOG[id])
        .filter(Boolean)
        .map(item => `• ${item.icon} ${t(item.nameKey)} (${t(item.typeKey)})`);
}

function sendWhatsapp() {
    if (cartItems.length === 0) {
        alert(t('cart.alert_empty_whatsapp'));
        return;
    }

    let message = `${t('cart.whatsapp_greeting')}\n\n`;
    message += buildSummaryLines().join('\n');

    if (cartPresencial.checked) {
        message += `\n\n${t('cart.whatsapp_presencial_line')}`;
    }

    const note = cartNote.value.trim();
    if (note) {
        message += `\n\n${t('cart.whatsapp_comment_label')} ${note}`;
    }

    message += `\n\n${t('cart.whatsapp_closing')}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function downloadPdf() {
    if (cartItems.length === 0) {
        alert(t('cart.alert_empty_pdf'));
        return;
    }

    if (!window.jspdf) {
        alert(t('cart.alert_pdf_error'));
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const marginX = 20;
    let y = 25;

    doc.setFontSize(20);
    doc.setTextColor(22, 163, 74);
    doc.text('ARA TRAINER', marginX, y);
    y += 8;

    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(t('cart.pdf_subtitle'), marginX, y);
    y += 12;

    doc.setDrawColor(22, 163, 74);
    doc.line(marginX, y, 190, y);
    y += 10;

    doc.setFontSize(13);
    doc.setTextColor(31, 41, 55);
    doc.text(t('cart.pdf_interest_label'), marginX, y);
    y += 8;

    doc.setFontSize(11);
    cartItems.forEach(id => {
        const item = CATALOG[id];
        if (!item) return;
        doc.text(`• ${t(item.nameKey)} (${t(item.typeKey)})`, marginX + 4, y);
        y += 7;
    });

    if (cartPresencial.checked) {
        doc.text(t('cart.pdf_presencial_label'), marginX + 4, y);
        y += 7;
    }

    const note = cartNote.value.trim();
    if (note) {
        y += 5;
        doc.setFontSize(13);
        doc.setTextColor(31, 41, 55);
        doc.text(t('cart.pdf_comment_label'), marginX, y);
        y += 8;

        doc.setFontSize(11);
        const noteLines = doc.splitTextToSize(note, 165);
        doc.text(noteLines, marginX + 4, y);
        y += noteLines.length * 7;
    }

    y += 10;
    doc.setDrawColor(229, 231, 235);
    doc.line(marginX, y, 190, y);
    y += 10;

    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128);
    const today = new Date().toLocaleDateString(getLang() === 'it' ? 'it-IT' : 'es-AR');
    doc.text(`${t('cart.pdf_generated_on')} ${today}`, marginX, y);
    y += 6;
    doc.text('Contacto/Contatto: +39 389 1131525  |  aranircamarl@gmail.com', marginX, y);

    doc.save('ara-trainer-resumen.pdf');
}

document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => toggleItem(btn.dataset.itemId));
});

cartFab.addEventListener('click', openDrawer);
cartCloseBtn.addEventListener('click', closeDrawer);
cartOverlay.addEventListener('click', closeDrawer);
cartWhatsappBtn.addEventListener('click', sendWhatsapp);
cartPdfBtn.addEventListener('click', downloadPdf);

const openCartFinalBtn = document.getElementById('open-cart-final');
if (openCartFinalBtn) {
    openCartFinalBtn.addEventListener('click', openDrawer);
}

renderAll();
