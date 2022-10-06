import './Integrantes.css'
import 'animate.css'
import WOW from 'wowjs'
import { useEffect } from 'react';


export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, []) 

  return (
    <>
    <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 zoom">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/karol%20g.jpg?alt=media&token=44c1cd50-e8f7-4221-a1ed-8a1cb834372d" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__bounceInLeft" data-bs-toggle="collapse"
        data-bs-target="#collapseExample1"/>
        </div>
        <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__bounce wow animate__bounceInRight'>
            <h2>Karol G</h2>
            <h3>Carolina Giraldo Navarro</h3>
        </div>
        </div>
        
        <div className="row mt-1">
        <div className="col-12">
          <div className="collapse" id="collapseExample1">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>

      <div className="row my-5 justify-content-center">
      <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__bounce wow animate__bounceInLeft'>
            <h2>Karol G</h2>
            <h3>Carolina Giraldo Navarro</h3>
        </div>
        <div className="col-12 col-md-4 zoom">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/karol%203.jpg?alt=media&token=5ab2ff25-9a92-400a-a53f-da2cd3ea33a7" alt="foto2" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__bounceInRight" data-bs-toggle="collapse"
        data-bs-target="#collapseExample2"/>
        </div>
        
        </div>
        
        <div className="row mt-1">
        <div className="col-12">
          <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>

   
   
    
     
    </>
  );
}
