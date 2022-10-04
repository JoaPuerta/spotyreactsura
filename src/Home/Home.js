import "./Home.css";
import {SubMenu} from '../SubMenu/SubMenu.js'
import {Footer} from '../Footer/Footer.js'

export function Home() {

    let descripcionBanda="Carolina Giraldo Navarro nació el 14 de febrero de 1991 en Medellín, Colombia, su padre es músico. Desde temprana edad tuvo interés por la música. Estudió en el colegio Calasanz Femenino. En 2006 participó en el reality show Factor X, y vio en él una oportunidad de surgir en el mundo de la música. Gracias a su participación obtuvo su primer contrato discográfico con Flamingo Records (Colombia) & Diamond Music (Puerto Rico) y eligió Karol G como su nombre artístico. En su primer año fue invitada por DJ Kio a ser telonera de los conciertos de Don Omar en la ciudad de Cartagena. En una ocasión J Balvin se presentó en la fiesta de quince años de una prima suya, y cantó una canción con él. Estudió música en la Universidad de Antioquia, y mercadotecnia en Nueva York durante tres meses."

  return (
    <>
      <div className="banner"></div>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">KAROL G</h1>
              <p className="text-center">{descripcionBanda}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubMenu></SubMenu>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
