import logo from "../Images/cwi.png";

const Upper =()=>{
    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded">
            <div className="container-fluid">
            <a class="navbar-brand" href="#">
            <img src={logo} height="40"  alt="" /> CWIPEDIA
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.cwipedia.com/itr">Register Here</a>
                    </li>
                </ul>

    </div>
  </div>
</nav>
        </>
    )
}

export default Upper;
