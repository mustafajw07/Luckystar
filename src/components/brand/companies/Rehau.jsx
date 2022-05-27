import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import pvc from "../assests/rehau/pvc.png"
import santino from "../assests/rehau/santino.png"
import black from "../assests/rehau/black.png"
import plintcover from "../assests/rehau/pcover.png"
import roundleg from "../assests/rehau/roundleg.png"
import trileg from "../assests/rehau/trileg.png"
import pcd from "../assests/rehau/pcd.png"
import pcs from "../assests/rehau/pcs.png"
import endcap from "../assests/rehau/endcap.png"
import snap from "../assests/rehau/snap.png"




function Rehau() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Rehau</h1>
          <h3 className="py-3" id="brand">Rolling shutters</h3>
            <Card title="Pvc easy line sliver" description="SIZE :- 600*1350" img={pvc} price="MRP:- 21500/-" dis="Discount :- 35%" gst= "18% - Gst Extra"/>
            <Card title="Pvc easy line sliver" description="SIZE :- 900*1350" img={pvc} price="MRP:- 27000/-" dis="Discount :- 35%" gst= "18% - Gst Extra"/>
            <Card title="Vetro line santino" description="SIZE :- 600*1500" img={santino} price="MRP:- 90000/-" dis="Discount :- 35%" gst= "18% - Gst Extra"/>
            <Card title="Vetro line black" description="SIZE :- 600*1500" img={black} price="MRP:- 90000/-" dis="Discount :- 35%" gst= "18% - Gst Extra"/>
          <h3 className="py-3" id="brand">Kitchen components</h3>
          <Card title="Plint cover" description="SIZE :- 100mm" img={plintcover} price="MRP:- 400/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Plint leg(Round)" description="SIZE :- 100mm" img={roundleg} price="MRP:- 40/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Plint leg(Round)" description="SIZE :- 150mm" img={roundleg} price="MRP:- 50/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Plint leg(Triangular)" description="SIZE :- 100mm" img={trileg} price="MRP:- 53/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Plint leg(Triangular)" description="SIZE :- 150mm" img={trileg} price="MRP:- 57/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Plint connector - 90 Degree" description="SIZE :- 100mm" img={pcd} price="MRP:- 55/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Plint connector - straight" description="SIZE :- 100mm" img={pcs} price="MRP:- 49/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="End cap" description="SIZE :- 100mm" img={endcap} price="MRP:- 24/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
          <Card title="Snap fitting" img={snap} price="MRP:- 5.50/-" dis="Discount :- 35%" gst="18% Gst Extra"/>
        </div>
        <Footer />
        </>
      );
}

export default Rehau;
