<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Hidrocarburos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, se invita a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Hidrocarburos"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    .bg-full-width.bg-color-7.mb-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Hidrocarburos
            p.mb-4(data-aos="fade-right") La comprensión de los riesgos y aplicaciones de diversos compuestos químicos es esencial para la gestión segura de entornos laborales, domésticos y ambientales. En el PDF Hidrocarburos, se analizan en detalle las propiedades, usos, toxicidad y efectos ambientales de sustancias como los hidrocarburos halogenados, alcoholes, solventes orgánicos, hidrocarburos policíclicos aromáticos, compuestos orgánicos volátiles, ftalatos y bisfenol A. Este material ofrece una visión integral que combina el conocimiento técnico con la importancia de la prevención, regulación y sustitución de compuestos peligrosos, favoreciendo una aproximación responsable hacia la protección de la salud y del medio ambiente.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Hidrocarburos
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.fao.org " target="_blank" rel="noopener noreferrer") FAO. (2021). Pesticide residues in food and the environment. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/75988 " target="_blank" rel="noopener noreferrer") Jaramillo González, F. (2006). Toxicología básica: ( ed.). Universidad Autónoma de Aguascalientes.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ritsq.org/about/attc/ " target="_blank" rel="noopener noreferrer") Red Iberoamericana de Toxicología y Seguridad Química 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=7KsaT2tVoiI" target="_blank" rel="noopener noreferrer") ProtecCyL_CIM_BSE. (2023, 24 de noviembre). “Intoxicación por gas” [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
