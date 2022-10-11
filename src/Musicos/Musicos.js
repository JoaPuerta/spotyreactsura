import  { Footer } from "../Footer/Footer.js"

export function Musicos (){

    //un arreglo de objetos es formato comun al consumir un api 
    
    let musicos=[
        {
            nombre:"Se lanzó internacionalmente con la canción «301» junto con el cantante Reykon el líder en 2012, posicionado en el top de varias estaciones de radios y canales de televisión,y le permitió realizar conciertos en países como Aruba, Colombia, Ecuador y Estados Unidos.Obtuvo mayor reconocimiento en 2013, cuando lanzó la canción «Amor de dos» junto con Nicky Jam.En 2016, luego de que lanzó varios sencillos, firmó un contrato con la discográfica Universal Music Latin Entertainment, y hubo un ascenso en su carrera.",
            rol:"2007-2014",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/etapa1.jpg?alt=media&token=f3b36001-5511-492e-a13a-a85fc70e00e9"
        },
        {
            nombre:"Durante 2016, obtuvo mayor reconocimiento musical, y lanzó diferentes sencillos. El sencillo «Casi nada» alcanzó el puesto 33 de Hot Latin Songs, y su sencillo «Hello» con Ozuna el puesto 39. En «Hello», ella mostró un lado más atrevido, y comentó que «cuenta con un toque extra de sensualidad». También tuvo colaboraciones con Sebastián Yatra en «Lo que siento por ti» y Daddy Yankee en «Código de amor».",
            rol:"2015-2020",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/etapa2.png?alt=media&token=24060401-29db-42ac-96af-1c2038a92f0b"
        },
        {
            nombre:"",
            rol:"2020-2022",
            url:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/etapa3.jpg?alt=media&token=4683449a-2f92-4e25-ba7b-5d7b1901b152"
        },
    ]

    let conciertoMemorables=[
        {
            fecha:"22/05/2022",
            pais:"Colombia",
            descripcion:"En su concierto en el Movistar Arena, en Bogotá. varios momentos que quedarán en la mente,El primero de ellos fue la invitación que le hizo a Andrés Cepeda para que la acompañara en el escenario. El cantante subió a la tarima con un ramo de flores y juntos cantaron “Día tras Día",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/concierto1.jpg?alt=media&token=d11b5a24-c85c-4b3f-acc9-5eb1abde65ab",
        },
        {
            fecha:"11/06/2022",
            pais:"Mexico",
            descripcion:"Karol G no deja de sorprender a sus seguidores y en la gira que adelanta se ha propuesto llevar a icónicos artistas de los países que va visitando. Esta vez, en su paso por México, la colombiana hizo nada más y nada menos que Anahí, quien llevaba varios años sin pisar un escenario, regresara a interpretar la música de RBD. interpretar la canción 'Sálvame' que toda una generación cantó por años y sigue sin ser inolvidable",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/concierto2.jpg?alt=media&token=47bf41a6-cbba-4aec-9f28-ade35fa721e2",
        },
        {
            fecha:"23/05/2022",
            pais:"Colombia",
            descripcion:"Sorprendió con dos artistas del vallenato, Jean Carlos Centeno  y Jorge Celedón. Posteriormente aparecieron en la tarima los dos cantantes, quienes le tenían un tierno regalo a la paisa.Interpretando la reconocida canción “Un Osito Dormilón”, le dieron un enorme oso de peluche, el cual le fascinó a la cantante, quien se mostró muy feliz con el detalle. ",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/concierto3.jpg?alt=media&token=ae8b61a6-5907-43bf-b200-82906d5ec17e",
        },
        {
            fecha:"Diciembre 2021",
            pais:"Colombia",
            descripcion:"Desde hace un par de meses se conoció que Carolina Navarro Giraldo, conocida popularmente como Karol G, estaría dando un concierto en su ciudad natal, Medellín. Tras la noticia la boletería se agotó en menos de 24 horas y la organización del 'Bichota Tour' se vio obligada a abrir una fecha más para complacer a todos los antioqueños con la presentación de la representante del género urbano.",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/concierto4.jpg?alt=media&token=637ae6fe-a17d-4f83-9f8b-8ee832e25699",
        },
        {
            fecha:"Junio 2022",
            pais:"USA",
            descripcion:"Apenas comenzó su gira Strip Love Tour y Karol G ya está arrasando a nivel mundial, tanto, que ya han quedado varios momentos para el recuerdo, entre ellos, sus paseos en su Ferrari azul volador, grandes invitados y millonarias recompensas a los fans que se han destacado por ser quienes más disfrutan sus presentaciones.",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/concierto5.jpeg?alt=media&token=fd99d27b-d059-4ecf-9008-517b6ce897e0",
        },
    ]

    //mapeando un arreglo para hacer render 
    return(
        <>
        <div className="row row-clos-1 row-cols-md-4 g-3 mt-5 justify-content-center">
            {
                 musicos.map(function(musico){
                    return(
                
                        <div className="col mt-3">
                            <div className="card h-100">
                                <img src={musico.url} className="img-fluid w-100 h-100" alt="foto" />
                                <h2 className="text-center text-danger bg-dark" >{musico.rol}</h2>

                            </div>
                        </div>
                        
                    
                        
                    )
                 })
            }
        </div>
        <Footer></Footer>
        </>
    )



}