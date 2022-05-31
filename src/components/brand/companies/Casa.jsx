import CasaBlk from "../../brand/casatele/CasaBlk";
import CasaSoft from "../../brand/casatele/CasaSoft";
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import blk from "../assests/casa/blk.png"
import soft from "../assests/casa/soft.png"


function Casa() {
  return (
    <>
    <Header />
    <div className="row justify-content-center">
      <h1 id="brand">Casa</h1>
        <CasaBlk title = "Telescopic channel" description = "regular black" gst = "18% - gst extra" img = {blk}/>
        <CasaSoft title = "Telescopic channel" description = " Softclose zinc" gst = "18% - gst extra" img = {soft}/>
    </div>
    <Footer />
    </>
  );
}

export default Casa;
