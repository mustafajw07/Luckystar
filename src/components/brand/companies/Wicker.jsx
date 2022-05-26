import Card from "../Card";
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import w1 from "../assests/wicker/w1.png"
import w2 from "../assests/wicker/w2.png"
import w3 from "../assests/wicker/w3.png"

function Wicker() {
return (
<>
    <Header />
    <div className="row justify-content-center">
        <h1 id="brand">Wicker Baskets</h1>
        <Card title = "Wicker basket" description = "Size :- 414*500*100" img= {w1} price="MRP:- 3690/-"/>
        <Card title = "Wicker basket" description = "Size :- 414*500*150" img= {w2} price="MRP:- 3870/-"/>
        <Card title = "Wicker basket" description = "Size :- 414*500*200" img= {w3} price="MRP:- 4050/-"/>
        <Card title = "Wicker basket" description = "Size :- 564*500*100" img= {w1} price="MRP:- 4140/-"/>
        <Card title = "Wicker basket" description = "Size :- 564*500*150" img= {w2} price="MRP:- 4320/-"/>
        <Card title = "Wicker basket" description = "Size :- 564*500*200" img= {w3} price="MRP:- 4500/-"/>
    </div>
    <Footer />
</>
);
}

export default Wicker;