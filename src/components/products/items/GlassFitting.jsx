import Card from "../Card";
import hemco from "../assets/gf/hemco.png"
import palladium from "../assets/gf/palladium.png"
import flora from "../assets/gf/flora.png"
// import fab from "../assets/gf/fab.png"

function GlassFitting() {
  return (
    <div className="my-4">
    <div className="row justify-content-center">
      <h3 id="product-heading">Glass and furniture Fitting</h3>
    <Card title="Palladium" img={palladium} link="palladium"/>
    <Card title="Hemco" img={hemco} link="hemco"/>
    <Card title="Flora" img={flora} link="flora"/>
    {/* <Card title="Fab" img={fab} link="fab"/> */}
    </div>
  </div>
  );
}

export default GlassFitting;
