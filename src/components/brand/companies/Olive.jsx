import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import pvcsliver from "../assests/olive/pvcsliver.png"
import pvcwhite from "../assests/olive/pvcwhite.png"
import pvcblack from "../assests/olive/pvcblack.png"
import glassfrosted from "../assests/olive/glassfrosted.png"
import glassblack from "../assests/olive/glassblack.png"  
import glasswhite from "../assests/olive/glasswhite.png"  

function Olive() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Olive</h1>
          <Card title="Rolling shutter sliver (PVC)" description="SIZE :- 600*1400" img={pvcsliver} price="MRP:- 14500/-" dis="Discount :- 35%" gst="18% - gst Extra"/>
          <Card title="Rolling shutter black (PVC)" description="SIZE :- 600*1400" img={pvcblack} price="MRP:- 14500/-" dis="Discount :- 35%" gst="18% - gst Extra"/>
          <Card title="Rolling shutter white (PVC)" description="SIZE :- 600*1400" img={pvcwhite} price="MRP:- 14500/-" dis="Discount :- 35%" gst="18% - gst Extra"/>
          <Card title="Rolling shutter frosted (GLASS)" description="SIZE :- 600*1400" img={glassfrosted} price="MRP:- 30200/-" dis="Discount :- 35%" gst="18% - gst Extra"/>
            <Card title="Rolling shutter black (GLASS)" description="SIZE :- 600*1400" img={glassblack} price="MRP:- 30200/-" dis="Discount :- 35%" gst="18% - gst Extra"/>
            <Card title="Rolling shutter white (GLASS)" description="SIZE :- 600*1400" img={glasswhite} price="MRP:- 27900/-" dis="Discount :- 35%" gst="18% - gst Extra"/>
        </div>
        <Footer />
        </>
      );
}

export default Olive;
