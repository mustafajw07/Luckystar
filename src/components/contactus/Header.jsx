import { Link } from "react-router-dom";
import logo from "../../assests/logos/starlogo.png"

function Header() {
return (
<header>
    <nav className="navbar" id="navbar-header">
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Link  to="/"><span className="text-center" to="/"><img id="logo" src={logo}
                            alt="logo" /></span></Link>
                </div>
            </div>
        </div>
    </nav>
</header>
);
}

export default Header;