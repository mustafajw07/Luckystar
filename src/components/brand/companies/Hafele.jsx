import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import cdc from "../assests/hafele/cdc.png"
import floors from "../assests/hafele/floors.png"
import tandem from "../assests/hafele/tandem.png"
import legra from "../assests/hafele/legra.png"

function Hafele() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Hafele</h1>
            <Card title = "CONCELED DOOR CLOSER" description = "CONCELED DOOR CLOSER 80Kg" price = "MRP:- 7625/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {cdc}/>
            <Card title = "CONCELED DOOR CLOSER" description = "CONCELED DOOR CLOSER 120KG" price = "MRP:- 28180/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {cdc}/>
            <Card title = "CONCELED DOOR CLOSER" description = "CONCELED DOOR CLOSER 150kG" price = "MRP:- 35155/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {cdc}/>
            <Card title = "FLOOR SPRING" description = "FLOOR SPRING 70kG" price = "MRP:- 7540/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra"  img = {floors}/>
            <Card title = "FLOOR SPRING" description = "FLOOR SPRING 100kG" price = "MRP:- 8555/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra"  img = {floors}/>
            <Card title = "FLOOR SPRING" description = "FLOOR SPRING 120kg" price = "MRP:- 9130/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra"  img = {floors}/>
            <Card title = "TANDOM BOX" description = "350mm * 4Inch *30kg" price = "MRP:- 6145/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tandem}/>
            <Card title = "TANDOM BOX" description = "400mm * 4Inch *30kg" price = "MRP:- 6145/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tandem}/>
            <Card title = "TANDOM BOX" description = "450mm * 4Inch *30kg" price = "MRP:- 5870/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tandem}/>
            <Card title = "TANDOM BOX" description = "500mm * 4Inch *30kg" price = "MRP:- 5870/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tandem}/>
            <Card title = "TANDOM BOX" description = "550mm * 4Inch *30kg" price = "MRP:- 6280/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tandem}/>
            <Card title = "TANDOM BOX" description = "650mm * 4Inch *30kg" price = "MRP:- 10145/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {tandem}/>
            <Card title = "LEGRA BOX" description = "450mm * 40kg" price = "MRP:- 7735/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {legra}/>
            <Card title = "LEGRA BOX" description = "500mm * 40kg" price = "MRP:- 8595/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {legra}/>
            <Card title = "LEGRA BOX" description = "550mm *40kg" price = "MRP:- 9455/-" dis = "Dicount :- 30%" gst = "18% - Gst Extra" img = {legra}/>
        </div>
        <Footer />
        </>
      );
}

export default Hafele;
