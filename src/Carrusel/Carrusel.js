export function Carrusel() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/karol%202.jpg?alt=media&token=c3b144f8-6e28-462e-9467-a6ae66489be9" className="w-100" height="900"  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/karol%201.jpg?alt=media&token=3e6bb230-7404-43ef-a65a-1e9e84efd56b" className="w-100" height="900" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/spotifyarts-5c791.appspot.com/o/karol%203.jpg?alt=media&token=5ab2ff25-9a92-400a-a53f-da2cd3ea33a7" className="w-100" height="900" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>

  );
}
