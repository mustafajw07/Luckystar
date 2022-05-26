import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import tandem1 from "../assests/everyday/tandem1.png"
import tandem2 from "../assests/everyday/tandem2.png"
import dee from "../assests/everyday/dee.png"
import blind from "../assests/everyday/blind.png"
import cup from "../assests/everyday/cup.png"
import bowl from "../assests/everyday/bowl.png"
import plate from "../assests/everyday/plate.png"

function Everyday() {
   return (
    <>
    <Header />
    <div className="row justify-content-center">
      <h1 id="brand">EveryDay</h1>
        <Card title="Tandem Pantry Pull Out Solid Base" description="Size :- 564*460*1250-1450" price="MRP:- 20033/-" img={tandem1} dis="Less :- 35%"/>
        <Card title="Tandem Pantry Pull Out Solid Base" description="Size :- 564*460*1850*2050" price="MRP:- 23522/-" img={tandem2} dis="Less :- 35%"/>
        <Card title="Dee Tray Corner Solid Base" description="Size :- 714*450*700" price="MRP:- 8888/-" img={dee} dis="Less :- 35%"/>
        <Card title="Blind Corner Pull Out Solid Base" description="Size :- 664*500*700" price="MRP:- 18185/-" img={blind} dis="Less :- 35%"/>
        <Card title="Cup and Saucer Insert for Drawer Baske" description="Size :- 128*482*75" price="MRP:- 331/-" img={cup} dis="Less :- 35%"/>
        <Card title="Bowl Insert for Drawer Basket" description="Size :- 128*482*75" price="MRP:- 272/-" img={bowl} dis="Less :- 35%"/>
        <Card title="Big Plate Insert for Drawer Basket" description="Size :- 160*482*130" price="MRP:- 442/-" img={plate} dis="Less :- 35%"/>
    </div>
    <Footer />
    </>
  );
}

export default Everyday;
