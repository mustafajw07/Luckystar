import React from "react";
import logo from '../../assests/logos/starlogo.png'; // with import
import { Link } from "react-router-dom";

function Navbar() {
return (
    <header>
        <nav className="navbar navbar-expand-lg" id="navbar-header">
            <div className="container">
                <Link className="navbar-brand" id="logo" to="/"><img id="logo" src={logo}
                            alt="logo" /></Link>
                <button id="nav-toggle-button" className="navbar-toggler custom-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul id="navbar-links" className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Our Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)
}

export default Navbar;