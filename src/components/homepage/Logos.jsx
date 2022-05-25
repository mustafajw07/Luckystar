import godrejlogo from "../../assests/logos/godrejlogo.png"
import ebcologo from "../../assests/logos/ebcologo.png"
import europalogo from "../../assests/logos/europalogo.png"
import dorsetlpogo from "../../assests/logos/dorsetlogo.png"

function Logos() {
return (
    <div id="brand-logo" className="my-5">
        <div className="row d-flex align-items-center text-center">
            <div className="col-lg-3 py-3">     
        <a  href="/products/godrej"><img src={godrejlogo} alt="logo" /></a>
        </div>
        <div className="col-lg-3 py-3"> 
            <a href="/products/ebco"><img src={ebcologo} alt="logo" /></a>
            </div>
            <div className="col-lg-3 py-3"> 
            <a href="/products/europa"><img src={europalogo} alt="logo" /></a>
            </div>
            <div className="col-lg-3 py-3"> 
            <a href="/products/dorset"><img src={dorsetlpogo} alt="logo" /></a>
            </div>
        </div>
    </div>
);
}

export default Logos;