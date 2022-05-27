import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import nightin from "../assests/europa/nightin.png";
import maindoor from "../assests/europa/maindoor.png";
import hexa from "../assests/europa/hexa.png";
import hexa2 from "../assests/europa/hexa2.png";
import diskpadss from "../assests/europa/diskpadss.png";
import diskpadab from "../assests/europa/diskpadab.png";
import clock from "../assests/europa/clock.png";

function Europa() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Europa</h1>
            <Card title = "Night Latch" description = "Night latch Inside (IV finish)" price = "MRP:- 1630/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {nightin}/>
            <Card title = "Main door lock" description = "Knob on inside 2 Deadbolts & 1 Latchbolt (chrome finish)" price = "MRP:- 2200/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {maindoor}/>
            <Card title = "Hexabolt" description = "Hexabolt with 5 Deadbolt & 1 Latchbolt + Reversible plate handle" price = "MRP:- 6645/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {hexa}/>
            <Card title = "Hexabolt" description = "Hexabolt with 5 Deadbolt & 1 Latchbolt" price = "MRP:- 5050/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {hexa2}/>
            <Card title = "Disc pad lock" description = "Twin pack + Common key (SS)" price = "MRP:- 2430/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {diskpadss}/>
            <Card title = "Disc pad lock" description = "Twin pack + Common key" price = "MRP:- 1470/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {diskpadab}/>
            <Card title = "Cylindrical Lock" description = "Lock / Unclock on both side" price = "MRP:- 1485/-" dis = "Discount :- 32%" gst = "18% - Gst Extra" img = {clock}/>
        </div>
        <Footer />
        </>
      );
}

export default Europa;
