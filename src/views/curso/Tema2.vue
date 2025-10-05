<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Plaguicidas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Los plaguicidas son sustancias químicas diseñadas para prevenir, eliminar o reducir la presencia de organismos considerados plagas, como insectos, hongos, malezas, roedores y otros agentes que pueden afectar la salud, la producción agrícola o la integridad de los ecosistemas. Desde su descubrimiento y uso inicial, los plaguicidas han desempeñado un papel fundamental en la modernización de la agricultura, permitiendo incrementar la productividad y la eficiencia de los cultivos, así como en la salud pública, al reducir la incidencia de enfermedades transmitidas por vectores como mosquitos, garrapatas y otros organismos.
        .bg-color-9.p-5(data-aos="fade-left")
          p El uso intensivo y, en muchos casos, descontrolado de estos productos ha llevado a una dependencia creciente y a una serie de problemas asociados, tanto para la salud humana como para la biodiversidad.
          p La exposición a plaguicidas puede ocurrir a través de diversas rutas, incluyendo la inhalación de vapores, el contacto dérmico, la ingestión de alimentos contaminados y la exposición ambiental.
          p.mb-0 Estos compuestos pueden acumularse en el suelo, el agua y los tejidos biológicos, generando efectos nocivos que pueden manifestarse a corto y largo plazo

    p.mb-5 Este escenario plantea numerosos desafíos en la gestión y regulación del uso de plaguicidas, especialmente en el contexto de una creciente conciencia sobre los impactos ecológicos y sanitarios asociados. La toxicidad de estas sustancias puede afectar no solo a los organismos considerados plagas, sino también a especies no objetivo, incluyendo polinizadores, aves, peces y otros componentes vitales de los ecosistemas.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Clasificación de los plaguicidas
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los plaguicidas se clasifican de diversas formas, dependiendo de distintos criterios que permiten comprender mejor su naturaleza, uso y potencial impacto en el medio ambiente y la salud humana. Según su finalidad, se dividen en insecticidas, herbicidas, fungicidas, nematicidas, acaricidas, rodenticidas, entre otros, cada uno dirigido a controlar un grupo específico de organismos nocivos para las plantas, animales o seres humanos. Por ejemplo, los insecticidas se emplean para eliminar insectos plaga, mientras que los herbicidas están destinados a controlar las malas hierbas que compiten con los cultivos.
        p Por su composición química, los plaguicidas pueden clasificarse en diferentes grupos, tales como organofosforados, carbamatos, piretroides y organoclorados. 
    
        .bg-color-8.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los organofosforados y carbamatos son conocidos por su acción sobre el sistema nervioso de los insectos, pero también presentan riesgos para la salud humana si no se manejan adecuadamente. Los piretroides, derivados de compuestos naturales como la piretrina, ofrecen una mayor selectividad y menor persistencia en el ambiente, aunque también pueden tener efectos adversos.
        p Los organoclorados, como el DDT, aunque efectivos, son altamente persistentes y bioacumulativos, por lo que su uso está restringido o prohibido en muchos países (Casarett & Doull, 2013).
        p Otra forma de clasificación agrupa a los plaguicidas en categorías según su origen y naturaleza:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7
              h5 Plaguicidas químicos sintéticos
              p Son aquellos producidos industrialmente mediante procesos químicos, diseñados para maximizar su eficacia y duración en el ambiente. Estos compuestos suelen tener una alta potencia y una vida útil prolongada, pero también pueden implicar riesgos ambientales y para la salud humana, especialmente si no se manejan con precaución.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7
              h5 Bioplaguicidas
              p Incluyen sustancias naturales, como microorganismos (por ejemplo, bacterias, virus o hongos que atacan plagas específicas) o extractos vegetales (como neem o piretros). Estos productos son considerados más ecológicos, dado que tienden a ser específicos en su acción y a tener menor impacto en otros organismos no objetivo, contribuyendo así a un manejo integrado de plagas más sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Plaguicidas biológicos
              p Se refieren a enemigos naturales de las plagas, como depredadores, parásitos o patógenos que controlan las poblaciones de organismos dañinos de manera natural. La utilización de estos agentes forma parte de estrategias de manejo integrado de plagas (MIP), promoviendo métodos de control más respetuosos con el medio ambiente y disminuyendo la dependencia de productos químicos.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Es importante destacar que la clasificación de los plaguicidas no solo ayuda a entender sus características y riesgos asociados, sino que también orienta en la selección de las estrategias de control más adecuadas y sostenibles, considerando aspectos ecológicos, económicos y de salud pública. La correcta identificación y manejo de estos productos es fundamental para minimizar su impacto negativo y promover prácticas agrícolas y de control de plagas más responsables y efectivas.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Efectos en la salud humana
    
    .bg-full-width.bg-color-10.mb-5
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-8
            AcordionA(tipo="b")
              .div(titulo="Vías de exposición")
                p La exposición humana a plaguicidas puede ocurrir principalmente a través de tres vías: inhalación, ingestión o contacto dérmico. La inhalación sucede cuando los vapores o partículas suspendidas en el aire son inhalados, lo cual es frecuente durante la aplicación de pesticidas en campos agrícolas o en ambientes cerrados sin la adecuada protección. 
                p La ingestión puede ocurrir por ingestión accidental de alimentos, agua o manos contaminadas con residuos de plaguicidas, especialmente en comunidades rurales donde la regulación y la higiene pueden ser deficientes. Por último, el contacto dérmico sucede cuando la piel entra en contacto directo con sustancias químicas durante la manipulación, mezcla, carga o aplicación de plaguicidas. Los trabajadores agrícolas, en particular, representan el grupo de mayor riesgo debido a su exposición frecuente y en condiciones que a menudo no permiten el uso adecuado de equipo de protección personal, lo que incrementa su vulnerabilidad. Estos trabajadores están en contacto directo con los plaguicidas durante largos periodos, aumentando la probabilidad de absorción y, por ende, de efectos adversos en su salud (García et al., 2019). Además, en comunidades cercanas a zonas de fumigación o en áreas donde la regulación del uso de plaguicidas es limitada, también se ha observado una exposición involuntaria en la población general, incluyendo niños y personas mayores.

        
              .div(titulo="Efectos agudos")
                p Los efectos agudos de la exposición a plaguicidas pueden manifestarse rápidamente tras una exposición significativa. Entre los síntomas más comunes se encuentran cefalea, mareo, náuseas, vómitos, diarrea, debilidad muscular y convulsiones en casos severos. 
                p En situaciones extremas, la exposición puede conducir a la pérdida del conocimiento, daños neurológicos permanentes e incluso la muerte. Muchos insecticidas organofosforados, por ejemplo, actúan inhibiendo la enzima acetilcolinesterasa, una enzima esencial para la terminación de la transmisión nerviosa. La inhibición de esta enzima provoca una acumulación excesiva de acetilcolina en las sinapsis, lo que resulta en efectos colinérgicos severos, incluyendo espasmos musculares, dificultades respiratorias, hiperhidrosis y alteraciones en la función cardiovascular (Ecobichon, 2001). La intoxicación aguda requiere atención médica inmediata para prevenir daños irreversibles o fatales, y en muchos casos, la administración de antídotos como la pralidoxima o atropina, es fundamental para revertir los efectos tóxicos.

        
              .div(titulo="Efectos crónicos")
                p La exposición prolongada o repetida a plaguicidas ha sido vinculada a una serie de problemas de salud a largo plazo. Numerosos estudios científicos han establecido relaciones entre la exposición crónica y el desarrollo de diferentes tipos de cáncer, como linfoma no Hodgkin, leucemia y cáncer de mama. Además, se han observado alteraciones en el sistema endocrino, incluyendo disfunciones hormonales y alteraciones en la reproducción, que pueden afectar la fertilidad y el equilibrio hormonal general. También se han reportado trastornos neurológicos, como pérdida de memoria, déficits cognitivos, Parkinson y otros movimientos anormales, que parecen estar relacionados con la neurotoxicidad de ciertos plaguicidas. Las enfermedades respiratorias, como asma y bronquitis crónica, también se han asociado con la exposición a largo plazo, especialmente en agricultores y trabajadores rurales. 
                p La exposición prenatal a plaguicidas es especialmente preocupante, puesto que se ha documentado que puede afectar el desarrollo neurológico de los niños en gestación, provocando bajo peso al nacer, retrasos en el desarrollo cognitivo y alteraciones en la conducta infantil (Mostafalou & Abdollahi, 2013; Bouchard et al., 2011). Estos efectos subclínicos y clínicos evidencian la importancia de limitar la exposición y promover políticas de protección y regulación efectivas.

        
              .div(titulo="Poblaciones vulnerables")
                p Las poblaciones más vulnerables ante los efectos de los plaguicidas son los niños, las mujeres embarazadas y los trabajadores agrícolas, aunque otros grupos también pueden estar en riesgo. Los niños presentan una menor capacidad de detoxificación debido a su sistema en desarrollo, además de tener una mayor proporción de superficie corporal en relación con su peso, lo que favorece una mayor absorción dérmica de sustancias químicas. 
                p Además, su comportamiento, como llevarse las manos a la boca o jugar en suelos contaminados, aumenta su exposición potencial (Sanborn et al., 2004). Las mujeres embarazadas también constituyen un grupo de especial preocupación, porque la exposición a ciertos plaguicidas puede atravesar la placenta y afectar el desarrollo fetal, aumentando el riesgo de malformaciones congénitas, bajo peso al nacer y alteraciones neurológicas en el bebé. Por otra parte, los trabajadores agrícolas enfrentan riesgos constantes debido a la exposición directa en la manipulación y aplicación de plaguicidas, frecuentemente en condiciones que no garantizan la protección adecuada, como la falta de equipo de protección personal, la exposición en horarios de alta temperatura y la proximidad a zonas fumigadas. La vulnerabilidad de estos grupos requiere la implementación de medidas preventivas, campañas de sensibilización y regulaciones estrictas para reducir los riesgos asociados y proteger la salud pública en general.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Efectos de los plaguicidas en el medio ambiente
    
    p.mb-5 Los efectos de los plaguicidas en el medio ambiente, son:


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Contaminación del agua
              p Los plaguicidas pueden llegar a los cuerpos de agua por diversos mecanismos, principalmente a través de la escorrentía superficial tras lluvias o riegos intensivos, así como por lixiviación que permite su desplazamiento profundo en el suelo hacia acuíferos subterráneos. Según la FAO (2021), numerosos ríos y acuíferos en zonas agrícolas presentan residuos de plaguicidas por encima de los niveles permitidos, afectando tanto a humanos como a fauna acuática. Esta contaminación puede afectar la biodiversidad acuática, provocando la muerte de peces y otros organismos, además de alterar los ciclos ecológicos y la calidad del agua para consumo humano y actividades recreativas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Contaminación del suelo
              p Los residuos de plaguicidas alteran significativamente la biodiversidad del suelo, afectando la comunidad de microorganismos responsables de procesos bioquímicos fundamentales, como la descomposición de materia orgánica, la fijación de nitrógeno y la mineralización de nutrientes. Esta alteración reduce la actividad microbiana, disminuye la fertilidad del suelo y puede generar una acumulación de compuestos tóxicos que dificultan el crecimiento de cultivos. Además, la persistencia de algunos plaguicidas en el suelo puede llevar a su bioacumulación en plantas y animales, agravando los efectos en el ecosistema (Aktar, Sengupta & Chowdhury, 2009).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Contaminación del aire
              p Los procesos de aplicación aérea y la volatilización de plaguicidas contribuyen a la contaminación atmosférica, afectando no solo las áreas próximas a los campos agrícolas sino también regiones alejadas debido a la deriva del viento. Estudios muestran que plaguicidas como el clorpirifos pueden ser transportados por el viento a más de 1 km del sitio de aplicación, afectando la calidad del aire y exponiendo a comunidades cercanas a riesgos para la salud (Bradman et al., 2011). La inhalación de estos compuestos puede causar problemas respiratorios, irritaciones y efectos tóxicos a largo plazo en humanos y animales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Impacto en la fauna
              p El uso intensivo de plaguicidas ha sido vinculado con la disminución de polinizadores claves, como las abejas, que desempeñan un papel fundamental en la polinización de cultivos y la conservación de la biodiversidad (Goulson, 2013). Además, muchas especies de aves mueren tras ingerir semillas tratadas o presas contaminadas, afectando las cadenas alimenticias. Mamíferos y reptiles también pueden verse afectados por la bioacumulación de tóxicos en sus tejidos, lo que genera problemas reproductivos, alteraciones en el comportamiento y mortalidad, poniendo en riesgo la estabilidad de los ecosistemas naturales y agrícolas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Resistencia y desequilibrios ecológicos
              p La exposición constante y repetida a los plaguicidas favorece la selección de poblaciones de plagas resistentes, lo que obliga a aplicar dosis mayores o a recurrir a compuestos más tóxicos y persistentes. Este fenómeno contribuye a desequilibrios en los agroecosistemas, alterando las relaciones naturales entre predadores, plagas y plantas. Además, la resistencia puede generar ciclos de uso más intensivos de químicos, incrementando la contaminación ambiental y afectando la biodiversidad no objetivo. Estos cambios pueden derivar en una reducción de la resiliencia ecológica y en la pérdida de servicios ecosistémicos esenciales para la agricultura y la salud del medio ambiente (Pimentel, 2005).




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/102927 " target="_blank" rel="noopener noreferrer") Mastandrea, C. (2005). Hidrocarburos aromáticos policíclicos. Riesgos para la salud y marcadores biológicos: ( ed.). Scielo Argentina. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40705" target="_blank" rel="noopener noreferrer") Martínez, R. R. Jaramillo Juárez, F. (Coord.) & Rincón Sánchez, A. R. (Coord.). (2009). Toxicología ambiental: ( ed.). Universidad Autónoma de Aguascalientes.  
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.aetox.es/  " target="_blank" rel="noopener noreferrer") Asociación Española de Toxicología  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ASSxU-GKqn4" target="_blank" rel="noopener noreferrer") Canal UGT - UGT de Catalunya. (2018, 22 de octubre). Exposición a contaminantes químicos [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
