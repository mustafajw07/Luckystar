import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import BabaBlk from "../babatele/BabaBlk";
import blk from "../assests/baba/blk.png"

function Baba() {
  return (
    <>
    <Header />
    <div className="row justify-content-center">
      <h1 id="brand">Baba</h1>
        <BabaBlk title = "telescopic channel" description = "regular black" gst = "18% - Gst Extra" img = {blk}/>
    </div>
    <Footer />
    </>
  );
}

export default Baba;
