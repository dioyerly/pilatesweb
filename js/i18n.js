// Diccionario ES/IT y aplicación de idioma en toda la web
const LANG_KEY = 'ara-trainer-lang';

const TRANSLATIONS = {
    es: {
        'meta.title_home': 'Ara Trainer | Pilates Online + Nutrición',
        'meta.title_planes': 'Planes y Servicios | Ara Trainer',

        'nav.planes': 'Planes',
        'nav.servicios': 'Servicios',
        'nav.preguntas': 'Preguntas',
        'nav.sobre_mi': 'Sobre Mí',
        'nav.contacto': 'Contacto',
        'common.menu_aria': 'Abrir menú',
        'common.logo_alt': 'Ara Trainer',

        'hero.tagline': 'Transforma tu cuerpo y tu mente con Pilates personalizado + Asesoría Nutricional',
        'hero.presencial': '📍 Clases online para todo el mundo — también disponible de forma presencial en Italia',
        'hero.cta_planes': 'Ver Planes',
        'hero.cta_contact': 'Contactar',
        'hero.feature1_title': 'Pilates Online',
        'hero.feature1_desc': 'Clases en vivo personalizadas, diseñadas para transformar tu cuerpo',
        'hero.feature2_title': 'Asesoría Nutricional',
        'hero.feature2_desc': 'Planes personalizados para potenciar tus resultados',
        'hero.feature3_title': 'Planes Combinados',
        'hero.feature3_desc': 'Pilates + Nutrición: la combinación perfecta',
        'common.ver_detalle': 'Ver detalle →',

        'planes_home.title': 'Elige Tu Plan',
        'planes_home.subtitle': 'Cada plan está diseñado para adaptarse a tu nivel y objetivos. Agregá el que te interese a tu consulta.',

        'plan.principiante.name': 'PRINCIPIANTE',
        'plan.principiante.subtitle': 'Comienza tu viaje',
        'plan.principiante.desc': 'Perfecto para quienes inician en el mundo del pilates',
        'plan.principiante.b1': 'Clases en vivo personalizadas',
        'plan.principiante.b2': 'Acceso 24/7 a la plataforma',
        'plan.principiante.b3': 'Guía de nutrición básica',
        'plan.principiante.b4': 'Soporte vía email',

        'plan.intermedio.name': 'INTERMEDIO',
        'plan.intermedio.subtitle': 'Acelera tu progreso',
        'plan.intermedio.desc': 'Para quienes ya tienen experiencia y buscan resultados',
        'plan.intermedio.badge': '⭐ MÁS POPULAR',
        'plan.intermedio.b1': 'Clases en vivo 3x/semana',
        'plan.intermedio.b2': 'Plan personalizado',
        'plan.intermedio.b3': 'Consultas nutrición 1:1',
        'plan.intermedio.b4': 'Seguimiento de progreso',
        'plan.intermedio.b5': 'Comunidad privada',

        'plan.avanzado.name': 'AVANZADO',
        'plan.avanzado.subtitle': 'Transformación completa',
        'plan.avanzado.desc': 'Transformación integral con seguimiento máximo',
        'plan.avanzado.b1': 'Entrenamiento personalizado',
        'plan.avanzado.b2': 'Clases ilimitadas',
        'plan.avanzado.b3': 'Nutricionista dedicada',
        'plan.avanzado.b4': 'Plan integral pilates + nutrición',
        'plan.avanzado.b5': 'Seguimiento semanal',
        'plan.avanzado.b6': 'Acceso VIP prioritario',

        'common.ver_plan_completo': 'Ver plan completo →',

        'cert.title': 'Certificaciones',
        'cert.subtitle': 'Profesional certificada internacionalmente',
        'cert.card1_title': 'Allenamento al Femminile',
        'cert.card1_date': '📅 23 de marzo de 2025',
        'cert.card2_title': 'Personal Trainer Certificada',
        'cert.italia': 'Italia',
        'cert.image_alt': 'Certificado Allenamento al Femminile de Aranirca Marcano, emitido por World Fitness Academy y CSEN',
        'cert.image_aria': 'Ver certificado completo',
        'cert.infobox': '<strong>Profesora egresada de la Universidad de Educación Física y Deporte</strong>, con trayectoria profesional desde 2005. Certificada internacionalmente en Italia — CSEN, reconocido por el CONI (Comité Olímpico Nacional Italiano), y World Fitness Academy.',

        'horarios.title': 'Disponibilidad',
        'horarios.subtitle': 'Encuentra el horario que se adapte a ti',
        'horarios.box_title': 'Clases Disponibles',
        'horarios.p1': 'Las clases en vivo se adaptan a tu zona horaria. Sesiones 3-4 veces por semana a tu medida.',
        'horarios.p2_presencial': '📍 ¿Estás en Italia? También podemos coordinar sesiones presenciales.',
        'horarios.p3': '📱 <strong>Contacta para conocer los horarios exactos y disponibilidad actual.</strong>',

        'contacto.title': '¿Listo para Transformarte?',
        'contacto.subtitle': 'Contáctame y comencemos tu viaje juntas',
        'contacto.whatsapp_title': 'WhatsApp',
        'contacto.whatsapp_sub': 'Respuesta inmediata',
        'contacto.email_title': 'Email',
        'contacto.email_sub': 'Consultas detalladas',

        'footer.rights': '© 2025 Ara Trainer. Todos los derechos reservados.',
        'footer.made_by': 'Hecho con 💚 por Aranirca Marcano',
        'footer.tagline': 'Entrenador Personal Certificado | Pilates Online | Nutrición',

        'cart.title': 'Mi Consulta',
        'cart.close_aria': 'Cerrar',
        'cart.fab_aria': 'Abrir mi consulta',
        'cart.empty_line1': 'Todavía no agregaste nada.',
        'cart.empty_line2': 'Elegí un plan o servicio que te interese ✨',
        'cart.note_label': 'Comentario adicional (opcional)',
        'cart.note_placeholder': 'Ej: prefiero horario de tarde...',
        'cart.presencial_label': '📍 Prefiero modalidad presencial (si estoy en Italia)',
        'cart.btn_whatsapp': '📱 Enviar consulta por WhatsApp',
        'cart.btn_pdf': '📄 Descargar resumen en PDF',

        'cart.add_button': '+ Agregar a mi consulta',
        'cart.added_button': '✓ Agregado — Quitar',
        'cart.alert_empty_whatsapp': 'Agregá al menos un plan o servicio antes de enviar tu consulta.',
        'cart.alert_empty_pdf': 'Agregá al menos un plan o servicio antes de descargar el resumen.',
        'cart.alert_pdf_error': 'No se pudo cargar el generador de PDF. Verificá tu conexión a internet e intentá de nuevo.',
        'cart.whatsapp_greeting': 'Hola Ara! 👋 Vi tu página y me interesa consultar por:',
        'cart.whatsapp_comment_label': '📝 Comentario:',
        'cart.whatsapp_presencial_line': '📍 Prefiero modalidad presencial (Italia)',
        'cart.whatsapp_closing': '¡Gracias!',
        'cart.pdf_subtitle': 'Resumen de consulta',
        'cart.pdf_interest_label': 'Interés del cliente:',
        'cart.pdf_comment_label': 'Comentario:',
        'cart.pdf_presencial_label': '• Modalidad presencial (Italia)',
        'cart.pdf_generated_on': 'Generado el',

        'catalog.plan_principiante': 'Plan Principiante',
        'catalog.plan_intermedio': 'Plan Intermedio',
        'catalog.plan_avanzado': 'Plan Avanzado',
        'catalog.servicio_pilates': 'Pilates Personalizado',
        'catalog.servicio_nutricion': 'Asesoría Nutricional',
        'catalog.plan_combinado': 'Plan Combinado (Pilates + Nutrición)',
        'catalog.clase_prueba': 'Clase de prueba',
        'catalog.type_plan': 'Plan',
        'catalog.type_servicio': 'Servicio',
        'catalog.type_consulta': 'Consulta',

        'detalle.breadcrumb': '← Volver al inicio',
        'detalle.hero_title': 'Elegí tu camino',
        'detalle.hero_subtitle': 'Conocé en detalle cada servicio y plan, y armá tu consulta a medida. Sin compromiso, vos decidís qué te interesa.',

        'metodo.title': 'Cómo Trabajamos',
        'metodo.subtitle': 'Un proceso simple, pensado para que veas resultados reales',
        'metodo.step1_title': 'Diagnóstico inicial',
        'metodo.step1_desc': 'Conversamos sobre tu nivel, tus objetivos y tu disponibilidad para armar una propuesta a tu medida.',
        'metodo.step2_title': 'Plan personalizado',
        'metodo.step2_desc': 'Definimos juntas el plan de Pilates, nutrición o combinado que mejor se adapta a vos.',
        'metodo.step3_title': 'Acompañamiento',
        'metodo.step3_desc': 'Clases y seguimiento continuo, con ajustes según cómo vayas evolucionando.',
        'metodo.step4_title': 'Resultados sostenibles',
        'metodo.step4_desc': 'Construimos hábitos que se mantienen en el tiempo, no soluciones rápidas y pasajeras.',

        'servdet.title': 'Nuestros Servicios',
        'servdet.subtitle': 'Tocá cada servicio para ver qué incluye',
        'common.ver_que_incluye': 'Ver qué incluye',
        'common.q_consiste': '¿En qué consiste?',
        'common.q_necesitas': 'Lo que necesitás para empezar',
        'common.q_resultados': 'Resultados clave',

        'servdet.pilates.subtitle': 'Mueve tu cuerpo a tu ritmo, donde y cuando quieras.',
        'servdet.pilates.a1': 'Sesiones en vivo adaptadas a tu nivel desde cualquier lugar. Aprendés a escuchar tu cuerpo y a mejorar tu postura sin salir de casa.',
        'servdet.pilates.a2': 'Un espacio despejado, un mat o una toalla, y conexión a internet.',
        'servdet.pilates.a3': 'Mayor flexibilidad, tonificación muscular, corrección postural y menos estrés en el día a día.',
        'servdet.pilates.trial': '🎁 Quiero una clase de prueba',

        'servdet.nutricion.subtitle': 'Nutrición real, flexible y adaptada a tus metas.',
        'servdet.nutricion.a1': 'Planes de alimentación personalizados para potenciar tu energía y complementar tu actividad física, sin dietas restrictivas ni prohibiciones extremas.',
        'servdet.nutricion.a2': 'Contarnos tus hábitos actuales, tus preferencias alimentarias y tus objetivos de salud en una charla inicial.',
        'servdet.nutricion.a3': 'Mejor relación con la comida, más energía en el día a día y una composición corporal más saludable.',

        'servdet.combinado.subtitle': 'La sinergia perfecta para transformar tu bienestar integral.',
        'servdet.combinado.a1': 'Un enfoque 360° que combina el movimiento guiado de Pilates con un seguimiento nutricional a medida, para resultados más completos en menos tiempo.',
        'servdet.combinado.a2': 'Compromiso personal y ganas de sumar pequeños hábitos a tu rutina diaria.',
        'servdet.combinado.a3': 'Cambio físico integral, menos molestias articulares, mejor descanso y seguimiento personalizado constante.',

        'plandet.title': 'Planes en Detalle',
        'plandet.subtitle': 'Tocá cada plan para ver el detalle completo',
        'common.punto_partida': 'Punto de partida',
        'common.que_incluye': 'Qué incluye',
        'common.equipamiento': 'Equipamiento',
        'common.soporte': 'Soporte',
        'common.precio_nota': '💬 Precio personalizado según tu plan — lo conversamos por WhatsApp.',

        'plandet.principiante.name': 'Principiante — Comienza tu viaje',
        'plandet.principiante.audience': 'Dirigido a quienes se inician en Pilates o llevan tiempo sin hacer actividad física.',
        'plandet.principiante.partida': 'Alineación postural, respiración consciente y activación del core.',
        'plandet.principiante.incluye': 'Clases guiadas con progresiones suaves y guía de nutrición básica de iniciación.',
        'plandet.principiante.equipo': 'Ninguno técnico — alcanza con una toalla si no tenés mat.',
        'plandet.principiante.soporte': 'Asistencia por email para tus dudas iniciales.',

        'plandet.intermedio.name': 'Intermedio — Acelera tu progreso',
        'plandet.intermedio.audience': 'Dirigido a quienes ya tienen práctica previa y buscan tonificar y ganar resistencia.',
        'plandet.intermedio.partida': 'Mayor intensidad, control del equilibrio y combinaciones de fuerza fluida.',
        'plandet.intermedio.incluye': 'Clases en vivo 3x/semana, plan nutricional personalizado y consultas 1:1.',
        'plandet.intermedio.equipo': 'Mat de Pilates y elementos caseros opcionales (bandas elásticas, botellas pequeñas).',
        'plandet.intermedio.soporte': 'Seguimiento mensual de tu progreso y acompañamiento directo.',

        'plandet.avanzado.name': 'Avanzado — Transformación completa',
        'plandet.avanzado.audience': 'Dirigido a personas constantes que buscan máxima exigencia y un cambio integral.',
        'plandet.avanzado.partida': 'Secuencias complejas, trabajo de fuerza con mayor propiocepción y nutrición optimizada.',
        'plandet.avanzado.incluye': 'Entrenamiento personalizado, clases ilimitadas, nutricionista dedicada y plan 100% a medida.',
        'plandet.avanzado.equipo': 'Mat y accesorios variados para sumar resistencia.',
        'plandet.avanzado.soporte': 'Acceso prioritario y seguimiento semanal por WhatsApp.',

        'faq.title': 'Preguntas Frecuentes',
        'faq.subtitle': 'Lo que más nos preguntan antes de empezar',
        'faq.q1': '¿Cómo puedo probar antes de decidirme?',
        'faq.a1': 'Agregá "Clase de prueba" a tu consulta o escribinos directo por WhatsApp, y coordinamos una clase para que conozcas la modalidad antes de sumarte a un plan.',
        'faq.q2': '¿Cuánto duran las clases?',
        'faq.a2': 'Hay sesiones cortas de 15 a 20 minutos para los días con poco tiempo, y rutinas completas de 45 a 50 minutos.',
        'faq.q3': '¿Necesito algún equipo para empezar?',
        'faq.a3': 'No. Un mat es ideal, pero podés arrancar perfectamente con una toalla sobre una superficie cómoda.',
        'faq.q4': '¿Puedo empezar si hace mucho tiempo que no hago actividad física?',
        'faq.a4': 'Sí — para eso está pensado el Plan Principiante, con adaptaciones seguras para recuperar movilidad a tu propio ritmo.',
        'faq.q5': '¿El Pilates tiene ejercicios de impacto?',
        'faq.a5': 'No. Es una disciplina de bajo impacto articular, ideal para cuidar tu columna y tus articulaciones.',
        'faq.q6': '¿Puedo empezar en cualquier momento del mes?',
        'faq.a6': 'Sí, no hay fechas fijas de inicio — arrancamos cuando vos estés list@.',
        'faq.q7': '¿Cómo sé cuánto cuesta cada plan?',
        'faq.a7': 'Los precios se arman a medida según el plan y la frecuencia elegida. Agregá lo que te interesa a "Mi Consulta" y te respondemos por WhatsApp con el valor.',

        'ctafinal.title': '¿List@ para empezar?',
        'ctafinal.subtitle': 'Revisá lo que agregaste a tu consulta y enviámelo, o escribime directo por WhatsApp',
        'ctafinal.btn_cart': '🛒 Ver mi consulta',
        'ctafinal.btn_whatsapp': '💬 Escribir por WhatsApp',
    },
    it: {
        'meta.title_home': 'Ara Trainer | Pilates Online + Nutrizione',
        'meta.title_planes': 'Piani e Servizi | Ara Trainer',

        'nav.planes': 'Piani',
        'nav.servicios': 'Servizi',
        'nav.preguntas': 'Domande',
        'nav.sobre_mi': 'Chi Sono',
        'nav.contacto': 'Contatti',
        'common.menu_aria': 'Apri menu',
        'common.logo_alt': 'Ara Trainer',

        'hero.tagline': 'Trasforma il tuo corpo e la tua mente con Pilates personalizzato + Consulenza Nutrizionale',
        'hero.presencial': '📍 Lezioni online per tutto il mondo — disponibile anche in presenza in Italia',
        'hero.cta_planes': 'Vedi i Piani',
        'hero.cta_contact': 'Contattami',
        'hero.feature1_title': 'Pilates Online',
        'hero.feature1_desc': 'Lezioni dal vivo e registrate, pensate per trasformare il tuo corpo',
        'hero.feature2_title': 'Consulenza Nutrizionale',
        'hero.feature2_desc': 'Piani personalizzati per potenziare i tuoi risultati',
        'hero.feature3_title': 'Piani Combinati',
        'hero.feature3_desc': 'Pilates + Nutrizione: la combinazione perfetta',
        'common.ver_detalle': 'Vedi dettagli →',

        'planes_home.title': 'Scegli il Tuo Piano',
        'planes_home.subtitle': 'Ogni piano è pensato per adattarsi al tuo livello e ai tuoi obiettivi. Aggiungi quello che ti interessa alla tua richiesta.',

        'plan.principiante.name': 'PRINCIPIANTE',
        'plan.principiante.subtitle': 'Inizia il tuo percorso',
        'plan.principiante.desc': 'Perfetto per chi si avvicina per la prima volta al pilates',
        'plan.principiante.b1': 'Lezioni registrate + dal vivo',
        'plan.principiante.b2': 'Accesso 24/7 alla piattaforma',
        'plan.principiante.b3': 'Guida nutrizionale di base',
        'plan.principiante.b4': 'Supporto via email',

        'plan.intermedio.name': 'INTERMEDIO',
        'plan.intermedio.subtitle': 'Accelera i tuoi progressi',
        'plan.intermedio.desc': 'Per chi ha già esperienza e cerca risultati concreti',
        'plan.intermedio.badge': '⭐ IL PIÙ POPOLARE',
        'plan.intermedio.b1': 'Lezioni dal vivo 3x/settimana',
        'plan.intermedio.b2': 'Piano personalizzato',
        'plan.intermedio.b3': 'Consulenze nutrizionali 1:1',
        'plan.intermedio.b4': 'Monitoraggio dei progressi',
        'plan.intermedio.b5': 'Community privata',

        'plan.avanzado.name': 'AVANZATO',
        'plan.avanzado.subtitle': 'Trasformazione completa',
        'plan.avanzado.desc': 'Trasformazione integrale con il massimo del supporto',
        'plan.avanzado.b1': 'Allenamento personalizzato',
        'plan.avanzado.b2': 'Lezioni illimitate',
        'plan.avanzado.b3': 'Nutrizionista dedicata',
        'plan.avanzado.b4': 'Piano integrale pilates + nutrizione',
        'plan.avanzado.b5': 'Monitoraggio settimanale',
        'plan.avanzado.b6': 'Accesso VIP prioritario',

        'common.ver_plan_completo': 'Vedi il piano completo →',

        'cert.title': 'Certificazioni',
        'cert.subtitle': 'Professionista certificata a livello internazionale',
        'cert.card1_title': 'Allenamento al Femminile',
        'cert.card1_date': '📅 23 marzo 2025',
        'cert.card2_title': 'Personal Trainer Certificata',
        'cert.italia': 'Italia',
        'cert.image_alt': 'Certificato Allenamento al Femminile di Aranirca Marcano, rilasciato da World Fitness Academy e CSEN',
        'cert.image_aria': 'Vedi il certificato completo',
        'cert.infobox': '<strong>Laureata in Scienze Motorie e dello Sport</strong>, con un percorso professionale che inizia nel 2005. Certificata a livello internazionale in Italia — CSEN, riconosciuto dal CONI, e World Fitness Academy.',

        'horarios.title': 'Disponibilità',
        'horarios.subtitle': 'Trova l\'orario più adatto a te',
        'horarios.box_title': 'Lezioni Disponibili',
        'horarios.p1': 'Le lezioni si adattano al tuo fuso orario. Sessioni dal vivo 3-4 volte a settimana e accesso 24/7 al materiale registrato.',
        'horarios.p2_presencial': '📍 Sei in Italia? Possiamo organizzare anche sessioni in presenza.',
        'horarios.p3': '📱 <strong>Contattami per conoscere gli orari esatti e la disponibilità attuale.</strong>',

        'contacto.title': 'Pronta a Trasformarti?',
        'contacto.subtitle': 'Contattami e iniziamo insieme il tuo percorso',
        'contacto.whatsapp_title': 'WhatsApp',
        'contacto.whatsapp_sub': 'Risposta immediata',
        'contacto.email_title': 'Email',
        'contacto.email_sub': 'Richieste dettagliate',

        'footer.rights': '© 2025 Ara Trainer. Tutti i diritti riservati.',
        'footer.made_by': 'Realizzato con 💚 da Aranirca Marcano',
        'footer.tagline': 'Personal Trainer Certificata | Pilates Online | Nutrizione',

        'cart.title': 'La Mia Richiesta',
        'cart.close_aria': 'Chiudi',
        'cart.fab_aria': 'Apri la mia richiesta',
        'cart.empty_line1': 'Non hai ancora aggiunto nulla.',
        'cart.empty_line2': 'Scegli un piano o servizio che ti interessa ✨',
        'cart.note_label': 'Commento aggiuntivo (facoltativo)',
        'cart.note_placeholder': 'Es: preferisco l\'orario pomeridiano...',
        'cart.presencial_label': '📍 Preferisco la modalità in presenza (sono in Italia)',
        'cart.btn_whatsapp': '📱 Invia la richiesta su WhatsApp',
        'cart.btn_pdf': '📄 Scarica il riepilogo in PDF',

        'cart.add_button': '+ Aggiungi alla mia richiesta',
        'cart.added_button': '✓ Aggiunto — Rimuovi',
        'cart.alert_empty_whatsapp': 'Aggiungi almeno un piano o servizio prima di inviare la tua richiesta.',
        'cart.alert_empty_pdf': 'Aggiungi almeno un piano o servizio prima di scaricare il riepilogo.',
        'cart.alert_pdf_error': 'Non è stato possibile caricare il generatore di PDF. Controlla la connessione e riprova.',
        'cart.whatsapp_greeting': 'Ciao Ara! 👋 Ho visto il tuo sito e sono interessata/o a:',
        'cart.whatsapp_comment_label': '📝 Commento:',
        'cart.whatsapp_presencial_line': '📍 Preferisco la modalità in presenza (Italia)',
        'cart.whatsapp_closing': 'Grazie!',
        'cart.pdf_subtitle': 'Riepilogo della richiesta',
        'cart.pdf_interest_label': 'Interesse del cliente:',
        'cart.pdf_comment_label': 'Commento:',
        'cart.pdf_presencial_label': '• Modalità in presenza (Italia)',
        'cart.pdf_generated_on': 'Generato il',

        'catalog.plan_principiante': 'Piano Principiante',
        'catalog.plan_intermedio': 'Piano Intermedio',
        'catalog.plan_avanzado': 'Piano Avanzato',
        'catalog.servicio_pilates': 'Pilates Personalizzato',
        'catalog.servicio_nutricion': 'Consulenza Nutrizionale',
        'catalog.plan_combinado': 'Piano Combinato (Pilates + Nutrizione)',
        'catalog.clase_prueba': 'Lezione di prova',
        'catalog.type_plan': 'Piano',
        'catalog.type_servicio': 'Servizio',
        'catalog.type_consulta': 'Richiesta',

        'detalle.breadcrumb': '← Torna alla home',
        'detalle.hero_title': 'Scegli il tuo percorso',
        'detalle.hero_subtitle': 'Scopri nel dettaglio ogni servizio e piano, e crea la tua richiesta su misura. Senza impegno, decidi tu cosa ti interessa.',

        'metodo.title': 'Come Lavoriamo',
        'metodo.subtitle': 'Un processo semplice, pensato per ottenere risultati reali',
        'metodo.step1_title': 'Valutazione iniziale',
        'metodo.step1_desc': 'Parliamo del tuo livello, dei tuoi obiettivi e della tua disponibilità per costruire una proposta su misura.',
        'metodo.step2_title': 'Piano personalizzato',
        'metodo.step2_desc': 'Definiamo insieme il piano di Pilates, nutrizione o combinato più adatto a te.',
        'metodo.step3_title': 'Accompagnamento',
        'metodo.step3_desc': 'Lezioni e monitoraggio continuo, con aggiustamenti in base ai tuoi progressi.',
        'metodo.step4_title': 'Risultati duraturi',
        'metodo.step4_desc': 'Costruiamo abitudini che restano nel tempo, non soluzioni rapide e passeggere.',

        'servdet.title': 'I Nostri Servizi',
        'servdet.subtitle': 'Tocca ogni servizio per vedere cosa include',
        'common.ver_que_incluye': 'Scopri cosa include',
        'common.q_consiste': 'In cosa consiste?',
        'common.q_necesitas': 'Cosa ti serve per iniziare',
        'common.q_resultados': 'Risultati chiave',

        'servdet.pilates.subtitle': 'Muovi il tuo corpo al tuo ritmo, dove e quando vuoi.',
        'servdet.pilates.a1': 'Accesso a lezioni registrate e sessioni dal vivo adattate al tuo livello. Impari ad ascoltare il tuo corpo e a migliorare la postura senza uscire di casa.',
        'servdet.pilates.a2': 'Uno spazio libero, un tappetino o un asciugamano, e una connessione internet.',
        'servdet.pilates.a3': 'Maggiore flessibilità, tonificazione muscolare, correzione posturale e meno stress quotidiano.',
        'servdet.pilates.trial': '🎁 Voglio una lezione di prova',

        'servdet.nutricion.subtitle': 'Nutrizione reale, flessibile e adattata ai tuoi obiettivi.',
        'servdet.nutricion.a1': 'Piani alimentari personalizzati per aumentare la tua energia e completare la tua attività fisica, senza diete restrittive né proibizioni estreme.',
        'servdet.nutricion.a2': 'Raccontarmi le tue abitudini attuali, le tue preferenze alimentari e i tuoi obiettivi di salute in un primo colloquio.',
        'servdet.nutricion.a3': 'Un rapporto migliore con il cibo, più energia ogni giorno e una composizione corporea più sana.',

        'servdet.combinado.subtitle': 'La sinergia perfetta per trasformare il tuo benessere in modo integrale.',
        'servdet.combinado.a1': 'Un approccio a 360° che unisce il movimento guidato del Pilates a un percorso nutrizionale su misura, per risultati più completi in meno tempo.',
        'servdet.combinado.a2': 'Impegno personale e voglia di introdurre piccole abitudini nella tua routine quotidiana.',
        'servdet.combinado.a3': 'Cambiamento fisico integrale, meno fastidi articolari, riposo migliore e monitoraggio personalizzato costante.',

        'plandet.title': 'Piani nel Dettaglio',
        'plandet.subtitle': 'Tocca ogni piano per vedere il dettaglio completo',
        'common.punto_partida': 'Punto di partenza',
        'common.que_incluye': 'Cosa include',
        'common.equipamiento': 'Attrezzatura',
        'common.soporte': 'Supporto',
        'common.precio_nota': '💬 Prezzo personalizzato in base al tuo piano — ne parliamo su WhatsApp.',

        'plandet.principiante.name': 'Principiante — Inizia il tuo percorso',
        'plandet.principiante.audience': 'Pensato per chi si avvicina per la prima volta al Pilates o è ferma da tempo con l\'attività fisica.',
        'plandet.principiante.partida': 'Allineamento posturale, respirazione consapevole e attivazione del core.',
        'plandet.principiante.incluye': 'Lezioni guidate con progressioni graduali e guida nutrizionale di base.',
        'plandet.principiante.equipo': 'Nessuna attrezzatura tecnica — basta un asciugamano se non hai un tappetino.',
        'plandet.principiante.soporte': 'Assistenza via email per i tuoi primi dubbi.',

        'plandet.intermedio.name': 'Intermedio — Accelera i tuoi progressi',
        'plandet.intermedio.audience': 'Pensato per chi ha già esperienza e vuole tonificare e aumentare la resistenza.',
        'plandet.intermedio.partida': 'Maggiore intensità, controllo dell\'equilibrio e combinazioni di forza fluida.',
        'plandet.intermedio.incluye': 'Lezioni dal vivo 3x/settimana, piano nutrizionale personalizzato e consulenze 1:1.',
        'plandet.intermedio.equipo': 'Tappetino da Pilates ed elementi casalinghi opzionali (elastici, piccole bottiglie).',
        'plandet.intermedio.soporte': 'Monitoraggio mensile dei tuoi progressi e accompagnamento diretto.',

        'plandet.avanzado.name': 'Avanzato — Trasformazione completa',
        'plandet.avanzado.audience': 'Pensato per chi è costante e cerca la massima intensità e un cambiamento integrale.',
        'plandet.avanzado.partida': 'Sequenze complesse, lavoro di forza con maggiore propriocezione e nutrizione ottimizzata.',
        'plandet.avanzado.incluye': 'Allenamento personalizzato, lezioni illimitate, nutrizionista dedicata e piano 100% su misura.',
        'plandet.avanzado.equipo': 'Tappetino e accessori vari per aumentare la resistenza.',
        'plandet.avanzado.soporte': 'Accesso prioritario e monitoraggio settimanale su WhatsApp.',

        'faq.title': 'Domande Frequenti',
        'faq.subtitle': 'Quello che ci chiedono di più prima di iniziare',
        'faq.q1': 'Come posso provare prima di decidere?',
        'faq.a1': 'Aggiungi "Lezione di prova" alla tua richiesta oppure scrivimi direttamente su WhatsApp, e organizziamo una lezione per farti conoscere la modalità prima di scegliere un piano.',
        'faq.q2': 'Quanto durano le lezioni?',
        'faq.a2': 'Ci sono sessioni brevi di 15-20 minuti per i giorni con poco tempo, e allenamenti completi di 45-50 minuti.',
        'faq.q3': 'Serve qualche attrezzatura per iniziare?',
        'faq.a3': 'No. Un tappetino è l\'ideale, ma puoi iniziare tranquillamente con un asciugamano su una superficie comoda.',
        'faq.q4': 'Posso iniziare se è da molto che non faccio attività fisica?',
        'faq.a4': 'Sì — è proprio per questo che esiste il Piano Principiante, con adattamenti sicuri per recuperare la mobilità al tuo ritmo.',
        'faq.q5': 'Il Pilates ha esercizi ad alto impatto?',
        'faq.a5': 'No. È una disciplina a basso impatto articolare, ideale per proteggere la colonna e le articolazioni.',
        'faq.q6': 'Posso iniziare in qualsiasi momento del mese?',
        'faq.a6': 'Sì, non ci sono date fisse di inizio — cominciamo quando sei pronta.',
        'faq.q7': 'Come faccio a sapere quanto costa ogni piano?',
        'faq.a7': 'I prezzi vengono definiti su misura in base al piano e alla frequenza scelta. Aggiungi ciò che ti interessa a "La Mia Richiesta" e ti risponderò su WhatsApp con il valore.',

        'ctafinal.title': 'Pronta per iniziare?',
        'ctafinal.subtitle': 'Rivedi cosa hai aggiunto alla tua richiesta e inviamela, oppure scrivimi direttamente su WhatsApp',
        'ctafinal.btn_cart': '🛒 Vedi la mia richiesta',
        'ctafinal.btn_whatsapp': '💬 Scrivi su WhatsApp',
    },
};

function getLang() {
    try {
        return localStorage.getItem(LANG_KEY) || 'es';
    } catch (e) {
        return 'es';
    }
}

function t(key) {
    const lang = getLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined)
        ? TRANSLATIONS[lang][key]
        : (TRANSLATIONS.es[key] !== undefined ? TRANSLATIONS.es[key] : key);
}

function applyLang(lang) {
    document.documentElement.lang = lang;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        if (dict[key] !== undefined) el.alt = dict[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.dataset.i18nAriaLabel;
        if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    if (typeof window.refreshCartUI === 'function') {
        window.refreshCartUI();
    }
}

function setLang(lang) {
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
        // localStorage no disponible - el idioma no persiste al recargar
    }
    applyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    applyLang(getLang());
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
});
