import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import floorspring from "../assests/hemco/floorspring.png"
import tbp from "../assests/hemco/tbp.png"
import glassp from "../assests/hemco/glassp.png"
import doorc from "../assests/hemco/doorc.png"
import cdoorcloser from "../assests/hemco/floorspring.png"

function Hemco() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Hemco</h1>
            <Card title = "Floor spring" description = "Floor spring 150KG" price = "MRP:- 4450/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {floorspring}/>
            <Card title = "Floor spring" description = "Floor spring 90KG" price = "MRP:- 3120/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {floorspring}/>
            <Card title = "Top patch" description = "Top patch fitting" price = "MRP:- 890/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {tbp}/>
            <Card title = "Bottom patch" description = "Bottom patch fitting" price = "MRP:- 890/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {tbp}/>
            <Card title = "Glass pivot" description = "Glass pivot ss" price = "MRP:- 570/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {glassp}/>
            <Card title = "Door closer" description = "Door closer 45KG" price = "MRP:- 1140/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {doorc}/>
            <Card title = "Door closer" description = "Door closer 85KG" price = "MRP:- 1940/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {doorc}/>
            <Card title = "Concealed door closer" description = "Concealed door closer 60KG" price = "MRP:- 3200/-" dis = "Dicount :- 45%" gst = "18% - Gst Extra" img = {cdoorcloser}/>
        </div>
        <Footer />
        </>
      );
}

export default Hemco;
