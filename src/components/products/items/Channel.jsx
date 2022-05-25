import Card from "../Card";
import casa from "../assets/channel/casa.png"
import baba from "../assets/channel/baba.png"
import hepo from "../assets/channel/hepo.png"

function Channel() {
return (
<div className="my-4">
    <div className="row justify-content-center">
        <h3 id="product-heading">Telescopic Channel</h3>
        <Card title="Casa"
            img={casa} link="casa"/>
        <Card title="Baba"
            img={baba} link="baba"/>
        <Card title="Hepo" 
            img={hepo} link="hepo"/>
    </div>
</div>
)
;
}

export default Channel;