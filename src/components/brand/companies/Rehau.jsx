import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import pvc from "../assests/rehau/pvc.png"
import alu from "../assests/rehau/alu.png"
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
            <Card title="Pvc easy line sliver" description="SIZE :- 600*1350" img={pvc} price="MRP:- 21500/-"/>
            <Card title="Pvc easy line sliver" description="SIZE :- 900*1350" img={pvc} price="MRP:- 27000/-"/>
            <Card title="Metallic line aluminium finish" description="SIZE :- 600*1500" img={alu} price="MRP:- 33500/-"/>
            <Card title="Metallic line aluminium finish" description="SIZE :- 900*1500" img={alu} price="MRP:- 39500/-"/>
          <h3 className="py-3" id="brand">Kitchen components</h3>
          <Card title="Plint cover" description="SIZE :- 100mm" img={plintcover} price="MRP:- 400/-"/>
          <Card title="Plint leg(Round)" description="SIZE :- 100mm" img={roundleg} price="MRP:- 40/-"/>
          <Card title="Plint leg(Round)" description="SIZE :- 150mm" img={roundleg} price="MRP:- 50/-"/>
          <Card title="Plint leg(Triangular)" description="SIZE :- 100mm" img={trileg} price="MRP:- 53/-"/>
          <Card title="Plint leg(Triangular)" description="SIZE :- 150mm" img={trileg} price="MRP:- 57/-"/>
          <Card title="Plint connector - 90 Degree" description="SIZE :- 100mm" img={pcd} price="MRP:- 55/-"/>
          <Card title="Plint connector - straight" description="SIZE :- 100mm" img={pcs} price="MRP:- 49/-"/>
          <Card title="End cap" description="SIZE :- 100mm" img={endcap} price="MRP:- 24/-"/>
          <Card title="Snap fitting" img={snap} price="MRP:- 5.50/-"/>
        </div>
        <Footer />
        </>
      );
}

export default Rehau;
