import Card from "../Card"
import olive from "../assets/rollingshutter/olive.png"
import rehau from "../assets/rollingshutter/rehau.png"

function RollingShutter() {
  return(
    <div className="my-4">
    <div className="row justify-content-center">
      <h3 id="product-heading">Rolling Shutter</h3>
      <Card title="Olive" img={olive} link="olive"/>
      <Card title="Rehau" img={rehau} link="rehau"/>
    </div>
  </div>
  );
}

export default RollingShutter;
