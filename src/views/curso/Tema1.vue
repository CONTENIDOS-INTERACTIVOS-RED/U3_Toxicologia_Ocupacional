<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Toxicología industrial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 La toxicología industrial es una rama especializada de la toxicología aplicada, que se dedica al estudio de los efectos nocivos que pueden ocasionar diversas sustancias químicas presentes en los ambientes laborales, sobre la salud de los trabajadores. Esta disciplina tiene como finalidad fundamental comprender, evaluar y mitigar los riesgos asociados a la exposición a agentes tóxicos en el entorno laboral, con el objetivo de promover condiciones de trabajo seguras y proteger la salud ocupacional de los empleados. La toxicología industrial combina conocimientos de química, medicina, biología y ergonomía para desarrollar estrategias eficaces de prevención, control y tratamiento de las posibles afecciones relacionadas con la exposición a sustancias peligrosas en diferentes industrias y sectores económicos.
        p(data-aos="fade-left") Los trabajadores industriales, en su día a día, están expuestos a una amplia variedad de sustancias químicas peligrosas, incluyendo disolventes orgánicos, metales pesados como plomo, mercurio o arsénico, pesticidas utilizados en la agricultura, gases tóxicos, vapores inflamables y partículas en suspensión. La exposición prolongada o aguda a estos agentes puede tener efectos graves sobre la salud, desde irritaciones leves en las vías respiratorias hasta enfermedades crónicas, daños en órganos internos, alteraciones neurológicas o incluso cáncer. La toxicología industrial investiga en detalle cómo estas sustancias interactúan con el organismo humano a nivel molecular, celular y sistémico, identificando los mecanismos fisiopatológicos que desencadenan las diferentes lesiones o enfermedades. Además, evalúa los niveles de exposición seguros, las vías de entrada al cuerpo (como inhalación, ingestión o absorción cutánea) y las condiciones que aumentan el riesgo de efectos adversos.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Asimismo, esta disciplina no solo se enfoca en la identificación y evaluación de los riesgos, sino que también desarrolla y recomienda medidas preventivas, tales como el uso de equipos de protección personal adecuados, la implementación de controles de ingeniería en los procesos productivos, la vigilancia epidemiológica de los trabajadores y programas de capacitación en seguridad laboral. 
    
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La toxicología industrial, por tanto, juega un papel crucial en la protección de la salud de los empleados, ayudando a reducir la incidencia de enfermedades relacionadas con la exposición ocupacional y promoviendo entornos laborales más seguros y saludables. En un contexto donde la industrialización continúa creciendo, la importancia de esta rama de la toxicología se vuelve aún más relevante para garantizar condiciones laborales que minimicen los riesgos y fomenten el bienestar integral de la fuerza laboral.
        p Los principios fundamentales de la toxicología, son:
    
    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Dosis-respuesta
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Uno de los pilares fundamentales en la toxicología es la relación dosis-respuesta, que establece que el efecto tóxico de una sustancia depende directamente de la cantidad administrada, absorbida o expuesta al organismo. Esto significa que una sustancia puede ser inofensiva en dosis bajas, pero convertirse en tóxica a medida que aumenta la cantidad. 
    
        .bg-color-4.p-5(data-aos="fade-left")
          p.mb-0 La ley de Paracelso, considerado el padre de la toxicología moderna, resume esta idea con la célebre frase: “La dosis hace el veneno”. Este principio resalta la importancia de determinar los niveles seguros de exposición y la dosis a partir de la cual comienzan a aparecer efectos adversos, permitiendo así establecer límites y regulaciones para proteger la salud humana y el medio ambiente.
    
    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Vías de exposición
    
    p.mb-5 Las vías de exposición son los caminos a través de los cuales los tóxicos ingresan al organismo, y en ambientes industriales, estas vías son variadas y pueden tener diferentes implicaciones en la salud.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Inhalación
              p Es una de las vías más frecuentes y peligrosas en entornos laborales, especialmente cuando se manejan gases, vapores, nieblas o partículas en suspensión como polvos. La inhalación permite que los tóxicos lleguen rápidamente a los pulmones y puedan distribuirse a través del torrente sanguíneo, causando efectos inmediatos o acumulativos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Absorción dérmica
              p Ocurre cuando las sustancias químicas entran en contacto con la piel, atravesando las capas cutáneas. Aunque generalmente se considera una vía de entrada de menor rapidez, puede ser significativa en casos de exposición prolongada o con sustancias altamente lipofílicas que penetran con facilidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ingestión accidental
              p Menos común en entornos controlados, pero posible cuando los contaminantes entran en contacto con alimentos, bebidas o manos sin lavar, llevando los tóxicos directamente al aparato digestivo. Esta vía puede generar efectos sistémicos o localizados, dependiendo de la sustancia y la cantidad ingerida.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Es importante destacar que, en muchos ambientes industriales, las vías de exposición pueden combinarse, aumentando así el riesgo para los trabajadores. La implementación de medidas preventivas, como el uso de equipo de protección personal y controles ambientales, es fundamental para minimizar estas exposiciones.
    
        .bg-color-9.p-5(data-aos="fade-left")
          p.mb-0 En conjunto, estos principios permiten a los toxicólogos comprender mejor cómo las sustancias químicas afectan a los seres vivos y diseñar estrategias para prevenir, diagnosticar y tratar las intoxicaciones, además de establecer límites seguros para la exposición en entornos laborales y ambientales.
  
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Clasificación de los agentes tóxicos en la industria
    
    p.mb-5 La clasificación de los agentes tóxicos en la industria, son:

    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Agentes físicos
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Los agentes físicos comprenden radiaciones ionizantes, ruido, temperaturas extremas y vibraciones. Aunque no son considerados agentes tóxicos químicos, su exposición puede producir efectos nocivos sobre la salud humana, como daños en tejidos, pérdida auditiva, quemaduras por calor o frío, y alteraciones en el sistema nervioso (WHO, 2010). 
        p(data-aos="fade-left") La radiación ionizante, por ejemplo, puede causar daño a las células y al ADN, incrementando el riesgo de cáncer, mientras que la exposición prolongada a niveles elevados de ruido puede derivar en pérdida auditiva permanente (NIOSH, 2001). La correcta gestión y protección frente a estos agentes es fundamental en los entornos industriales para prevenir enfermedades ocupacionales.
    
    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Agentes químicos

    p.mb-5 Los agentes químicos son, sin duda, los más relevantes en el contexto industrial debido a su alta toxicidad y a los riesgos asociados a su manejo. Estos pueden clasificarse, según su estado físico, estructura química o mecanismo de acción (López et al., 2015).

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gases y vapores" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Gases y vapores
            p Incluyen monóxido de carbono, amoníaco y cloro, que pueden causar intoxicaciones agudas o efectos crónicos en los órganos respiratorios y otros sistemas.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/10.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Metales pesados" :icon="require('@/assets/bullets/3.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Metales pesados
            p Como plomo, mercurio y cadmio, son altamente tóxicos y pueden acumularse en el organismo, causando daños neurológicos, renales y hematológicos. La exposición a estos metales puede ocurrir por inhalación, ingestión o contacto cutáneo (ATSDR, 2019).
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Disolventes orgánicos" :icon="require('@/assets/bullets/4.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Disolventes orgánicos
            p Tales como benceno, tolueno y xileno, utilizados en procesos de limpieza, extracción y fabricación, que pueden afectar el sistema nervioso central, el hígado y los riñones, además de ser carcinogénicos en algunos casos (IARC, 2012).
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Pesticidas industriales" :icon="require('@/assets/bullets/5.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Pesticidas industriales
            p Como organofosforados y carbamatos, empleados en control de plagas, que actúan como inhibidores de la acetilcolinesterasa, provocando síntomas que van desde mareos hasta convulsiones y muerte (WHO, 2013).
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/13.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La exposición a estos agentes requiere medidas rigurosas de control, incluyendo uso de equipos de protección personal, ventilación adecuada y monitoreo ambiental, para minimizar los riesgos laborales.
    
    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Agentes biológicos
      
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En ciertos sectores industriales, como en la producción de alimentos, farmacéuticas y bioindustria, los agentes biológicos pueden representar un riesgo significativo. Estos incluyen microorganismos patógenos, virus, bacterias, hongos y sus toxinas (CDC, 2015). 
        p La exposición a agentes biológicos puede causar infecciones, intoxicaciones y reacciones alérgicas. Por ejemplo, en la industria de alimentos, la manipulación de productos contaminados puede propagar Salmonella, Listeria o E. coli, poniendo en riesgo la salud de los trabajadores y consumidores (FAO/WHO, 2017). La gestión de estos riesgos implica prácticas higiénicas estrictas, vacunación, uso de barreras físicas y controles de bioseguridad.
    
        .bg-color-1.p-5(data-aos="fade-left")
          p.mb-0 La clasificación de los agentes tóxicos en la industria abarca una variedad de agentes físicos, químicos y biológicos, cada uno con características y riesgos específicos. La identificación y control adecuados de estos agentes son esenciales para garantizar la seguridad y salud de los trabajadores, así como para cumplir con las normativas internacionales y nacionales en materia de higiene industrial (ILO, 2018).

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.osha.gov/annotated-pels " target="_blank" rel="noopener noreferrer") Occupational Safety and Health Administration (OSHA). (2021). Permissible Exposure Limits - Annotated Tables. U.S. Department of Labor. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.who.int/ipcs/publications/cicad/en/" target="_blank" rel="noopener noreferrer") World Health Organization (WHO). (2010). Concise International Chemical Assessment Document 64: Ethanol.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ilo.org/es  " target="_blank" rel="noopener noreferrer") La 20.ª Reunión Regional Americana de la OIT concluye con la adopción de la Declaración de Punta Cana




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=15igHDXNXTM " target="_blank" rel="noopener noreferrer") EXÁMENES MÉDICOS OCUPACIONALES PROTEGER IPS. (2019, 21 de febrero). Riesgo químico [ HIGIENE INDUSTRIAL 💉 ] [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
