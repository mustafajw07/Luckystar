import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import HepoBlk from "../hepotele/HepoBlk"
import HepoSoft from "../hepotele/HepoSoft"
import blk from "../assests/hepo/blk.png"
import soft from "../assests/hepo/soft.png"

function Hepo() {
  return (
    <>
    <Header />
    <div className="row justify-content-center">
      <h1 id="brand">Hepo</h1>
      <HepoBlk title = "telescopic channel" description = "regular black" gst = "Gst - 18% Extra" dis = "Discount :- 35%" img = {blk}/>
      <HepoSoft title = "telescopic channel" description = "soft close zinc" gst = "Gst - 18% Extra" dis = "Discount :- 35%" img = {soft}/>
    </div>
    <Footer />
    </>
  );
}

export default Hepo;
