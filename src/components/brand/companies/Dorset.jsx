import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import digital from "../assests/dorset/digital.png";
import fs80 from "../assests/dorset/fs80.png";
import fs120 from "../assests/dorset/fs120.png";
import pha100 from "../assests/dorset/pha100.png";
import pha300 from "../assests/dorset/pha300.png";
import pha301 from "../assests/dorset/pha301.png";
import sm100 from "../assests/dorset/sm100.png";
import sm101 from "../assests/dorset/sm101.png";

function Dorset() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Dorset</h1>
          <Card title = "Digital lock" description = "Digital Lock BLE DG 801 MGM WITH CLOUD KEY" price = "MRP:- 47150/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {digital}/>
            <Card title = "Floor spring" description = "Floor spring 80KG" price = "MRP:- 3090/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {fs80}/>
            <Card title = "Floor spring" description = "Floor spring 120KG" price = "MRP:- 6120/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {fs120}/>
            <Card title = "Night Latch" description = "Both Side Key Model For Inside Opening (Phantom)" price = "MRP:- 2785/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {pha100}/>
            <Card title = "Trio Lock" description = "Both Side Key Model (Phantom)" price = "MRP:- 3910/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {pha300}/>
            <Card title = "Trio Lock" description = "Key and Knob Model (Phantom)" price = "MRP:- 3540/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {pha301}/>
            <Card title = "Night Latch" description = "Both Side Key Model For Out side Opening (Smart Series)" price = "MRP:- 1715/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {sm100}/>
            <Card title = "Night Latch" description = "Key and Knob Model For Out side Opening (Smart Series)" price = "MRP:- 1635/-" dis = "Discount :- 35%" gst = "18% - Gst Extra" img = {sm101}/>
        </div>
        <Footer />
        </>
      );
}

export default Dorset;
