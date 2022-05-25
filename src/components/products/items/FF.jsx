import Card from "../Card";
import ebco from "../assets/ff/ebco.png"
import hafele from "../assets/ff/hafele.png"
import hettich from "../assets/ff/hettich.png"

function FF() {
return (
<div className="my-4">
    <div className="row justify-content-center">
        <h3 id="product-heading">Furniture Fittings And Accessories</h3>
        <Card title="Ebco"
            img={ebco} link="ebco"/>
        <Card title="Hettich" 
            img={hettich} link="hettich" />
        <Card title="Hafele"
            img={hafele} link="hafele" />
    </div>
</div>
);
}

export default FF;