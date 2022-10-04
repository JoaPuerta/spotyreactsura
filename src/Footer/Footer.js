export function Footer (){

    return (
        <>
            <footer className="container-fluid bg-dark text-white p-3 mt-5">

                <div className="row">
                    <div className="col-12 col-md-6 text-end">
                        <h4>&copy; Joanna P</h4>
                        <h4>Medellin</h4>
                        <h4>Aprendiz SURA</h4>
                        <h4>2022</h4>

                    </div>
                    <div className="col-12 col-md-6 mt-5 text-start border-start">
                        <a href ="https://web.whatsapp.com/" target="blank"><i className="bi bi-whatsapp fs-1"></i></a>
                        <a href="https://es-la.facebook.com/" target="blank"><i className="bi bi-facebook fs-1 ms-3"></i></a>
                        <a href="https://www.instagram.com/" target="blank"><i className="bi bi-instagram fs-1 ms-3"></i></a>
                        <a href="https://github.com" target="blank"><i className="bi bi-github fs-1 ms-3"></i></a>
                    </div>
                </div>

            </footer>
        </>
    )
}