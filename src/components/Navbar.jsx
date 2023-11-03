import { useNavigate } from "react-router-dom";
import Ilab from './img/logo-ilab.png';

const Navbar = () => {
    const navigate = useNavigate(); 
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <img src={Ilab} alt="logo-ilab" width="100" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active m-lg-" onClick={() => navigate("/")}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate("/about")}>About Us</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => navigate("/contact")}>Contact</a> 
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col">
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-dark m-lg-3" type="submit">SIGN UP</button> 
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <form className="d-flex" role="search">
                                <button className="btn btn-primary" type="submit">LOG IN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
