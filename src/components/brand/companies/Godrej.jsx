import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import navtal from "../assests/godrej/navtal.png"
import twinab from "../assests/godrej/twinab.png"
import triab from "../assests/godrej/triab.png"
import rimin from "../assests/godrej/rimin.png"
import rimout from "../assests/godrej/rimout.png"
import nightin from "../assests/godrej/nightin.png"
import nightout from "../assests/godrej/nightout.png"
import multi from "../assests/godrej/multi.png"

function Godrej() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Godrej</h1>
            <Card title="Nav-tal lock" description="Nav-tal 7 Levers Hardened (4 keys)" price="MRP:- 860/-" dis="Discount :- 35%" gst="18% - Gst Extra" img={navtal}/>
            <Card title="Twinbolt" description="Ultra XL+ Twinbolt 1CK AB" price="MRP:- 2890/-" dis="Discount :- 35%" gst="18% - Gst Extra" img={rimin}/>
            <Card title="Tribolt" description="Ultra XL+ Tribolt 1CK AB" price="MRP:- 3800/-" dis="Discount :- 35%" gst="18% - Gst Extra" img={rimout}/>
            <Card title="Rim lock" description="Rim Lock 1CK (Inside Opening)" price="MRP:- 1820/-" dis="Discount :- 35%" gst="18% - Gst Extra" img={twinab}/>
            <Card title="Rim lock" description="Rim Lock 1CK (Outside Opening)" price="MRP:- 1800/-" dis="Discount :- 35%" gst="18% - Gst Extra" img={triab}/>
            <Card title="Night latch" description="Premium Night Latch - Brushed Steel (Inside Opening)" price="MRP:- 1610" dis="Discount :- 35%" gst="18% - Gst Extra" img={nightin}/>
            <Card title="Night latch" description="Premium Night Latch - Brushed Steel (Outside Opening)" price="MRP:- 1590" dis="Discount :- 35%" gst="18% - Gst Extra" img={nightout}/>
            <Card title="Multi Purpose Lock" description="Multi Purpose Lock with Reversible Key" price="MRP:- 250/-" dis="Discount :- 35%" gst="18% - Gst Extra" img={multi}/>
        </div>
        <Footer />
        </>
      );;
}

export default Godrej;
