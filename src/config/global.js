export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Toxicología industrial',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Toxicología industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de los agentes tóxicos en la industria',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plaguicidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación de los plaguicidas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Efectos en la salud humana',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Efectos de los plaguicidas en el medio ambiente',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Hidrocarburos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Gases y vapores tóxicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Gases inertes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Gases tóxicos  ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Gases y vapores irritantes',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Gases y vapores asfixiantes',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Stellman, S. D. (2012). Capítulo 33 Toxicología. Enciclopedia de la OIT: ( ed.). D - INSHT (Instituto Nacional de Seguridad e Higiene en el Trabajo).  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/96247?page=1',
    },
    {
      referencia:
        'World Health Organization. (2020). Pesticide residues in food.  ',
      link: 'https://www.who.int',
    },
    {
      referencia:
        'Zumárraga Suárez, H. A. (2016). Plaguicidas: verdades, evidencias y alternativas de cambio: ( ed.). Ediciones Abya-Yala.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/79967',
    },
    {
      referencia:
        'U.S. Environmental Protection Agency (EPA). (2020). Volatile Organic Compounds Impact on Indoor Air Quality.  ',
      link:
        'https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality',
    },
    {
      referencia:
        'Calderón, J. (2004). Subproductos halogenados de la cloración en el agua de consumo público: ( ed.). Gaceta Sanitaria - Ediciones Doyma, S.L.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/31853',
    },
    {
      referencia:
        'Karam, M. Á. (2006). Plaguicidas y salud de la población: ( ed.). Red Ciencia Ergo Sum.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/18242 ',
    },
  ],
  glosario: [
    {
      termino: 'Absorción dérmica',
      significado:
        'Entrada de sustancias químicas a través de la piel hacia el cuerpo.',
    },
    {
      termino: 'Agente químico',
      significado:
        'Sustancia que puede causar daño por su composición química.',
    },
    {
      termino: 'Asfixiante',
      significado:
        'Gas que interfiere con el suministro o uso del oxígeno en el cuerpo.',
    },
    {
      termino: 'Bioacumulación',
      significado:
        'Acumulación de sustancias tóxicas en organismos vivos a lo largo del tiempo.',
    },
    {
      termino: 'Bioplaguicida',
      significado:
        'Sustancia natural usada para controlar plagas sin afectar el medio ambiente.',
    },
    {
      termino: 'Carcinógeno',
      significado: 'Sustancia que puede causar cáncer en humanos o animales.',
    },
    {
      termino: 'DL50',
      significado:
        'Dosis letal media: cantidad de sustancia que mata al 50% de una población.',
    },
    {
      termino: 'Disolvente orgánico',
      significado:
        'Líquido volátil que disuelve compuestos orgánicos, usado en procesos industriales.',
    },
    {
      termino: 'Endocrino (disruptor)',
      significado:
        'Sustancia que altera el funcionamiento hormonal del cuerpo.',
    },
    {
      termino: 'Exposición ocupacional',
      significado: 'Contacto con sustancias peligrosas durante el trabajo.',
    },
    {
      termino: 'Gases tóxicos',
      significado: 'Compuestos gaseosos dañinos por inhalación o contacto.',
    },
    {
      termino: 'Hidrocarburos',
      significado:
        'Compuestos orgánicos formados por carbono e hidrógeno, comunes en combustibles.',
    },
    {
      termino: 'Ingestión',
      significado:
        'Entrada de sustancias químicas al cuerpo a través del sistema digestivo.',
    },
    {
      termino: 'Inhalación',
      significado: 'Entrada de sustancias químicas por vía respiratoria.',
    },
    {
      termino: 'Monitoreo ambiental',
      significado:
        'Evaluación periódica de contaminantes en el entorno laboral.',
    },
    {
      termino: 'Neurotoxicidad',
      significado: 'Daño al sistema nervioso causado por sustancias tóxicas.',
    },
    {
      termino: 'Plaguicidas',
      significado:
        'Sustancias utilizadas para eliminar plagas que afectan cultivos o salud.',
    },
    {
      termino: 'Radón',
      significado: 'Gas inerte radiactivo que puede causar cáncer pulmonar.',
    },
    {
      termino: 'Solvente',
      significado: 'Sustancia que disuelve otra formando una solución.',
    },
    {
      termino: 'TLV',
      significado:
        'Valor límite umbral: concentración máxima permitida de un contaminante.',
    },
  ],
}
