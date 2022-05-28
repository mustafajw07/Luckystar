import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import inno from "../assests/hettich/inno.png"
import arci from "../assests/hettich/arci.png"
import archi from "../assests/hettich/archi.png"
import wicker from "../assests/hettich/wicker.png"


function Hettich() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Hettich</h1>
            <Card title = "Drawer System InnoTech" description = "InnoTech- 350 mm (30 Kg) Full Extn. Silent" price = "MRP:- 5676/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {inno}/>
            <Card title = "Drawer System InnoTech" description = "InnoTech- 420 mm (50 Kg) Full Extn. Silent" price = "MRP:- 6730/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {inno}/>
            <Card title = "Drawer System InnoTech" description = "InnoTech- 350 mm (30 Kg) Full Extn. Silent + Pot & pan drawer with railing," price = "MRP:- 6454/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {inno}/>
            <Card title = "Drawer System InnoTech" description = "InnoTech- 420 mm (50 Kg) Full Extn.Silent + Pot & pan drawer with railing," price = "MRP:- 7508/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {inno}/>
            <Card title = "Drawer System ArciTech" description = "ArciTech Silver 450 mm, Height 94 mm, 40 kg" price = "MRP:- 5876/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {arci}/>
            <Card title = "Drawer System ArciTech" description = "ArciTech Silver 500 mm, Height 94 mm, 70 kg" price = "MRP:- 6812/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {arci}/>
            <Card title = "Drawer System ArciTech" description = "ArciTech White 450 mm, Height 94 mm, 40 kg" price = "MRP:- 6112/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {archi}/>
            <Card title = "Drawer System ArciTech" description = "ArciTech White 500 mm, Height 94 mm, 70 kg" price = "MRP:- 7048/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {archi}/>
            <Card title = "Wicker Baskets" description = "320 x 500 x 12" price = "MRP:- 9259/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {wicker}/>
            <Card title = "Wicker Baskets" description = "420 x 500 x 120" price = "MRP:- 9717/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {wicker}/>
            <Card title = "Wicker Baskets" description = "520 x 500 x 120" price = "MRP:- 10329/-" dis = "Dicount :- 25%" gst = "18% - Gst Extra" img = {wicker}/>
        </div>
        <Footer />
        </>
      );
}
export default Hettich;
