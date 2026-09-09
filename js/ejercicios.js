// Base de datos de ejercicios por plan y tipo
export const EJERCICIOS_DB = {
  principiante: {
    mat: [
      {
        nombre: "Breathing (Respiración Pilates)",
        descripcion: "Posición de decúbito supino, respiración diafragmática",
        series: 2,
        repeticiones: 10,
        duracion: "2 min"
      },
      {
        nombre: "Pelvic Tilt",
        descripcion: "Movimiento de pelvis hacia arriba y abajo",
        series: 2,
        repeticiones: 15,
        duracion: "3 min"
      },
      {
        nombre: "The Hundred",
        descripcion: "Contracción abdominal con brazos levantados",
        series: 2,
        repeticiones: 100,
        duracion: "5 min"
      },
      {
        nombre: "Roll Down",
        descripcion: "Desenrollamiento de columna vertebral",
        series: 2,
        repeticiones: 10,
        duracion: "3 min"
      },
      {
        nombre: "Single Leg Circles",
        descripcion: "Círculos con una pierna extendida",
        series: 2,
        repeticiones: 8,
        duracion: "4 min"
      },
      {
        nombre: "Rolling Like a Ball",
        descripcion: "Balanceo de espalda sobre la colchoneta",
        series: 2,
        repeticiones: 10,
        duracion: "3 min"
      }
    ],
    reformer: [
      {
        nombre: "Footwork",
        descripcion: "Trabajo de pies en el Reformer",
        series: 3,
        repeticiones: 10,
        duracion: "5 min"
      },
      {
        nombre: "Leg Springs",
        descripcion: "Ejercicios con resortes para piernas",
        series: 2,
        repeticiones: 12,
        duracion: "5 min"
      },
      {
        nombre: "Chest Expansion",
        descripcion: "Expansión de pecho hacia atrás",
        series: 2,
        repeticiones: 8,
        duracion: "3 min"
      }
    ],
    mixed: [
      {
        nombre: "Mat - Roll Down",
        descripcion: "Desenrollamiento de columna vertebral",
        series: 2,
        repeticiones: 10,
        duracion: "3 min"
      },
      {
        nombre: "Reformer - Footwork",
        descripcion: "Trabajo de pies en el Reformer",
        series: 2,
        repeticiones: 10,
        duracion: "4 min"
      }
    ]
  },
  intermedio: {
    mat: [
      {
        nombre: "The Hundred",
        descripcion: "Contracción abdominal intensificada",
        series: 3,
        repeticiones: 100,
        duracion: "5 min"
      },
      {
        nombre: "Roll Up",
        descripcion: "Movimiento completo de columna desde posición tumbada",
        series: 3,
        repeticiones: 10,
        duracion: "4 min"
      },
      {
        nombre: "Leg Circles Advanced",
        descripcion: "Círculos amplios con una pierna",
        series: 3,
        repeticiones: 10,
        duracion: "5 min"
      },
      {
        nombre: "Criss Cross",
        descripcion: "Torsión abdominal con piernas flexionadas",
        series: 3,
        repeticiones: 12,
        duracion: "4 min"
      },
      {
        nombre: "Spine Stretch Forward",
        descripcion: "Flexión hacia adelante en posición sentada",
        series: 2,
        repeticiones: 10,
        duracion: "3 min"
      },
      {
        nombre: "Saw",
        descripcion: "Movimiento de sierra con torsión",
        series: 2,
        repeticiones: 10,
        duracion: "4 min"
      },
      {
        nombre: "Single Leg Stretch",
        descripcion: "Estiramientos alternados de piernas",
        series: 3,
        repeticiones: 12,
        duracion: "4 min"
      }
    ],
    reformer: [
      {
        nombre: "Long Box - Stretches",
        descripcion: "Estiramientos en la caja larga",
        series: 2,
        repeticiones: 8,
        duracion: "4 min"
      },
      {
        nombre: "Leg Springs - Advanced",
        descripcion: "Ejercicios avanzados con resortes",
        series: 3,
        repeticiones: 12,
        duracion: "6 min"
      },
      {
        nombre: "Twist Series",
        descripcion: "Series de torsión con resistencia",
        series: 2,
        repeticiones: 10,
        duracion: "4 min"
      }
    ],
    mixed: [
      {
        nombre: "Mat - Roll Up",
        descripcion: "Movimiento completo de columna",
        series: 2,
        repeticiones: 10,
        duracion: "4 min"
      },
      {
        nombre: "Reformer - Leg Springs",
        descripcion: "Trabajo avanzado con resortes",
        series: 2,
        repeticiones: 12,
        duracion: "5 min"
      }
    ]
  },
  avanzado: {
    mat: [
      {
        nombre: "Control Balance",
        descripcion: "Balance y control avanzado",
        series: 3,
        repeticiones: 8,
        duracion: "5 min"
      },
      {
        nombre: "Teaser Prep",
        descripcion: "Preparación para el teaser completo",
        series: 3,
        repeticiones: 6,
        duracion: "4 min"
      },
      {
        nombre: "Swimming",
        descripcion: "Movimiento de natación",
        series: 3,
        repeticiones: 30,
        duracion: "5 min"
      },
      {
        nombre: "Leg Pull Front",
        descripcion: "Extensión frontal de pierna",
        series: 2,
        repeticiones: 8,
        duracion: "4 min"
      },
      {
        nombre: "Pushups",
        descripcion: "Flexiones de brazos controladas",
        series: 3,
        repeticiones: 8,
        duracion: "4 min"
      },
      {
        nombre: "Double Leg Stretch",
        descripcion: "Estiramientos coordinados de brazos y piernas",
        series: 3,
        repeticiones: 12,
        duracion: "4 min"
      }
    ],
    reformer: [
      {
        nombre: "Short Box Series",
        descripcion: "Series completa en caja corta",
        series: 3,
        repeticiones: 10,
        duracion: "8 min"
      },
      {
        nombre: "Leg Springs - Challenge",
        descripcion: "Desafío completo con resortes",
        series: 3,
        repeticiones: 15,
        duracion: "7 min"
      },
      {
        nombre: "Jumps",
        descripcion: "Saltos controlados",
        series: 2,
        repeticiones: 10,
        duracion: "5 min"
      }
    ],
    mixed: [
      {
        nombre: "Mat - Teaser Prep",
        descripcion: "Preparación para teaser",
        series: 2,
        repeticiones: 6,
        duracion: "4 min"
      },
      {
        nombre: "Reformer - Short Box",
        descripcion: "Series de caja corta",
        series: 2,
        repeticiones: 10,
        duracion: "6 min"
      }
    ]
  }
};

// Objetivos y resultados esperados
export const OBJETIVOS_INFO = {
  "weight-loss": {
    titulo: "Pérdida de Peso y Tonificación",
    descripcion: "Programa enfocado en quemar calorías y tonificar músculos",
    resultados: [
      "Aumento del metabolismo",
      "Definición muscular progresiva",
      "Mejora de la composición corporal",
      "Mayor gasto energético"
    ]
  },
  "strength": {
    titulo: "Aumento de Fuerza y Resistencia",
    descripcion: "Enfoque en desarrollar fortaleza muscular",
    resultados: [
      "Mayor resistencia muscular",
      "Aumento de fuerza funcional",
      "Mejor rendimiento en actividades diarias",
      "Desarrollo muscular equilibrado"
    ]
  },
  "flexibility": {
    titulo: "Flexibilidad y Movilidad",
    descripcion: "Programa para mejorar rango de movimiento",
    resultados: [
      "Mayor amplitud de movimiento",
      "Reducción de rigidez",
      "Mejora de la postura",
      "Menor tensión muscular"
    ]
  },
  "posture": {
    titulo: "Corrección Postural",
    descripcion: "Enfoque en alineación y corrección de postura",
    resultados: [
      "Alineación espinal mejorada",
      "Reducción de dolores de espalda",
      "Mejor equilibrio corporal",
      "Prevención de lesiones"
    ]
  },
  "general": {
    titulo: "Bienestar General",
    descripcion: "Enfoque integral en salud y bienestar",
    resultados: [
      "Mayor energía y vitalidad",
      "Mejora del equilibrio físico-mental",
      "Reducción del estrés",
      "Sentido general de bienestar"
    ]
  }
};

// Horarios recomendados por días
export const HORARIOS_RECOMENDADOS = {
  2: ["Lunes y Miércoles", "Martes y Jueves"],
  3: ["Lunes, Miércoles y Viernes", "Lunes, Miércoles y Sábado"],
  4: ["Lunes, Martes, Jueves y Viernes"],
  5: ["Lunes a Viernes"]
};
