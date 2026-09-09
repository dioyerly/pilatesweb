// Firebase functions (optional for now)
let generateConsultationId = () => 'CONS-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
let saveConsultation = async () => { /* Firebase akan cargar después */ };

// Cargar Firebase cuando esté listo
(async () => {
    try {
        const firebase = await import('./firebase-config.js');
        generateConsultationId = firebase.generateConsultationId;
        saveConsultation = firebase.saveConsultation;
    } catch (e) {
        console.log('Firebase no disponible, el carrito funcionará offline');
    }
})();

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
        document.getElementById('cart-form-section').style.display = 'none';
        return;
    }

    cartEmptyEl.style.display = 'none';
    cartItemsEl.style.display = 'block';
    document.getElementById('cart-form-section').style.display = 'block';

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
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    cartOverlay.classList.remove('active');
    cartDrawer.classList.remove('active');
    document.body.style.overflow = '';
}

function buildSummaryLines() {
    return cartItems
        .map(id => CATALOG[id])
        .filter(Boolean)
        .map(item => `• ${item.icon} ${t(item.nameKey)} (${t(item.typeKey)})`);
}

// Toggle formulario dentro del carrito
function toggleFormSection() {
    const formContent = document.getElementById('cart-form-content');
    if (formContent.style.display === 'none') {
        formContent.style.display = 'block';
    } else {
        formContent.style.display = 'none';
    }
}

window.toggleFormSection = toggleFormSection;

window.submitPlanForm = async () => {
    const planDias = document.getElementById('plan-dias').value;
    const planDuracion = document.getElementById('plan-duracion').value;
    const planEjercicios = document.getElementById('plan-ejercicios').value;
    const planObjetivo = document.getElementById('plan-objetivo').value;
    const planPeso = document.getElementById('plan-peso').value;
    const planAltura = document.getElementById('plan-altura').value;
    const planNotas = document.getElementById('plan-notas').value;

    // Validar que todos los campos requeridos estén completos
    if (!planDias || !planDuracion || !planEjercicios || !planObjetivo || !planPeso || !planAltura) {
        alert('Por favor completa todos los campos requeridos (*)');
        return;
    }

    // Usar el primer plan del carrito (o combinarlos si hay múltiples)
    const planPrincipal = cartItems[0] ? cartItems[0].replace('plan-', '') : 'combinado';

    await sendWhatsappWithPlanData(planPrincipal, planDias, planDuracion, planEjercicios, planObjetivo, planPeso, planAltura, planNotas);
};

async function sendWhatsappWithPlanData(planPrincipal, planDias, planDuracion, planEjercicios, planObjetivo, planPeso, planAltura, planNotas) {
    const btn = cartWhatsappBtn;
    const originalText = btn.textContent;
    btn.textContent = 'Generando consulta...';
    btn.disabled = true;

    try {
        // Generar ID única para la consulta
        const consultationId = generateConsultationId();

        // Descripciones detalladas para cada item
        const itemDescriptions = {
            'plan-principiante': 'Acceso a clases en vivo personalizadas, guia nutricional basica, soporte por email',
            'plan-intermedio': 'Clases en vivo 3x/semana, plan nutricional personalizado, consultas 1:1, seguimiento mensual',
            'plan-avanzado': 'Entrenamiento personalizado, clases ilimitadas, nutricionista dedicada, seguimiento semanal',
            'servicio-pilates': 'Sesiones en vivo adaptadas a tu nivel, mejora postural y flexibilidad',
            'servicio-nutricion': 'Planes de alimentacion personalizados, asesoramiento integral',
            'plan-combinado': 'Pilates + Nutricion integral, seguimiento completo',
            'clase-prueba': 'Clase introductoria para conocer la metodologia'
        };

        const itItemDescriptions = {
            'plan-principiante': 'Accesso a lezioni dal vivo personalizzate, guida nutrizionale di base, supporto email',
            'plan-intermedio': 'Lezioni dal vivo 3x/settimana, piano nutrizionale personalizzato, consulenze 1:1, monitoraggio mensile',
            'plan-avanzado': 'Allenamento personalizzato, lezioni illimitate, nutrizionista dedicata, monitoraggio settimanale',
            'servicio-pilates': 'Sessioni dal vivo adattate al tuo livello, miglioramento posturale e flessibilita',
            'servicio-nutricion': 'Piani alimentari personalizzati, consulenza completa',
            'plan-combinado': 'Pilates + Nutrizione integrale, monitoraggio completo',
            'clase-prueba': 'Lezione introduttiva per conoscere la metodologia'
        };

        const lang = getLang();
        const descriptions = lang === 'it' ? itItemDescriptions : itemDescriptions;

        // MENSAJE PÚBLICO para WhatsApp (solo información del cliente, sin datos sensibles)
        let publicMessage = `${t('cart.whatsapp_greeting')}\n\n`;

        // Resumen simple del plan
        const planName = planPrincipal.charAt(0).toUpperCase() + planPrincipal.slice(1);
        publicMessage += `📋 *Mi Interés:*\n`;
        publicMessage += `Plan ${planName}\n`;
        publicMessage += `${planDias} días/semana - ${planDuracion} min sesión\n`;

        // Modalidad presencial
        if (cartPresencial.checked) {
            publicMessage += `\n📍 ${t('cart.whatsapp_presencial_line')}`;
        }

        // Comentarios del cliente
        const note = cartNote.value.trim();
        if (note) {
            publicMessage += `\n\n💬 *COMENTARIOS:*\n${note}`;
        }

        // NO incluir ID ni link del panel en el mensaje público
        publicMessage += `\n\n${t('cart.whatsapp_closing')}`;

        // Guardar consulta en backend CON datos privados (ID, panel link, datos del plan)
        const panelLink = `${window.location.origin}/admin-panel.html?id=${consultationId}`;
        await saveConsultation({
            consultationId: consultationId,
            items: cartItems,
            presencial: cartPresencial.checked,
            note: note,
            language: lang,
            panelLink: panelLink,
            // Datos del plan personalizado (privados)
            plan: planPrincipal,
            dias: planDias,
            duracion: planDuracion,
            ejercicios: planEjercicios,
            objetivo: planObjetivo,
            peso: planPeso,
            altura: planAltura,
            notasPersonalizacion: planNotas,
            clientMessage: publicMessage
        });

        // Abrir WhatsApp con mensaje público (sin datos sensibles)
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(publicMessage)}`;

        // Para móvil, usar protocolo de WhatsApp si está disponible
        if (/Mobile|Android|iPhone/.test(navigator.userAgent)) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }

        // Limpiar carrito después de enviar
        setTimeout(() => {
            cartItems = [];
            saveCart([]);
            cartNote.value = '';
            cartPresencial.checked = false;
            // Limpiar formulario
            document.getElementById('plan-dias').value = '';
            document.getElementById('plan-duracion').value = '';
            document.getElementById('plan-ejercicios').value = '';
            document.getElementById('plan-objetivo').value = '';
            document.getElementById('plan-peso').value = '';
            document.getElementById('plan-altura').value = '';
            document.getElementById('plan-notas').value = '';
            // Cerrar formulario
            document.getElementById('cart-form-content').style.display = 'none';
            renderAll();
            closeDrawer();
            alert('✅ Consulta enviada. El panel de respuesta se abrirá en una nueva pestaña.');
        }, 500);

    } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar la consulta. Intenta de nuevo.');
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
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
    const pageWidth = doc.internal.pageSize.getWidth();
    const marginX = 20;
    const marginR = pageWidth - 20;
    let y = 12;

    // LOGO VISUAL - Círculos verdes
    const circleSize = 8;
    const circleGap = 3;
    const circleY = y + 2;
    const startX = marginX;

    doc.setFillColor(22, 163, 74);
    for (let i = 0; i < 5; i++) {
        doc.circle(startX + (i * (circleSize + circleGap)), circleY, circleSize / 2, 'F');
    }
    y += circleSize + 8;

    // BRANDING
    doc.setFont(undefined, 'bold');
    doc.setFontSize(26);
    doc.setTextColor(22, 163, 74);
    doc.text('ARA TRAINER', marginX, y);
    y += 10;

    doc.setFont(undefined, 'normal');
    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128);
    doc.text('Pilates Online + Nutricion', marginX, y);
    y += 14;

    // LÍNEA DIVISORIA
    doc.setDrawColor(22, 163, 74);
    doc.setLineWidth(0.8);
    doc.line(marginX, y, marginR, y);
    y += 8;

    // FECHA/HORA/DÍA
    const now = new Date();
    const lang = getLang();
    const dateFormatter = new Intl.DateTimeFormat(lang === 'it' ? 'it-IT' : 'es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const dateStr = dateFormatter.format(now);

    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text(dateStr, marginX, y);
    y += 8;

    // SEPARADOR
    doc.setDrawColor(240, 240, 240);
    doc.setLineWidth(0.3);
    doc.line(marginX, y, marginR, y);
    y += 8;

    // TÍTULO
    doc.setFont(undefined, 'bold');
    doc.setFontSize(13);
    doc.setTextColor(31, 41, 55);
    doc.text(t('cart.pdf_interest_label'), marginX, y);
    y += 10;

    // ITEMS DETALLADOS
    const itemDescriptions = {
        'plan-principiante': 'Acceso a clases en vivo personalizadas, guia nutricional basica, soporte por email',
        'plan-intermedio': 'Clases en vivo 3x/semana, plan nutricional personalizado, consultas 1:1, seguimiento mensual',
        'plan-avanzado': 'Entrenamiento personalizado, clases ilimitadas, nutricionista dedicada, seguimiento semanal',
        'servicio-pilates': 'Sesiones en vivo adaptadas a tu nivel, mejora postural y flexibilidad',
        'servicio-nutricion': 'Planes de alimentacion personalizados, asesoramiento integral',
        'plan-combinado': 'Pilates + Nutricion integral, seguimiento completo',
        'clase-prueba': 'Clase introductoria para conocer la metodologia'
    };

    const itItemDescriptions = {
        'plan-principiante': 'Accesso a lezioni dal vivo personalizzate, guida nutrizionale di base, supporto email',
        'plan-intermedio': 'Lezioni dal vivo 3x/settimana, piano nutrizionale personalizzato, consulenze 1:1, monitoraggio mensile',
        'plan-avanzado': 'Allenamento personalizzato, lezioni illimitate, nutrizionista dedicata, monitoraggio settimanale',
        'servicio-pilates': 'Sessioni dal vivo adattate al tuo livello, miglioramento posturale e flessibilita',
        'servicio-nutricion': 'Piani alimentari personalizzati, consulenza completa',
        'plan-combinado': 'Pilates + Nutrizione integrale, monitoraggio completo',
        'clase-prueba': 'Lezione introduttiva per conoscere la metodologia'
    };

    const descriptions = lang === 'it' ? itItemDescriptions : itemDescriptions;

    cartItems.forEach((id, idx) => {
        const item = CATALOG[id];
        if (!item) return;

        const itemName = t(item.nameKey);
        const itemType = t(item.typeKey);
        const desc = descriptions[id] || '';

        // Nombre del item
        doc.setFont(undefined, 'bold');
        doc.setFontSize(11);
        doc.setTextColor(22, 163, 74);
        doc.text(`${idx + 1}. ${itemName}`, marginX, y);
        y += 6;

        // Tipo
        doc.setFont(undefined, 'normal');
        doc.setFontSize(9);
        doc.setTextColor(107, 114, 128);
        doc.text(`Categoria: ${itemType}`, marginX + 3, y);
        y += 5;

        // Descripcion
        const descLines = doc.splitTextToSize(desc, 165);
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(descLines, marginX + 3, y);
        y += descLines.length * 4.5;

        y += 3;
    });

    // MODALIDAD PRESENCIAL
    if (cartPresencial.checked) {
        y += 2;
        doc.setFont(undefined, 'bold');
        doc.setFontSize(10);
        doc.setTextColor(22, 163, 74);
        doc.text(t('cart.pdf_presencial_label'), marginX, y);
        y += 7;
    }

    // COMENTARIO DEL CLIENTE
    const note = cartNote.value.trim();
    if (note) {
        y += 3;
        doc.setFont(undefined, 'bold');
        doc.setFontSize(11);
        doc.setTextColor(31, 41, 55);
        doc.text(t('cart.pdf_comment_label'), marginX, y);
        y += 6;

        doc.setFont(undefined, 'normal');
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        const noteLines = doc.splitTextToSize(note, 165);
        doc.text(noteLines, marginX + 3, y);
        y += noteLines.length * 5;
    }

    // ESPACIO
    y += 10;

    // LÍNEA FINAL
    doc.setDrawColor(22, 163, 74);
    doc.setLineWidth(0.8);
    doc.line(marginX, y, marginR, y);
    y += 8;

    // FOOTER
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text('ARA TRAINER | Pilates Online + Nutricion', marginX, y);
    y += 5;
    doc.text('WhatsApp: +39 389 1131525', marginX, y);
    y += 4;
    doc.text('Email: aranircamarl@gmail.com', marginX, y);
    y += 4;
    doc.text('Website: www.ara-trainer.com', marginX, y);

    const filename = lang === 'it' ? 'ara-trainer-richiesta.pdf' : 'ara-trainer-consulta.pdf';
    doc.save(filename);
}

document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => toggleItem(btn.dataset.itemId));
});

function handleCartSubmit() {
    const formContent = document.getElementById('cart-form-content');
    const isFormFilled = formContent && formContent.style.display !== 'none' &&
        document.getElementById('plan-dias').value &&
        document.getElementById('plan-duracion').value &&
        document.getElementById('plan-ejercicios').value &&
        document.getElementById('plan-objetivo').value &&
        document.getElementById('plan-peso').value &&
        document.getElementById('plan-altura').value;

    if (isFormFilled) {
        submitPlanForm();
    } else {
        sendSimpleCartWhatsapp();
    }
}

async function sendSimpleCartWhatsapp() {
    if (cartItems.length === 0) {
        alert(t('cart.empty_line1'));
        return;
    }

    const btn = cartWhatsappBtn;
    const originalText = btn.textContent;
    btn.textContent = t('cart.sending') || 'Enviando...';
    btn.disabled = true;

    try {
        const consultationId = generateConsultationId();
        const lang = getLang();

        // MENSAJE PÚBLICO para WhatsApp (solo información del cliente, sin datos sensibles)
        let publicMessage = `${t('cart.whatsapp_greeting')}\n\n`;
        publicMessage += `📋 *${t('cart.title')}:*\n`;

        buildSummaryLines().forEach(line => {
            publicMessage += line + '\n';
        });

        if (cartPresencial.checked) {
            publicMessage += `\n📍 ${t('cart.whatsapp_presencial_line')}`;
        }

        const note = cartNote.value.trim();
        if (note) {
            publicMessage += `\n\n💬 *${t('cart.comments') || 'COMENTARIOS'}:*\n${note}`;
        }

        // NO incluir ID ni link del panel en el mensaje público
        publicMessage += `\n\n${t('cart.whatsapp_closing')}`;

        // Guardar consulta en backend CON ID y link (privado, solo para propietario)
        const panelLink = `${window.location.origin}/admin-panel.html?id=${consultationId}`;
        await saveConsultation({
            consultationId,
            items: cartItems,
            presencial: cartPresencial.checked,
            note: note,
            language: lang,
            panelLink: panelLink,
            clientMessage: publicMessage
        });

        // Abrir WhatsApp con mensaje público (sin datos sensibles)
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(publicMessage)}`;

        // Para móvil, usar protocolo de WhatsApp si está disponible
        if (/Mobile|Android|iPhone/.test(navigator.userAgent)) {
            window.location.href = url;
        } else {
            window.open(url, '_blank');
        }

        // Limpiar carrito después de 2 segundos
        setTimeout(() => {
            cartItems = [];
            saveCart([]);
            cartNote.value = '';
            cartPresencial.checked = false;
            renderAll();
            closeDrawer();
        }, 2000);

    } catch (error) {
        console.error('Error sending consultation:', error);
        alert('Error al enviar. Intenta de nuevo.');
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

cartFab.addEventListener('click', openDrawer);
cartCloseBtn.addEventListener('click', closeDrawer);
cartOverlay.addEventListener('click', closeDrawer);
cartWhatsappBtn.addEventListener('click', handleCartSubmit);

const openCartFinalBtn = document.getElementById('open-cart-final');
if (openCartFinalBtn) {
    openCartFinalBtn.addEventListener('click', openDrawer);
}

renderAll();

// Hacer funciones globales disponibles para el HTML
window.toggleItem = toggleItem;
window.removeItem = removeItem;
window.openDrawer = openDrawer;
window.closeDrawer = closeDrawer;
window.toggleFormSection = toggleFormSection;
window.submitPlanForm = window.submitPlanForm;
