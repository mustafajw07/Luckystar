import Card from "../Card";
import everyday from "../assets/kitchen/everyday.png"
import wicker from "../assets/kitchen/wicker.png"

function Kitchen() {
  return (
    <div className="my-4">
    <div className="row justify-content-center">
      <h3 id="product-heading">Kitchen Accesories</h3>
      <Card title="Everyday" img={everyday} link="everyday"/>
      <Card title="Wicker Basket" img={wicker} link="wicker"/>
    </div>
  </div>
  );
}

export default Kitchen;
