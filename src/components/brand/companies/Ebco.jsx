import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import tray from "../assests/ebco/tray.png"
import table from "../assests/ebco/table.png"
import bf from "../assests/ebco/bf.png"
import sofa from "../assests/ebco/sofa.png"
import multi from "../assests/ebco/multi.png"
import bin from "../assests/ebco/bin.png"
import dc from "../assests/ebco/dc.png"
import ftable from "../assests/ebco/ftable.png"

function Ebco() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Ebco</h1>
            <Card title = "Keyboard tray" description = "300mm W/o mouse" price = "MRP:- 1892/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tray}/>
            <Card title = "Table bracket" description = "400mm" price = "MRP:- 1080/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {table}/>
            <Card title = "Pro - Lift Electric Bed Fittings" description = "Heavy Duty with Remote Control" price = "MRP:- 19494/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {bf}/>
            <Card title = "Pro lift Sofa-Bed fittings" description = "" price = "MRP:- 1654/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {sofa}/>
            <Card title = "Multi Purpose Lock - Round" description = "" price = "MRP:- 204/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {multi}/>
            <Card title = "Door Closer" description = "Door Closer 45 kg" price = "MRP:- 1444/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {dc}/>
            <Card title = "Pull Out Waste Bin" description = "40 litre (20 x 2)" price = "MRP:- 7612/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {bin}/>
            <Card title = "Folding Utility Table" description = "600mm" price = "MRP:- 2760/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {ftable}/>
        </div>
        <Footer />
        </>
      );
}

export default Ebco;
